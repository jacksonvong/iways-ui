<template>
  <iw-popover
    v-model="visible"
    :trigger="trigger"
    :placement="placement"
    :append-to-body="appendToBody"
    :popper-class="'iw-select iw-select--'+iwSize+(disabled?' iw-select--disabled':'')+(className?' '+className:'')"
    :disabled="disabled"
    :width="null"
  >
    <div slot="reference" class="iw-select-reference">
      <div :class="[{'is-focus': !disabled&&visible, 'is-disabled': disabled, 'has-error': hasError}, 'iw-input', 'iw-input--' + iwSize]" :style="referenceWidth?'width:'+referenceWidth+'px':''">
        <div class="iw-input__inner">
          <span v-if="triggerText" class="iw-input__value">
            <font>{{ triggerText }}</font>
          </span>
          <span v-else-if="showSearch" class="iw-input__value">
            <input
              v-if="visible"
              ref="input"
              v-model="keyword"
              :disabled="disabled"
              :style="'width:'+(referenceWidth-36)+'px'"
              :unselectable="!visible?'off':'on'"
              :placeholder="placeholderText"
              @input="handleSearchChange"
              @focus="handleSearchFocus"
              @blur="handleSearchBlur">
            <input
              v-else-if="valueText"
              ref="input"
              :style="'width:'+(referenceWidth-36)+'px'"
              :value="valueText"
              :disabled="disabled"
              unselectable="on"
              readonly>
            <input v-else :style="'width:'+(referenceWidth-36)+'px'" :value="placeholder || t('iw.select.placeholder')" :disabled="disabled" class="iw-input__placeholder" unselectable="on" readonly >
          </span>
          <span v-else-if="valueText&&!showSearch" class="iw-input__value">
            <input
              ref="input"
              :value="valueText"
              :disabled="disabled"
              :style="'width:'+(referenceWidth-36)+'px'"
              unselectable="on"
              readonly>
          </span>
          <span v-else class="iw-input__value">
            <input :style="'width:'+(referenceWidth-36)+'px'" :value="placeholder || t('iw.select.placeholder')" :disabled="disabled" class="iw-input__placeholder" unselectable="on" readonly >
          </span>
          <span class="iw-input__suffix">
            <slot>
              <i v-show="!showClose" :class="['iw-input__icon', 'iw-icon-' + iconClass]"/>
              <i v-if="showClose" class="iw-input__icon iw-icon-circle-close"/>
            </slot>
          </span>
        </div>
      </div>
    </div>
    <div v-if="!disabled" :id="'iw-select__popover--'+id" :style="'min-width:'+(referenceWidth-2)+'px'">
      <div class="iw-select__body">
        <iw-scrollbar :ref="'scrollbarRight__KEY'" wrap-class="iw-select__wrap">
          <ul v-if="showCheckAll&&multiple&&datas&&datas.filter(item=>item.visible!==false).length" class="iw-select__group">
            <li :class="'iw-select__group-item--'+iwSize" class="iw-select__group-item" @click="handleCheckAllChange()">
              <span
                :class="[
                  'iw-checkbox',
                  isCheckAllChecked()?'iw-checkbox--checked':'',
                  isCheckAllIndeterminate()?'iw-checkbox--indeterminate':''
                ]"
              />
              <span :class="[multiple?'iw-text':'']">{{ t('iw.select.checkAll') }}</span>
            </li>
          </ul>
          <ul v-if="datas&&datas.filter(item=>item.visible!==false).length" class="iw-select__group">
            <template v-for="(item, key) in datas">
              <li v-if="item.visible !== false" :key="key" :scroll-key="item[optionProps.value] + '_' + 'SELECT'" :class="[{on: item.selected}, 'iw-select__group-item--'+iwSize]" class="iw-select__group-item" @click="handleItemChange(item)">
                <span :title="item[optionProps.label]">
                  <span
                    :class="[
                      multiple?'iw-checkbox':'',
                      multiple&&item.selected?'iw-checkbox--checked':''
                    ]"
                  />
                  <em :title="item.value" :class="[multiple?'iw-text':'']">
                    {{ item.value }}<abbr class="font-gray">{{ item.date ? `(`+item.date+`)` : '' }}</abbr>
                  </em>
                  <i class="iw-select__item-icon" />
                </span>
              </li>
            </template>
          </ul>
          <ul v-else class="iw-select__group">
            <li :class="'iw-select__group-item--'+iwSize" class="iw-select__group-item" @click="visible = false">
              <em class="iw-select__placeholder">{{ placeholder || t('iw.select.placeholder') }}</em>
            </li>
          </ul>
        </iw-scrollbar>
      </div>
      <div v-if="multiple&&datas&&datas.filter(item=>item.visible!==false).length" class="iw-select__footer">
        <iw-button :size="iwSize" @click="reset()">
          {{ t('iw.common.reset') }}
        </iw-button>
        <iw-button :size="iwSize" type="primary" @click="submit(false)">
          {{ t('iw.common.confirm') }}
        </iw-button>
      </div>
    </div>
  </iw-popover>
</template>

<script>
import { deepClone, substr } from '@iways-ui/src/utils/util'
import Locale from '@iways-ui/src/mixins/locale'
export default {
  name: 'IwSelect',
  mixins: [Locale],
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: [Array, String, Number],
      default() {
        return []
      }
    },
    defaultValue: {
      type: Array,
      default() {
        return []
      }
    },
    id: {
      type: Number,
      default() {
        return parseInt(Math.random() * 10000)
      }
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default() {
        return false
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 0
    },
    optionProps: {
      type: Object,
      default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        }
      }
    },
    triggerText: {
      type: [String, Boolean],
      default() {
        return false
      }
    },
    width: {
      type: [String, Number],
      default() {
        return null
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    /**
     * Popover的属性
     */
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: 'bottom'
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    }
  },
  data() {
    return {
      visible: false, // 弹出层状态
      hasError: false,
      referenceWidth: null,
      datas: [],
      selectValues: [], // 多选状态下的选中值
      selectTexts: [], // 多选状态下的选中值名称
      checkedOptions: [],
      keyword: this.valueText, // 查询值
      lastSearch: undefined,
      placeholderText: this.placeholder
    }
  },
  computed: {
    iwSize() {
      return this.size || (this.$IWAYS || {}).size
    },

    showClose() {
      const hasValue = this.multiple
        ? Array.isArray(this.value) && this.value.length > 0
        : this.value !== undefined && this.value !== null && this.value !== ''
      return this.clearable && !this.disabled && hasValue
    },

    iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up'
    },

    valueText() {
      if (this.multiple && this.checkedOptions && this.checkedOptions.length > 0) {
        if (this.checkedOptions.length > 1) {
          return this.$t('iw.common.selected') + '(' + this.checkedOptions.length + ')'
        } else {
          return this.checkedOptions[0][this.optionProps.label]
        }
      } else if (!this.multiple && this.checkedOptions && this.checkedOptions.length) {
        return this.checkedOptions[this.checkedOptions.length - 1][this.optionProps.label]
      } else {
        return ''
      }
    }
  },
  watch: {
    value() {
      this.initData()
      this.initValue()
      this.initStatus()
    },
    data() {
      this.initData()
      this.initValue()
      this.referenceWidth = this.$el.offsetWidth
    },
    visible() {
      this.initData()
      this.initValue()
      this.initStatus()
    }
  },
  mounted() {
    this.initData()
    this.initValue()
    this.initStatus()
    this.referenceWidth = this.$el.offsetWidth
  },
  methods: {
    initValue(value = this.value) {
      if (typeof value === 'number' || typeof value === 'string') {
        this.selectValues = [value]
      } else if (value instanceof Array) {
        this.selectValues = this.multiple ? deepClone(value) : [value[0]]
      } else {
        this.selectValues = []
      }
      const selectTexts = this.datas.filter(item => {
        const selected = this.selectValues.includes(item[this.optionProps.value])
        this.$set(item, 'selected', selected)
        return selected
      })
      this.selectTexts = deepClone(selectTexts)
      this.checkedOptions = deepClone(selectTexts)
      this.placeholderText = this.valueText || this.placeholder
    },
    initData(input = false) {
      if (this.showSearch && !input) {
        this.keyword = this.visible ? undefined : this.valueText
      }
      this.datas = this.data.map(item => {
        let visible = true
        if (this.showSearch && this.keyword !== '' && this.keyword !== undefined && item[this.optionProps.label].indexOf(this.keyword) === -1) {
          visible = false
        }
        item.visible = visible
        return item
      })
    },
    initStatus() {
      if (this.selectValues.length) {
        const key = this.selectValues[0]
        this.$nextTick(() => {
          this.scrollTop(key)
        })
      }
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus()
      }
    },
    scrollTop(key, target = 'SELECT') {
      const obj = document.querySelector('#iw-select__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]')
      if (obj) {
        const scrollTop = parseInt(obj['offsetTop'])
        document.querySelector('#iw-select__popover--' + this.id + ' .iw-select__wrap').scrollTop = scrollTop
      }
    },
    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange(event) {
      this.lastSearch = event.timeStamp
      setTimeout(() => {
        if (this.lastSearch === event.timeStamp) {
          this.initData(true)
        }
      }, 400)
    },
    handleSearchFocus() {
      this.placeholderText = this.valueText || this.placeholder
    },
    handleSearchBlur() {
      this.placeholderText = this.valueText || this.placeholder
    },
    handleItemChange(item, selected) {
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected
        this.$set(item, 'selected', selected)
      } else {
        this.datas.map(element => {
          this.$set(element, 'selected', item[this.optionProps.value] === element[this.optionProps.value])
        })
      }
      this.selectTexts = this.datas.filter(item => item.selected)
      this.selectValues = this.selectTexts.map(item => item[this.optionProps.value])
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus()
      }
      this.multiple || this.submit()
    },
    handleCheckAllChange() {
      const selected = this.isCheckAllChecked()
      this.datas.map(item => {
        this.$set(item, 'selected', !selected)
        return item
      })
      this.selectTexts = this.datas.filter(item => !!item.selected)
      this.selectValues = this.datas.filter(item => !!item.selected).map(item => item[this.optionProps.value])
      if (this.showSearch && this.$refs.input) {
        this.$refs.input.focus()
      }
    },
    isCheckAllChecked() {
      return this.selectValues.length === this.data.length
    },
    isCheckAllIndeterminate() {
      return this.selectValues.length > 0 && this.selectValues.length !== this.datas.length
    },
    reset(submit = false) {
      this.initValue(this.defaultValue)
      if (submit === true) {
        this.checkedOptions = deepClone(this.selectTexts)
      }
    },
    submit(visible = false) {
      const value = this.multiple ? this.selectValues : this.selectValues[0]
      this.checkedOptions = deepClone(this.selectTexts)
      this.$emit('input', value)
      this.$emit('change', value)
      this.keyword = this.valueText
      this.placeholderText = this.valueText || this.placeholder
      this.visible = visible
    },
    substr(str, len) {
      return substr(str, len)
    },
    setError(error = true) {
      this.hasError = error
    }
  }
}
</script>
