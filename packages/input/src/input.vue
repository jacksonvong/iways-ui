<template>
  <div
    :class="[
      type === 'textarea' ? 'iw-textarea' : 'iw-input',
      inputSize ? 'iw-input--' + inputSize : '',
      {
        'has-error': hasError,
        'is-disabled': inputDisabled,
        'iw-input-group': $slots.prepend || $slots.append,
        'iw-input-group--append': $slots.append,
        'iw-input-group--prepend': $slots.prepend,
        'iw-input--prefix': $slots.prefix || prefixIcon,
        'iw-input--suffix': $slots.suffix || suffixIcon || clearable || showPassword
      }
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <div v-if="$slots.prepend" class="iw-input-group__prepend">
        <slot name="prepend"/>
      </div>
      <input
        v-if="type !== 'textarea'"
        ref="input"
        :tabindex="tabindex"
        v-bind="$attrs"
        :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
        :disabled="inputDisabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :aria-label="label"
        class="iw-input__inner"
        @compositionstart="handleCompositionStart"
        @compositionend="handleCompositionEnd"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
      <!-- 前置内容 -->
      <span v-if="$slots.prefix || prefixIcon" class="iw-input__prefix">
        <slot name="prefix"/>
        <i
          v-if="prefixIcon"
          :class="prefixIcon"
          class="iw-input__icon"/>
      </span>
      <!-- 后置内容 -->
      <span
        v-if="$slots.suffix || suffixIcon || showClear || showPassword || validateState && needStatusIcon"
        class="iw-input__suffix">
        <span class="iw-input__suffix-inner">
          <template v-if="!showClear || !showPwdVisible">
            <slot name="suffix"/>
            <i
              v-if="suffixIcon"
              :class="suffixIcon"
              class="iw-input__icon"/>
          </template>
          <i
            v-if="showClear"
            class="iw-input__icon iw-icon-circle-close iw-input__clear"
            @click="clear"
          />
          <i
            v-if="showPwdVisible"
            class="iw-input__icon iw-icon-view iw-input__clear"
            @click="handlePasswordVisible"
          />
        </span>
        <i
          v-if="validateState"
          :class="['iw-input__validateIcon', validateIcon]"
          class="iw-input__icon"/>
      </span>
      <!-- 后置元素 -->
      <div v-if="$slots.append" class="iw-input-group__append">
        <slot name="append"/>
      </div>
    </template>
    <textarea
      v-else
      ref="textarea"
      :tabindex="tabindex"
      v-bind="$attrs"
      :disabled="inputDisabled"
      :readonly="readonly"
      :autocomplete="autocomplete"
      :style="textareaStyle"
      :aria-label="label"
      class="iw-textarea__inner"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    />
  </div>
</template>
<script>
import emitter from '@iways-ui/src/mixins/emitter'
import Migrating from '@iways-ui/src/mixins/migrating'
import calcTextareaHeight from './calcTextareaHeight'
import merge from '@iways-ui/src/utils/merge'

export default {
  name: 'IwInput',

  componentName: 'IwInput',

  mixins: [emitter, Migrating],

  inheritAttrs: false,

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {
      type: [String, Number],
      default() {
        return
      }
    },
    size: {
      type: String,
      default() {
        return 'default'
      }
    },
    resize: {
      type: String,
      default() {
        return ''
      }
    },
    form: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autocomplete: {
      type: String,
      default: 'off'
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      hasError: false,
      textareaCalcStyle: {},
      hovering: false,
      focused: false,
      isComposing: false,
      passwordVisible: false
    }
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize
    },
    validateState() {
      return this.elFormItem ? this.elFormItem.validateState : ''
    },
    needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false
    },
    validateIcon() {
      return {
        validating: 'iw-icon-loading',
        success: 'iw-icon-circle-check',
        error: 'iw-icon-circle-close'
      }[this.validateState]
    },
    textareaStyle() {
      return merge({}, this.textareaCalcStyle, { resize: this.resize })
    },
    inputSize() {
      return this.size || this._elFormItemSize || (this.$IWAYS || {}).size
    },
    inputDisabled() {
      return this.disabled || (this.elForm || {}).disabled
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined ? '' : String(this.value)
    },
    showClear() {
      return this.clearable &&
          !this.inputDisabled &&
          !this.readonly &&
          this.nativeInputValue &&
          (this.focused || this.hovering)
    },
    showPwdVisible() {
      return this.showPassword &&
          !this.inputDisabled &&
          !this.readonly &&
          (!!this.nativeInputValue || this.focused)
    }
  },

  watch: {
    value(val) {
      this.$nextTick(this.resizeTextarea)
      if (this.validateEvent) {
        // this.dispatch('ElFormItem', 'iw.form.change', [val])
      }
    },
    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    nativeInputValue() {
      this.setNativeInputValue()
    },
    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    type() {
      this.$nextTick(() => {
        this.setNativeInputValue()
        this.resizeTextarea()
        this.updateIconOffset()
      })
    }
  },

  created() {
    this.$on('inputSelect', this.select)
  },

  mounted() {
    this.setNativeInputValue()
    this.resizeTextarea()
    this.updateIconOffset()
  },

  updated() {
    this.$nextTick(this.updateIconOffset)
  },

  methods: {
    focus() {
      this.getInput().focus()
    },
    blur() {
      this.getInput().blur()
    },
    getMigratingConfig() {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      }
    },
    handleBlur(event) {
      this.focused = false
      this.$emit('blur', event)
      if (this.validateEvent) {
        // this.dispatch('ElFormItem', 'iw.form.blur', [this.value])
      }
    },
    select() {
      this.getInput().select()
    },
    resizeTextarea() {
      if (this.$isServer) return
      const { autosize, type } = this
      if (type !== 'textarea') return
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: calcTextareaHeight(this.$refs.textarea).minHeight
        }
        return
      }
      const minRows = autosize.minRows
      const maxRows = autosize.maxRows

      this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows)
    },
    setNativeInputValue() {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },
    handleFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleCompositionStart() {
      this.isComposing = true
    },
    handleCompositionEnd(event) {
      this.isComposing = false
      this.handleInput(event)
    },
    handleInput(event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return

      this.$emit('input', event.target.value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue)
    },
    handleChange(event) {
      this.$emit('change', event.target.value)
    },
    calcIconOffset(place) {
      const elList = [].slice.call(document.querySelectorAll(`.iw-input__${place}`) || [])
      if (!elList.length) return
      let iw = null
      for (let i = 0; i < elList.length; i++) {
        if (elList[i].parentNode === this.$iw) {
          iw = elList[i]
          break
        }
      }
      if (!iw) return
      const pendantMap = {
        suffix: 'append',
        prefix: 'prepend'
      }

      const pendant = pendantMap[place]
      if (this.$slots[pendant]) {
        iw.style.transform = `translateX(${place === 'suffix' ? '-' : ''}${this.$iw.querySelector(`.iw-input-group__${pendant}`).offsetWidth}px)`
      } else {
        iw.removeAttribute('style')
      }
    },
    updateIconOffset() {
      this.calcIconOffset('prefix')
      this.calcIconOffset('suffix')
    },
    clear() {
      this.$emit('input', '')
      this.$emit('change', '')
      this.$emit('clear')
    },
    handlePasswordVisible() {
      this.passwordVisible = !this.passwordVisible
      this.focus()
    },
    getInput() {
      return this.$refs.input || this.$refs.textarea
    },
    setError(error = true) {
      this.hasError = error
    }
  }
}
</script>
