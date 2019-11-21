<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :default-value="[]"
      :default-texts="[]"
      :show-check-all="true"
      :select-on-leaf="true"
      :column-name="['国家', '大区', '省份', '城市']"
      title="区域选择"
      placement="bottom-start"
      size="small"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { data } from './data/get-region'

export default {
  name: 'Region',
  data() {
    return {
      value: [],
      texts: [],
      valueTab: 0,
      data: [],
      defaultValue: [194],
      defaultTexts: [{ key: 194, value: '北京市', level: 3 }]
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

<style>
</style>
