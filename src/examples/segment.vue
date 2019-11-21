<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :show-check-all="true"
      :select-on-leaf="false"
      :column-name="['level0', 'level1', 'level2']"
      title="细分市场选择"
      placement="bottom-start"
      size="small"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { data } from './data/get-segment'

export default {
  name: 'Segment',
  data() {
    return {
      value: [],
      texts: [],
      valueTab: 0,
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

<style>
</style>
