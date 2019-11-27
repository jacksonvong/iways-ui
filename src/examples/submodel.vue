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
      :column-name="columnName"
      :show-check-all="true"
      title="车型"
      size="mini"
      placement="bottom"
      style="width: 180px;"
      @filterChange="handleFilterChange"
      @change="handleChange"
    >
      <template slot="filters-select">
        <div class="iw-dropdown-filters-select-item">
          <iw-select
            v-model="typeId"
            :data="types"
            :multiple="false"
            :append-to-body="false"
            placeholder="请选择"
            size="mini"
            placement="bottom"
            style="width: 100px;"
            class="iw-dropdown-filter-wrap"
            @change="handleFuelTypeChange"
          />
        </div>
        <div class="iw-dropdown-filters-select-item">
          <iw-select
            v-model="fuelTypeId"
            :data="fuelTypeOptions[typeId]"
            :multiple="false"
            :append-to-body="false"
            placeholder="请选择"
            size="mini"
            placement="bottom"
            style="width: 100px;"
            class="iw-dropdown-filter-wrap"
          />
        </div>
      </template>
      <span slot="desc" class="iw-footer-desc">
        <abbr class="font-gray">车型国别：</abbr>
        <abbr class="font-blue">国产 </abbr>
        <abbr class="font-orange">进口</abbr>
      </span>
    </iw-submodel>
  </div>
</template>

<script>
import { data } from './data/get-submodel'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: [],
      texts: [],
      selectedFilter: 1,
      showLetter: false,
      columnName: ['细分市场', '二级细分市场', '车型'],
      data: [],

      fuelTypeOptions: {
        0: [
          { key: 3, value: '柴油' },
          { key: 5, value: '汽油' }
        ],
        1: [
          { key: 1, value: '纯电动' },
          { key: 2, value: '插电式混合动力' },
          { key: 7, value: '增程型电动' },
          { key: 8, value: '燃料电池' }
        ]
      },
      fuelTypeId: '',
      types: [
        { key: 0, value: '传统燃油车' },
        { key: 1, value: '新能源车' }
      ],
      typeId: 1
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
    handleFuelTypeChange(value) {
      console.log('value', value)
      this.fuelTypeId = ''
    }
  }

}
</script>
