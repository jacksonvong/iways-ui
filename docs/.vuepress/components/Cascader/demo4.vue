<template>
  <div>
    <iw-cascader
      ref="cascader"
      v-model="value"
      :data="data"
      :texts="texts"
      :show-search="true"
      :leafsPerColumn="5"
      :column-name="columnName"
      :height="200"
      selectOnLeaf
      show-selected
      show-check-all
      multiple
      title="政策类型"
      size="mini"
      placement="bottom-start"
      style="width: 120px;"
      @change="handleChange"
    />
    <iw-button type="primary" @click="getCheckedKeys()">getCheckedKeys</iw-button>
  </div>
</template>
<script>
import { data } from '../../data/get-policy'
export default {
  name: '',
  data() {
    return {
      value: [],
      texts: [],
      columnName: ['类别', '类型', '标签'],
      data: [],
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
    getCheckedKeys() {
      const keys = this.$refs['cascader'].getCheckedKeys()
      console.log(keys)
    }
  }
}
</script>