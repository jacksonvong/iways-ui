<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :select-on-leaf="false"
      :column-name="['一级', '二级', '三级', '四级']"
      :require="true"
      :min="min"
      :max="max"
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