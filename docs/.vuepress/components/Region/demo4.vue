<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :select-on-leaf="true"
      :show-check-all="false"
      :show-search="false"
      :column-name="['国家', '大区', '省份', '城市']"
      title="区域选择"
      placement="bottom"
      size="mini"
      @change="handleChange"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-region'
export default {
  name: 'Region',
  data() {
    return {
      value: [],
      texts: [],
      data: []
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