<template>
  <div>
    <iw-cascader-table
      v-model="value"
      :data="data"
      :texts="texts"
      :show-search="true"
      :column-name="columnName"
      :optionProps="{
        value: 'value',
        label: 'text',
        children: 'son'
      }"
      selectOnLeaf
      show-selected
      show-check-all
      multiple
      title="政策类型"
      size="mini"
      placement="bottom"
      style="width: 120px;"
      @change="handleChange"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-policy-2'
export default {
  name: '',
  data() {
    return {
      value: [],
      texts: [],
      columnName: ['类别1', '类型1', '标签1'],
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
