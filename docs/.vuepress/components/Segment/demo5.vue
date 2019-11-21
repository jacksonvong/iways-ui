<template>
  <div>
    <iw-select
      v-model="size"
      :data="sizes"
      :multiple="false"
      :size="size"
      placement="bottom-start"
      @change="changeSize"
    />
    <iw-input
      v-model="height"
      :size="size"
      style="width:120px;"
      placeholder="高度"
    />
    <iw-input
      v-model="width"
      :size="size"
      style="width:120px;"
      placeholder="宽度"
    />
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="false"
      :column-name="['一级', '二级', '三级', '四级']"
      :size="size"
      title="细分市场选择"
      placement="bottom-start"
      :height="Number(height)"
      :width="Number(width)"
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
      size: 'mini',
      sizes: [{key: 'default', value: 'default'}, {key: 'medium', value: 'medium'}, {key: 'small', value: 'small'}, {key: 'mini', value: 'mini'}],
      height: 320,
      width: 180
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
    },
    changeSize(value) {
      this.size = value
    }
  }

}
</script>