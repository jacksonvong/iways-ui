<template>
  <div>
    <iw-cascader-table
      v-model="value"
      :data="data"
      :texts="texts"
      :show-search="true"
      :column-name="columnName"
      show-selected
      title="政策类型"
      size="mini"
      clearable
      placement="bottom-start"
      style="width: 120px;"
      @change="handleChange"
    />
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