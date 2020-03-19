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
      title="厂商"
      placement="bottom-start"
      size="mini"
      @tabChange="tabChange"
      @change="handleChange">
    </iw-manfbrand>
    <iw-manfbrand
      v-model="value2"
      :texts="texts2"
      :data="data"
      :default-value="[]"
      :default-texts="[]"
      :tabs="tabs"
      :selected-tab="selectedTab"
      :value-tab="valueTab"
      :show-check-all="true"
      :show-selected="true"
      :multiple="true"
      title="厂商"
      placement="bottom-start"
      size="mini"
      @tabChange="tabChange"
      @change="handleChange2">
      <template slot="filters-select">
        <div class="iw-dropdown-filters-select-item">
          <iw-favorite
            v-model="value3"
            :data="data3"
            :editable="false"
            :type-data="typeData"
            :show-search="true"
            :append-to-body="false"
            :title="false"
            :sub-type="tabs[selectedTab].value"
            type="manfBrand"
            size="mini"
            @change="handleChange3"
          >
          </iw-favorite>
        </div>
      </template>
    </iw-manfbrand>
  </div>
</template>

<script>
import { data } from '../../data/get-manfbrand'
import { data as data3 } from '../../data/get-favorite-manfbrand'
import { data as manfbrand } from '../../data/get-manfbrand'
export default {
  name: 'Manfbrand',
  data() {
    return {
      tabs: [
        { key: 0, value: '生产商' },
        { key: 1, value: '生产品牌' },
        { key: 2, value: '品牌' },
        { key: 3, value: '生产商集团' }
      ],
      selectedTab: 0,
      value: [],
      texts: [],
      value2: [],
      texts2: [],
      value3: '',
      valueTab: 0,
      data: [],
      data3: [],
      typeData: []
    }
  },
  mounted() {
    this.data = data[0]
    if (this.valueTab === 1) {
      this.data3 = data3
      const selected = data3.find(item => item.selected) || {}
      this.value3 = selected.key
      this.value2[1] = (selected.children || []).map(item => item.key)
      this.typeData = manfbrand
    }
  },
  methods: {
    tabChange(value, key) {
      this.selectedTab = value
      this.data = data[key] || []
      if (value === 1) {
        this.data3 = data3
        const selected = data3.find(item => item.selected) || {}
        this.value3 = selected.key
      } else {
        this.data3 = []
        this.value3 = ''
      }
    },
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.valueTab = this.selectedTab
      this.value = value
      this.texts = texts
    },
    handleChange2(value, texts) {
      console.log('value', value, texts)
      this.value2 = value
      this.texts2 = texts
    },
    handleChange3(value, texts) {
      console.log('value', value, texts)
      this.value3 = value
      this.texts3 = texts
      if (texts) {
        this.$set(this.value2, 1, (texts.children || []).map(item => item.key))
        this.$set(this.texts2, 1, (texts.children || []).map(item => item))
      }
    }
  }

}
</script>
