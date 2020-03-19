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
      :show-check-all="true"
      :leafs-per-column="6"
      :is-modal="true"
      title="车型"
      size="mini"
      placement="bottom-start"
      style="width: 120px;"
      @filterChange="handleFilterChange"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">管理车型</iw-button>
    </iw-submodel>
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
      this.texts = texts
    }
  }
}
</script>
