<template>
  <div>
    <iw-date-picker
      v-model="value1"
      :picker-options="pickerOptions"
      type="month"
      size="mini"
      style="width: 130px;"
      align="right"
      placeholder="选择月份"
      @change="handleChange"
    />
  </div>
</template>
<script>
import moment from 'moment'
export default {
  name: '',
  data() {
    return {
      value1: '',
      value: [],
      dataTime: [
        {
          key: 201910,
          selected: true,
          value: "201910"
        },
        {
          key: 201909,
          value: "201909"
        }
      ]
    }
  },
  computed: {
    pickerOptions() { // 日期选择控制
      const months = this.dataTime.map(item => {
        const date = (new Date(String(item.key).substr(0, 4), String(item.key).substr(4, 2) - 1))
        return [moment(date).valueOf(), moment(date).add(1, 'months').valueOf()]
      })
      return {
        disabledDate(time) {
          return !months.find(item => {
            return item[0] <= time.getTime() && time.getTime() < item[1]
          })
        }
      }
    }
  },
  mounted() {
  },
  methods: {
    handleChange(value) {
      setTimeout(() => {
        console.log('value', value)
      }, 5000)
    }
  }
}
</script>