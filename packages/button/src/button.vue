<template>
  <button
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'iw-button--' + type : '',
      buttonSize ? 'iw-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    class="iw-button"
    @click="handleClick"
  >
    <i v-if="loading" class="iw-icon-loading"/>
    <i v-if="icon && !loading" :class="icon"/>
    <span v-if="$slots.default"><slot/></span>
  </button>
</template>
<script>
export default {
  name: 'IwButton',

  inject: {
    iwForm: {
      default: ''
    },
    iwFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    _iwFormItemSize() {
      return (this.iwFormItem || {}).iwFormItemSize
    },
    buttonSize() {
      return this.size || (this.$IWAYS || {}).size
    },
    buttonDisabled() {
      return this.disabled
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
}
</script>
