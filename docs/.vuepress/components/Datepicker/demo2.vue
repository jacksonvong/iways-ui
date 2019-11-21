<template>
  <div>
    <iw-date-picker
      v-model="value"
      :editable="false"
      format="yyyy/MM/dd"
      value-format="yyyyMMdd"
      type="daterange"
      size="small"
      style="width: 220px;"
      align="right"
      placeholder="选择日期"
      @change="handleChange">
    </iw-date-picker>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      value: []
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