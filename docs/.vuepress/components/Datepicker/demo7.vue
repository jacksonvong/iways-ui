<template>
  <div>
    <iw-date-picker
      v-model="value1"
      :picker-options="pickerOptions"
      type="quarter"
      format="yyyy/QQ"
      value-format="yyyyQ"
      size="mini"
      style="width: 130px;"
      align="right"
      placeholder="选择季度"
      @change="handleChange">
    </iw-date-picker>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      value1: new Date(1522425599000),
      value: []
    }
  },
  computed: {
    pickerOptions() { // 日期选择控制
      const months = [new Date(1483200000000), new Date(1519833600000)].map(item => {
        return item.valueOf()
      })
      return {
        disabledDate(time) {
          return months[1] < time.getTime() || time.getTime() < months[0]
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    handleChange(value) {
      console.log('value', value)
      this.value = value
    }
  }
}
</script>