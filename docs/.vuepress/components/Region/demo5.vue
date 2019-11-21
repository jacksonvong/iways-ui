<template>
  <div>
    <iw-select
      v-model="size"
      :data="sizes"
      :multiple="false"
      :size="size"
      style="width:120px;"
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
      :column-name="['国家', '大区', '省份', '城市']"
      :size="size"
      title="区域选择"
      style="width:120px;"
      :height="Number(height)"
      :width="Number(width)"
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