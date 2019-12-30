<template>
  <div>
    <iw-cascader
      v-model="value"
      :data="data"
      :texts="texts"
      :show-search="true"
      :leafsPerColumn="5"
      :column-name="columnName"
      :height="140"
      select-on-leaf
      show-selected
      title="政策类型"
      size="mini"
      clearable
      placement="bottomLeft"
      style="width: 120px;"
      @change="handleChange"
    />
    <iw-select
      v-model="value3"
      :data="data3"
      size="mini"
      @change="handleChange3"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-machanism'
import { data as data2 } from '../../data/get-policy'
export default {
  name: '',
  data() {
    return {
      value: [],
      texts: [],
      columnName: ['类别', '类型', '标签'],
      data: [],
      value3: 1,
      data3: [
        { key: 1, value: 'value1' },
        { key: 2, value: 'value2' }
      ]
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
    handleChange3(value) {
      if (value === 1) {
        this.data = data
      } else {
        this.data = data2
      }
    }
  }
}
</script>