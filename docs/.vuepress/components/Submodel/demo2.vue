<template>
  <div>
    <iw-select
      v-model="leafsPerColumn"
      :data="data2"
      size="mini"
      style="width: 100px;"
      placement="bottom-start"
    />
    <iw-submodel
      v-model="value"
      :default-value="[]"
      :data="data"
      :show-search="true"
      :show-letter="showLetter"
      :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
      :selected-filter="selectedFilter"
      :leafs-per-column="leafsPerColumn"
      :option-props="{
        value: 'value',
        label: 'text',
        children: 'son'
      }"
      title="车型"
      size="mini"
      placement="bottom-start"
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
      :option-props="{
        value: 'value',
        label: 'text',
        children: 'son'
      }"
      show-selected
      title="车型"
      size="mini"
      placement="bottom-start"
      style="width: 120px;"
      @filterChange="handleFilterChange"
      @change="handleChange2"
    />
  </div>
</template>

<script>
import { data } from '../../data/get-submodel-2'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: [],
      value2: [61],
      defaultValue2: [61],
      selectedFilter: 1,
      showLetter: false,
      data: [],
      leafsPerColumn: undefined,
      data2: [
        {key: 4, value: 4},
        {key: 5, value: 5},
        {key: 6, value: 6},
      ]
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
