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
export default {
  name: 'IwEmpty',
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
        case 0 : tips = '等待请求'
          break
        case 500 : tips = '网络异常'
          break
        case 200 : tips = '暂无数据'
          break
        default: tips = '未知错误'
          break
      }
      return tips
    }
  }
}
</script>
