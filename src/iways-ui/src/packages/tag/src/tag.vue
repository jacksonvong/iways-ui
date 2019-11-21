<script>
export default {
  name: 'IwTag',
  props: {
    text: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    },
    hit: {
      type: Boolean,
      default: false
    },
    disableTransitions: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    tagSize() {
      return this.size || (this.$ELEMENT || {}).size
    }
  },
  methods: {
    handleClose(event) {
      event.stopPropagation()
      this.$emit('close', event)
    },
    handleClick(event) {
      event.stopPropagation()
      this.$emit('click', event)
    }
  },
  render(h) {
    const classes = ['iw-tag', this.type ? `iw-tag--${this.type}` : '',
      this.tagSize ? `iw-tag--${this.tagSize}` : '',
      { 'is-hit': this.hit }
    ]
    const tagEl = (<span class={classes} style={{ backgroundColor: this.color }} on-click={this.handleClick}>
      { this.$slots.default }
      {
        this.closable && <i class='iw-tag__close iw-icon-close' on-click={this.handleClose}></i>
      }
    </span>)

    return this.disableTransitions ? tagEl : <transition name='iw-zoom-in-center'>{ tagEl }</transition>
  }
}
</script>
