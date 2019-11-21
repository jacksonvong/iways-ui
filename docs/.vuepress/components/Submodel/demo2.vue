<template>
  <div>
    <iw-submodel
      v-model="value"
      :default-value="[]"
      :data="data"
      :show-search="true"
      :show-letter="showLetter"
      :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
      :selected-filter="selectedFilter"
      title="车型"
      size="mini"
      placement="bottomLeft"
      style="width: 120px;"
      @filterChange="handleFilterChange"
      @change="handleChange"
    />
    <iw-submodel
      v-model="value2"
      :default-value="defaultValue2"
      :data="data"
      :show-search="true"
      :show-letter="showLetter"
      :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
      :selected-filter="selectedFilter"
      show-selected
      title="车型"
      size="mini"
      placement="bottomLeft"
      style="width: 120px;"
      @filterChange="handleFilterChange"
      @change="handleChange2"
    />
  </div>
</template>

<script>
import { data } from '../../data/get-submodel'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: [],
      value2: [61],
      defaultValue2: [61],
      selectedFilter: 1,
      showLetter: false,
      data: []
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
    },
    handleChange2(value, texts) {
      console.log('value', value, texts)
      this.value2 = value
    }
  }
}
</script>
