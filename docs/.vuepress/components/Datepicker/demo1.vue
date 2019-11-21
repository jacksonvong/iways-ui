<template>
  <div>
    <iw-date-picker
      v-model="value1"
      type="date"
      size="mini"
      style="width: 130px;"
      align="right"
      placeholder="选择日期">
    </iw-date-picker>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      value1: '',
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