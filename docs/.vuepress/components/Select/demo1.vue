<template>
  <div>
    <iw-select
      v-model="value"
      :data="data"
      :option-props="{
        value: 'value',
        label: 'text',
        children: 'son'
      }"
      size="mini"
      style="width:100px;"
      placement="bottom-start"
      @change="handleChange"
    />
    <iw-select
      v-model="value2"
      :data="data"
      :option-props="{
        value: 'value',
        label: 'text',
        children: 'son'
      }"
      size="mini"
      style="width:100px;"
      placement="bottom-start"
      @change="handleChange2"
    />
    <iw-select
      v-model="value3"
      :data="[]"
      :option-props="{
        value: 'value',
        label: 'text',
        children: 'son'
      }"
      size="mini"
      style="width:400px;"
      placement="bottom-start"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-select-2'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: '',
      value2: 1,
      value3: '',
      data: [],
    }
  },
  mounted() {
    this.data = data
  },
  methods: {
    handleChange(value, texts) {
      console.log('value', value)
      this.value = value
    },
    handleChange2(value, texts) {
      console.log('value', value)
      this.value2 = value
    }
  }
}
</script>