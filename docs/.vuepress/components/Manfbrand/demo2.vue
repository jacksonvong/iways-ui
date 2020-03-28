<template>
  <div>
    <iw-manfbrand
      v-model="value"
      :data="data"
      :default-value="[]"
      :show-check-all="true"
      :option-props="{
        value: 'value',
        label: 'text',
        children: 'son'
      }"
      title="厂商2"
      multiple
      placement="bottom-start"
      size="small"
      @tabChange="tabChange"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { data } from '../../data/get-manfbrand-2'
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