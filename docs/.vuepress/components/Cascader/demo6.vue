<template>
  <div>
    <iw-cascader
      v-model="value"
      :data="data"
      :texts="texts"
      :show-search="true"
      :leafsPerColumn="5"
      :column-name="columnName"
      selectOnLeaf
      show-selected
      show-check-all
      multiple
      is-modal
      title="政策类型"
      size="mini"
      placement="bottomLeft"
      style="width: 120px;"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">管理</iw-button>
    </iw-cascader>
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
    }
  }
}
</script>