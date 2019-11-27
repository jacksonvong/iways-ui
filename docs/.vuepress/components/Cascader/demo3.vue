<template>
  <div>
    <span v-show="show">
      <iw-cascader
        v-model="value"
        :data="data"
        :texts="texts"
        :show-search="true"
        :leafsPerColumn="5"
        :column-name="columnName"
        :height="140"
        :show="show"
        show-selected
        selectOnLeaf
        multiple
        title="政策类型"
        size="mini"
        placement="bottomLeft"
        style="width: 200px;"
        @change="handleChange"
      />
    </span>
    <iw-button size="mini" @click="show=!show">{{show?'hidden':'show'}}</iw-button>
  </div>
</template>
<script>
import { data } from '../../data/get-machanism'
export default {
  name: '',
  data() {
    return {
      value: [],
      texts: [],
      columnName: ['类别', '类型', '标签'],
      data: [],
      show: false
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