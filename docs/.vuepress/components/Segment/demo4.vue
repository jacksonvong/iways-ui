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
      :column-name="['一级', '二级', '三级', '四级']"
      title="细分市场选择"
      placement="bottom-start"
      size="mini"
      @change="handleChange"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-segment'
export default {
  name: 'Segment',
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