<template>
  <div>
    <iw-date-picker
      v-model="value1"
      type="quarterrange"
      value-format="yyyyQ"
      size="mini"
      style="width: 180px;"
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
      value1: ["20192", "20201"]
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