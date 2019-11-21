<template>
  <div>
    <iw-manfbrand
      v-model="value"
      :texts="texts"
      :data="data"
      :default-value="[]"
      :default-texts="[]"
      :tabs="tabs"
      :selected-tab="selectedTab"
      :value-tab="valueTab"
      :show-check-all="true"
      :show-selected="true"
      :multiple="true"
      :min="5"
      :max="10"
      require
      title="厂商"
      placement="bottom-start"
      size="mini"
      style="width: 160px;"
      @tabChange="tabChange"
      @change="handleChange"
    />
  </div>
</template>

<script>
import { data } from './data/get-manfbrand'
export default {
  name: 'Manfbrand',
  data() {
    return {
      tabs: [
        { key: 0, value: '厂商' },
        { key: 1, value: '厂商品牌' },
        { key: 2, value: '品牌' },
        { key: 3, value: '厂商集团' }
      ],
      selectedTab: 0,
      value: [],
      texts: [],
      valueTab: 0,
      data: []
    }
  },
  mounted() {
    this.data = data[0]
  },
  methods: {
    tabChange(value, key) {
      this.selectedTab = value
      this.data = data[key] || []
    },
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.valueTab = this.selectedTab
      this.value = value
      this.texts = texts
    }
  }

}
</script>

<style>
</style>
