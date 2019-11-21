<template>
  <div>
    <iw-manfbrand
      v-model="value"
      :data="data"
      :default-value="[]"
      :show-check-all="true"
      title="厂商"
      multiple
      placement="bottom-start"
      size="small"
      @tabChange="tabChange"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { data } from '../../data/get-manfbrand'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: [],
      data: []
    }
  },
  mounted() {
    this.data = data[0]
  },
  methods: {
    tabChange(value, key) {
      this.data = data[key] || []
    },
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.value = value
    }
  }

}
</script>