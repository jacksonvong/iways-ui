<template>
  <div>
    <iw-cascader
      v-model="value"
      :default-value="[]"
      :data="data"
      :multiple="true"
      :column-name="['一级', '二级', '三级', '四级']"
      :size="size"
      title="细分市场选择"
      placement="bottom-start"
      :height="200"
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
      data: [],
      size: 'mini'
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