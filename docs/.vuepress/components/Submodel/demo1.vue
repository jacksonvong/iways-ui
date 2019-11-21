<template>
  <div>
    <iw-submodel
      v-model="value"
      :data="data"
      :multiple="false"
      :show-search="true"
      :show-letter="showLetter"
      :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
      :selected-filter="selectedFilter"
      title="车型"
      size="mini"
      placement="bottomLeft"
      style="width: 110px;"
      @filterChange="handleFilterChange"
      @change="handleChange"
    />
    <iw-button size="mini" @click="reset" >重置</iw-button>
  </div>
</template>
<script>
import { data } from '../../data/get-submodel'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: [],
      texts: [],
      selectedFilter: 1,
      showLetter: false,
      data: [],
    }
  },
  mounted() {
    this.data = data[0]
  },
  methods: {
    handleFilterChange(value, key) {
      this.selectedFilter = value
      if (value === 1) {
        this.showLetter = false
        this.data = data[0]
      } else {
        this.showLetter = true
        this.data = data[1]
      }
    },
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.value = value
      this.texts = texts
    },
    reset() {
      console.log('reset')
      this.value = []
    }
  }
}
</script>