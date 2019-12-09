<template>
  <div ref="popover" class="iw-popover__wrap">
    <div
      v-show="!disabled&&visible"
      ref="contentWrapper"
      :style="{ width: width + 'px' }"
      :id="tooltipId"
      :class="{[`iw-placement-${currentPlacement}`]:true, [popperClass]:true}"
      class="iw-popover">
      <slot>{{ content }}</slot>
    </div>
    <div ref="triggerWrapper">
      <slot name="reference" />
    </div>
  </div>
</template>

<script>
import { generateId } from '@iways-ui/src/utils/util'
import { addClass } from '@iways-ui/src/utils/dom'
const positions = [
  'top', 'bottom', 'left', 'right',
  'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
  'leftTop', 'leftBottom', 'rightTop', 'rightBottom',
  'top-start', 'top-end', 'bottom-start', 'bottom-end',
  'left-start', 'left-end', 'right-start', 'right-end'
]
const stop = e => e.stopPropagation()
export default {
  name: 'IwPopover',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'top',
      validator(value) {
        return positions.indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      }
    },
    content: {
      type: String,
      default: ''
    },
    reference: {
      type: Object,
      default() {
        return undefined
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ''
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '0'
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    }
  },
  data() {
    return {
      visible: false,
      referenceElm: undefined,
      popperElm: undefined,
      currentPlacement: ''
    }
  },
  computed: {
    tooltipId() {
      return `iw-popover-${generateId()}`
    }
  },
  watch: {
    value() {
      setTimeout(() => {
        this.visible = this.value
      }, 100)
    }
  },
  mounted() {
    let reference = this.referenceElm = this.reference || this.$refs.triggerWrapper
    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm
    }
    if (reference) {
      addClass(reference, 'iw-popover__reference')
      reference.setAttribute('aria-describedby', this.tooltipId)
      reference.setAttribute('tabindex', 0) // tab序列
    }

    this.currentPlacement = this.currentPlacement || this.placement
    this.currentPlacement = this.convertPlacement(this.currentPlacement)
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.open)
      this.$refs.popover.addEventListener('mouseleave', this.close)
    }
  },
  beforeDestroy() {
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop)
      document.body.removeChild(this.popperElm)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover && this.$refs.popover.removeEventListener('click', this.onClick)
    } else {
      this.$refs.popover && this.$refs.popover.removeEventListener('mouseenter', this.open)
      this.$refs.popover && this.$refs.popover.removeEventListener('mouseleave', this.close)
    }
  },

  methods: {
    convertPlacement(placement) {
      const partters = ['top', 'bottom', 'left', 'right']
      for (const pattern of partters) {
        const reg = new RegExp('^' + pattern)
        if (reg.test(placement)) {
          return pattern
        }
      }
      return placement
    },
    positionContent() {
      this.popperElm = this.popperElm || this.$refs.contentWrapper
      if (this.appendToBody) document.body.appendChild(this.popperElm)
      const { width, height, left, top } = this.referenceElm.getBoundingClientRect()
      const { height: height2, width: width2 } = this.popperElm.getBoundingClientRect()
      let left2 = Math.max(0, left + width - width2)
      left2 = left2 > 0 ? left2 : left
      const windowScrollX = window.scrollX || window.pageXOffset
      const windowScrollY = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      const positionY = windowHeight - height2 < top && height2 < top ? 'top' : (height2 < windowHeight - top - height ? 'bottom' : 'left')
      const positionX = windowWidth - width2 < left && width2 < left ? 'left' : 'right'
      this.currentPlacement = this.convertPlacement(this.placement)
      this.currentPlacement = ['bottom', 'top'].includes(this.currentPlacement) ? positionY : this.currentPlacement
      this.currentPlacement = ['right', 'left'].includes(this.currentPlacement) ? positionX : this.currentPlacement
      let positionValue = {
        top: {
          top: top + windowScrollY,
          left: (left + width2 > document.body.clientWidth ? left2 : left) + windowScrollX
        },
        bottom: {
          top: top + height + windowScrollY,
          left: (left + width2 > document.body.clientWidth ? left2 : left) + windowScrollX
        },
        left: {
          top: top + windowScrollY + (height - height2) / 2,
          left: left + windowScrollX
        },
        right: {
          top: top + windowScrollY + (height - height2) / 2,
          left: left + windowScrollX + width
        }
      }

      if (!this.appendToBody) {
        const { offsetLeft: offsetLeft, offsetTop: offsetTop, offsetHeight: offsetHeight, offsetWidth: offsetWidth } = this.$el
        const { left: left } = this.$el.getBoundingClientRect()
        const { width: parentWidth } = document.body.getBoundingClientRect()
        const relativeLeft = left - offsetLeft
        positionValue = {
          top: {
            top: offsetTop,
            left: (left + width2 > parentWidth ? left - relativeLeft - width2 + width : offsetLeft)
          },
          bottom: {
            top: offsetHeight + offsetTop,
            left: (left + width2 > parentWidth ? left - relativeLeft - width2 + width : offsetLeft)
          },
          left: {
            top: offsetTop + (offsetHeight - height2) / 2,
            left: offsetLeft
          },
          right: {
            top: offsetTop + (offsetHeight - height2) / 2,
            left: offsetLeft + offsetWidth
          }
        }
      }
      this.popperElm.style.left = positionValue[this.currentPlacement].left + 'px'
      this.popperElm.style.top = positionValue[this.currentPlacement].top + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) { return }
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
      ) { return }
      this.close()
    },
    listenToDocument() {
      document.addEventListener('click', this.onClickDocument)
    },
    open() {
      this.visible = true
      this.$emit('input', this.visible)
      this.$nextTick(() => {
        this.positionContent()
        this.listenToDocument()
      })
    },
    close() {
      this.visible = false
      this.$emit('input', this.visible)
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper && this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }
    }
  }
}
</script>
