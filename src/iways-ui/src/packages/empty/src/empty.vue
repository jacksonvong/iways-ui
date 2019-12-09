<template>
  <div class="iw-empty">
    <div :class="'iw-empty--'+size">
      <div v-if="parseInt(status) !== 0" class="iw-empty__main">
        <span>
          <slot name="icon">
            <i class="iw-icon-warning" />
          </slot>
        </span>
        <p>
          <slot name="tips">
            {{ tips }}
          </slot>
        </p>
      </div>
    </div>
    <div v-if="false" class="scalable" />
  </div>
</template>
<script>
import Locale from '@iways-ui/src/mixins/locale'
export default {
  name: 'IwEmpty',
  mixins: [Locale],
  props: {
    size: {
      type: String,
      default: 'default'
    },
    status: {
      type: [String, Number],
      default: undefined
    }
  },
  computed: {
    tips() {
      let tips = ''
      if (typeof this.status === 'string') {
        return this.status
      }
      switch (parseInt(this.status)) {
        case 0 : tips = this.t('iw.empty.wait')
          break
        case 500 : tips = this.t('iw.empty.exception')
          break
        case 200 : tips = this.t('iw.common.noData')
          break
        default: tips = this.t('iw.empty.unknow')
          break
      }
      return tips
    }
  }
}
</script>
