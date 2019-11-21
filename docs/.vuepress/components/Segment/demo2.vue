<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :show-check-all="true"
      :select-on-leaf="false"
      :show-selected="true"
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