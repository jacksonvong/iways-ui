<template>
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave">
    <div
      v-show="visible"
      class="iw-dialog__wrapper"
      @click.self="handleWrapperClick">
      <div
        ref="dialog"
        :key="key"
        :aria-label="title || 'dialog'"
        :class="['iw-dialog', { 'is-fullscreen': fullscreen, 'iw-dialog--center': center }, customClass]"
        :style="style"
        role="dialog"
        aria-modal="true">
        <div class="iw-dialog__header">
          <slot name="title">
            <span v-if="title" class="iw-dialog__title">{{ title }}</span>
          </slot>
          <button
            v-if="showClose"
            type="button"
            class="iw-dialog__headerbtn"
            aria-label="Close"
            @click="handleClose">
            <i class="iw-dialog__close iw-icon iw-icon-close"/>
          </button>
        </div>
        <div v-if="rendered" class="iw-dialog__body"><slot/></div>
        <div v-if="$slots.footer" class="iw-dialog__footer">
          <slot name="footer"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popup from '@iways-ui/src/utils/popup'
import Migrating from '@iways-ui/src/mixins/migrating'
import emitter from '@iways-ui/src/mixins/emitter'

export default {
  name: 'IwDialog',

  mixins: [Popup, emitter, Migrating],

  props: {
    title: {
      type: [String, Boolean],
      default: false
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: true
    },

    closeOnPressEscape: {
      type: Boolean,
      default: true
    },

    showClose: {
      type: Boolean,
      default: false
    },

    width: {
      type: String,
      default() {
        return ''
      }
    },

    fullscreen: {
      type: Boolean,
      default: false
    },

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15vh'
    },
    beforeClose: {
      type: Function,
      default: undefined
    },
    center: {
      type: Boolean,
      default: false
    },

    destroyOnClose: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      closed: false,
      key: 0
    }
  },

  computed: {
    style() {
      const style = {}
      if (!this.fullscreen) {
        style.marginTop = this.top
        if (this.width === '0px') {
          style.width = '400px'
        } else if (this.width) {
          style.width = this.width
        }
      }
      return style
    }
  },

  watch: {
    visible(val) {
      if (val) {
        this.closed = false
        this.$emit('open')
        this.$el.addEventListener('scroll', this.updatePopper)
        this.$nextTick(() => {
          this.$refs.dialog.scrollTop = 0
        })
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper)
        if (!this.closed) this.$emit('close')
        if (this.destroyOnClose) {
          this.$nextTick(() => {
            this.key++
          })
        }
      }
    }
  },

  mounted() {
    if (this.visible) {
      this.rendered = true
      this.open()
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    }
  },

  destroyed() {
    // if appendToBody is true, remove DOM node after destroy
    if (this.appendToBody && this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
  },

  methods: {
    getMigratingConfig() {
      return {
        props: {
          'size': 'size is removed.'
        }
      }
    },
    handleWrapperClick() {
      if (!this.closeOnClickModal) return
      this.handleClose()
    },
    handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide)
      } else {
        this.hide()
      }
    },
    hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false)
        this.$emit('close')
        this.closed = true
      }
    },
    updatePopper() {
      this.broadcast('IwSelectDropdown', 'updatePopper')
      this.broadcast('IwDropdownMenu', 'updatePopper')
    },
    afterEnter() {
      this.$emit('opened')
    },
    afterLeave() {
      this.$emit('closed')
    }
  }
}
</script>
