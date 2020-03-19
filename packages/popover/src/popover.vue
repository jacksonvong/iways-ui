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
  'top-start', 'top-end', 'bottom-start', 'bottom-end',
  'left-start', 'left-end', 'right-start', 'right-end',
  'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
  'leftTop', 'leftBottom', 'rightTop', 'rightBottom',
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
      validator(value) {
        return positions.indexOf(value) >= 0 || value === undefined  || value === ''
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
      reference.setAttribute('tabindex', 0)
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
      placement = placement.replace('Left', '-start') 
      placement = placement.replace('Top', '-start') 
      placement = placement.replace('Right', '-end') 
      placement = placement.replace('Bottom', '-end') 
      return placement
    },
    positionContent() {
      this.popperElm = this.popperElm || this.$refs.contentWrapper
      if (this.appendToBody) document.body.appendChild(this.popperElm)
      const { width, height, left, top } = this.referenceElm.getBoundingClientRect()
      const { height: popperHeight, width: popperWidth } = this.popperElm.getBoundingClientRect()

      const windowScrollX = window.scrollX || window.pageXOffset
      const windowScrollY = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      /**
       * ??? top bottom left right ??????
       * ????????????????
      */
      let placementArr = ['bottom', 'top', 'right', 'left']
      let placement = this.currentPlacement.split('-')[0]
      placement = placementArr.includes(placement) ? placement : ''
      if (placement) placementArr.unshift(placement)
      placementArr = [...new Set(placementArr)]

      let modifyArr = ['start', 'end']
      let modify = this.currentPlacement.split('-')[1] || ''
      modify = modifyArr.includes(modify) ? modify : ''
      if (modify) modifyArr.unshift(modify)
      modifyArr = [...new Set(modifyArr)]

      const _placement = placementArr.find(_placement => {
        switch(_placement) {
          case 'bottom':
            if (windowHeight > top + height + popperHeight) return true
            break
          case 'top':
            if (top > popperHeight) return true
            break
          case 'right':
            if (windowWidth > left + width + popperWidth) return true
            break
          case 'left':
            if (left > popperWidth) return true
            break
        }
      }) || 'bottom'
      let _currentPlacement = [_placement]

      /* placement????????? */
      if (!placement) modify = 'start'
      /* ???????????????? */
      if (modify) {
        const _modify = modifyArr.find(type => {
          switch(type) {
            case 'start':
              if (['top', 'bottom'].includes(_placement)) {
                if (left + popperWidth < windowWidth) return true
              }
              if (['left', 'right'].includes(_placement)) {
                if (top + popperHeight < windowHeight) return true
              }
              break
            case 'end':
              if (['top', 'bottom'].includes(_placement)) {
                if (left + width > popperWidth) return true
              }
              if (['left', 'right'].includes(_placement)) {
                if (top + height > popperHeight) return true
              }
              break
          }
        }) || ''
        /* ??????????????????????????? */
        if (_modify) _currentPlacement.push(_modify)
      }
      _currentPlacement = _currentPlacement.join('-')
      /* ??currentPlacement */
      this.currentPlacement = _currentPlacement

      /* ??reference???popper????? */
      const leftReferenceCenter = left - (popperWidth - width) / 2
      /* ???????popper????? */
      const windowCenter = (windowWidth - popperWidth) / 2

      let positionValue = {
        'top': {
          top: top + windowScrollY,
          left: (leftReferenceCenter + popperWidth < windowWidth ? leftReferenceCenter : windowCenter)  + windowScrollX
        },
        'top-start': {
          top: top + windowScrollY,
          left: left + windowScrollX
        },
        'top-end': {
          top: top + windowScrollY,
          left: left + width - popperWidth + windowScrollX
        },
        'bottom': {
          top: top + height + windowScrollY,
          left: (leftReferenceCenter + popperWidth < windowWidth ? leftReferenceCenter : windowCenter) + windowScrollX
        },
        'bottom-start': {
          top: top + height + windowScrollY,
          left: left + windowScrollX
        },
        'bottom-end': {
          top: top + height + windowScrollY,
          left: left + width - popperWidth + windowScrollX
        },
        'left': {
          top: top + (height - popperHeight) / 2 + windowScrollY + (this.offset.top || 0),
          left: left + windowScrollX
        },
        'left-start': {
          top: top + windowScrollY + (this.offset.top || 0),
          left: left + windowScrollX
        },
        'left-end': {
          top: top + height - popperHeight + windowScrollY + (this.offset.top || 0),
          left: left + windowScrollX
        },
        'right': {
          top: top + (height - popperHeight) / 2 + windowScrollY + (this.offset.top || 0),
          left: left + width + windowScrollX
        },
        'right-start': {
          top: top + windowScrollY + (this.offset.top || 0),
          left: left + width + windowScrollX
        },
        'right-end': {
          top: top + height - popperHeight + windowScrollY + (this.offset.top || 0),
          left: left + width + windowScrollX
        }
      }

      if (!this.appendToBody) {
        const { offsetLeft: offsetLeft, offsetTop: offsetTop, offsetHeight: offsetHeight, offsetWidth: offsetWidth } = this.$el
        const { left: left } = this.$el.getBoundingClientRect()
        const { width: parentWidth } = document.body.getBoundingClientRect()
        positionValue = {
          top: {
            top: offsetTop,
            left: (left + popperWidth > parentWidth ? offsetLeft- popperWidth + width : offsetLeft)
          },
          'top-start': {
            top: offsetTop,
            left: offsetLeft
          },
          'top-end': {
            top: offsetTop,
            left: offsetLeft - popperWidth + width
          },
          'bottom': {
            top: offsetHeight + offsetTop,
            left: (left + popperWidth > parentWidth ? offsetLeft- popperWidth + width : offsetLeft)
          },
          'bottom-start': {
            top: offsetHeight + offsetTop,
            left: offsetLeft
          },
          'bottom-end': {
            top: offsetHeight + offsetTop,
            left: offsetLeft - popperWidth + width
          },
          'left': {
            top: offsetTop + (offsetHeight - popperHeight) / 2,
            left: offsetLeft
          },
          'left-start': {
            top: offsetTop,
            left: offsetLeft
          },
          'left-end': {
            top: offsetTop + (offsetHeight - popperHeight),
            left: offsetLeft
          },
          'right': {
            top: offsetTop + (offsetHeight - popperHeight) / 2,
            left: offsetLeft + offsetWidth
          },
          'right-start': {
            top: offsetTop,
            left: offsetLeft + offsetWidth
          },
          'right-end': {
            top: offsetTop + (offsetHeight - popperHeight),
            left: offsetLeft + offsetWidth
          }
        }
      }
      this.popperElm.style.left = positionValue[_currentPlacement].left + 'px'
      this.popperElm.style.top = positionValue[_currentPlacement].top + 'px'
      const arrowWidthHeight = 12
      if (this.showArrow) {
        if (['top', 'bottom'].includes(_currentPlacement)) {
          this.$refs.arrow.style.left = (popperWidth - arrowWidthHeight) / 2 + 'px'
        }
        if (['top-start', 'bottom-start'].includes(_currentPlacement)) {
          this.$refs.arrow.style.left = (width - arrowWidthHeight) / 2  + 'px'
        }
        if (['top-end', 'bottom-end'].includes(_currentPlacement)) {
          this.$refs.arrow.style.left = popperWidth - (width + arrowWidthHeight) / 2 + 'px'
        }
        if (['left', 'right'].includes(_currentPlacement)) {
          this.$refs.arrow.style.top = (popperHeight - arrowWidthHeight) / 2 - (this.offset.top || 0) + 'px'
        }
        if (['left-start', 'right-start'].includes(_currentPlacement)) {
          this.$refs.arrow.style.top = arrowWidthHeight / 2 - (this.offset.top || 0) + 'px'
        }
        if (['left-end', 'right-end'].includes(_currentPlacement)) {
          this.$refs.arrow.style.top = popperHeight - (height + arrowWidthHeight) / 2 - (this.offset.top || 0) + 'px'
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
