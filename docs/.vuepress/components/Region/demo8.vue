<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :select-on-leaf="false"
      :column-name="['国家', '大区', '省份', '城市']"
      is-modal
      show-check-all
      title="区域选择"
      placement="bottom-start"
      size="mini"
      @change="handleChange">
      <iw-button slot="reference" type="primary" size="mini">管理区域</iw-button>
    </iw-cascader>
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