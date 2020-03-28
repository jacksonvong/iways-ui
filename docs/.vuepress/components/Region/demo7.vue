<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :select-on-leaf="false"
      :column-name="['国家', '大区', '省份', '城市']"
      :require="true"
      :min="min"
      :max="max"
      :optionProps="{
        label: 'text',
        value: 'value',
        children: 'sub'
      }"
      title="区域选择"
      size="mini"
      @change="handleChange"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-region-2'
export default {
  name: 'Region',
  data() {
    return {
      value: [],
      texts: [],
      data: [],
      min: 5,
      max: 10
    }
  },
  mounted() {
    this.data = data
  },
  methods: {
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.value = value
      this.texts = texts
    }
  }

}
</script>
