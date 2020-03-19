<template>
  <div>
    <iw-submodel
      v-model="value"
      :default-value="[]"
      :data="data"
      :show-search="true"
      :show-letter="showLetter"
      :filters="[{key: 0, value: '细分市场'}, {key: 1, value: '品牌'}]"
      :selected-filter="selectedFilter"
      :loading="loading"
      :status="status"
      title="车型"
      size="mini"
      placement="bottom"
      style="width: 120px;"
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
            placeholder="燃料"
            size="mini"
            placement="bottom"
            style="width: 101px;"
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
            :disabled="typeId===''"
            placeholder="燃料类型"
            size="mini"
            placement="bottom"
            style="width: 102px;"
            class="iw-dropdown-filter-wrap"
            @change="handleFuelTypeChange2"
          />
        </div>
      </template>
    </iw-submodel>
    <iw-submodel
      v-model="value2"
      :default-value="[]"
      :data="data"
      :show-search="true"
      :show-letter="showLetter"
      :filters="[{key: 0, value: '细分市场'}, {key: 1, value: '品牌'}]"
      :selected-filter="selectedFilter"
      :loading="loading"
      :status="status"
      show-selected
      title="车型"
      size="mini"
      placement="bottom"
      style="width: 120px;"
      @filterChange="handleFilterChange"
      @change="handleChange2"
    >
      <template slot="filters-select">
        <div class="iw-dropdown-filters-select-item">
          <iw-favorite
            v-model="value3"
            :data="data3"
            :editable="false"
            :type-data="typeData"
            :show-search="true"
            :append-to-body="false"
            type="subModel"
            :title="false"
            size="mini"
            require
            placement="bottom-start"
            style="width: 120px;"
            @change="handleChange3"
          >
            <span slot="desc" class="iw-favorite__desc">
              <abbr class="font-blue">■ 国产 </abbr>
              <abbr class="font-orange">■ 进口</abbr>
            </span>
          </iw-favorite>
        </div>
      </template>
    </iw-submodel>
  </div>
</template>

<script>
import { data } from '../../data/get-submodel'
import { data as data3 } from '../../data/get-favorite-submodel'
import { data as submodel } from '../../data/get-submodel'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: [],
      value2: [],
      value3: '',
      selectedFilter: 0,
      showLetter: false,
      data: [],
      data3: [],
      typeData: [],

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
      typeId: '',
      loading: false,
      status: 0
    }
  },
  mounted() {
    this.data = data[0]
    this.data3 = data3
    const selected = data3.find(item => item.selected) || {}
    this.value2 = (selected.children || []).map(item => item.key)
    this.typeData = submodel
  },
  methods: {
    handleFilterChange(value) {
      this.selectedFilter = value
      if (value === 0) {
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
    },
    handleChange3(value, texts) {
      console.log('value', value, texts)
      this.value3 = value
      this.value2 = (texts.children || []).map(item => item.key)
    },
    handleFuelTypeChange(value) {
      console.log('value', value)
      this.fuelTypeId = ''
      this.loading = true
      setTimeout(() => {
        // ToDo: request
        this.data = data[this.selectedFilter]
        this.loading = false
        this.status = 200
      }, 1000)
    },
    handleFuelTypeChange2(value) {
      console.log('value', value)
      this.loading = true
      setTimeout(() => {
        // ToDo: request
        if (value === 3) {
          this.data = []
        } else {
          this.data = data[this.selectedFilter]
        }
        this.loading = false
        this.status = 200
      }, 1000)
    }
  }

}
</script>
