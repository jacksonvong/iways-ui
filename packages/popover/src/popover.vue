<template>
  <div ref="popover" class="iw-popover__wrap">
    <div
      v-show="!disabled&&visible"
      ref="contentWrapper"
      :style="{ width: width + 'px', zIndex: zIndex }"
      :id="tooltipId"
      :class="{[`iw-placement-${currentPlacement.split('-')[0]}`]:true, [popperClass]:true}"
      class="iw-popover">
      <div class="iw-popover__content" :style="bodyStyle">
        <slot>{{ content }}</slot>
      </div>
      <div v-if="showArrow" ref="arrow" class="iw-popover__arrow"></div>
    </div>
    <div ref="triggerWrapper">
      <slot name="reference" />
    </div>
  </div>
</template>

<script>
import { generateId } from '@iways-ui/src/utils/util'
import { addClass } from '@iways-ui/src/utils/dom'
import { PopupManager } from '@iways-ui/src/utils/popup'
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
    },
    showArrow: {
      type: Boolean,
      default: false
    },
    bodyStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    offset: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      visible: false,
      zIndex: 2000,
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
        this.zIndex = PopupManager.nextZIndex()
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
      const partters = ['right-start', 'right-end', 'top', 'bottom', 'left', 'right']
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
      const windowScrollX = window.scrollX || window.pageXOffset
      const windowScrollY = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth      
      const positionY = height2 < top && height2 < top ? 'top' : (windowHeight > height2 + top + height ? 'bottom' : '')
      const positionX = windowWidth - width2 < left && width2 < left ? 'left' : (windowWidth > width2 + width + left ? 'right' : '')

      this.currentPlacement = this.convertPlacement(this.placement)
      this.currentPlacement = ['bottom', 'top'].includes(this.currentPlacement) ? positionY : this.currentPlacement
      if (this.currentPlacement === '') {
        this.currentPlacement = positionX !== '' ? positionX : 'bottom'
      }
      const refercenCenter = left - (width2 - width) / 2
      const windowCenter = (windowWidth - width2) / 2
      const clientWidth = document.body.clientWidth
      let positionValue = {
        top: {
          top: top + windowScrollY,
          left: (
            left + width2 > clientWidth ? 
              (left2 > 0 ? left2 : (refercenCenter + width2 < clientWidth ? refercenCenter : windowCenter)) : 
              left
          ) + windowScrollX
        },
        bottom: {
          top: top + height + windowScrollY,
          left: (
            left + width2 > clientWidth ? 
              (left2 > 0 ? left2 : (refercenCenter + width2 < clientWidth ? refercenCenter : windowCenter)) : 
              left
          ) + windowScrollX
        },
        left: {
          top: top + windowScrollY + (height - height2) / 2,
          left: left + windowScrollX
        },
        right: {
          top: top + windowScrollY + (height - height2) / 2,
          left: left + windowScrollX + width
        },
        'right-start': {
          top: top + windowScrollY + (this.offset.top || 0),
          left: left + windowScrollX + width
        },
        'right-end': {
          top: top + windowScrollY + height - height2 + (this.offset.top || 0),
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
          },
          'right-start': {
            top: offsetTop,
            left: offsetLeft + offsetWidth
          }
        }
      }
      this.popperElm.style.left = positionValue[this.currentPlacement].left + 'px'
      this.popperElm.style.top = positionValue[this.currentPlacement].top + 'px'
      if (this.showArrow) {
        if (['top', 'bottom'].includes(this.currentPlacement)) {
          this.$refs.arrow.style.left = (width - 12) / 2 + 'px'
        }
        if (['left', 'right'].includes(this.currentPlacement)) {
          this.$refs.arrow.style.top = (height2 - 12) / 2 + 'px'
        }
        if (['right-start'].includes(this.currentPlacement)) {
          this.$refs.arrow.style.top = (12) / 2 - (this.offset.top || 0) + 'px'
        }
        if (['right-end'].includes(this.currentPlacement)) {
          this.$refs.arrow.style.top = height2 - (height + 12) / 2 - (this.offset.top || 0) + 'px'
        }
      } else {
        this.popperElm.style.marginLeft = 0
        this.popperElm.style.marginTop = 0
      }
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
