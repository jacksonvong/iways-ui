<template>
  <div>
    <iw-date-picker
      v-model="value"
      :editable="false"
      type="year"
      size="mini"
      style="width: 120px;"
      align="right"
      placeholder="选择年份"
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