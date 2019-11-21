<template>
  <iw-cascader
    :values="dataForm.subModel3"
    :texts="dataForm.subModelText3"
    :default-value="defaultDataForm.subModel3"
    :data="searchFormData.subModel3"
    :check-all="true"
    :show-search="true"
    :show-letter="showLetter"
    :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}, {key: 3, value: '竞品圈'}]"
    :selected-filter="selectedFilter"
    :column-name="columnName"
    :leafs-per-column="2"
    title="车型"
    placement="bottomLeft"
    size="default"
    @filterChange="handleFilterChange"
    @change="handleSubModelChange3"
  >
    <span slot="desc" class="iw-footer-desc">
      <abbr class="font-gray">车型国别：</abbr>
      <abbr class="font-black">国产 </abbr>
      <abbr class="font-orange">进口</abbr>
    </span>
    <template slot="filters-select">
      <span class="iw-dropdown-filters-select-item">
        <iw-select
          v-model="dataForm.fuelType2"
          :data="filtersSelect2"
          :multiple="false"
          placeholder="请选择"
          size="mini"
          placement="bottomLeft"
          style="width:110px;"
          class="iw-dropdown-filter-wrap"
          @change="handleFilterSelectChange2"
        />
      </span>
      <span class="iw-dropdown-filters-select-item">
        <iw-select
          v-model="dataForm.fuelType"
          :data="filtersSelect"
          :multiple="false"
          placeholder="请选择"
          size="mini"
          placement="bottomLeft"
          style="width:110px;"
          class="iw-dropdown-filter-wrap"
          @change="handleFilterSelectChange"
        />
      </span>
    </template>
  </iw-cascader>
</template>

<script>

export default {
  data() {
    return {
      dataForm: {
        subModel3: [51, 62],
        subModelText3: [{ key: 51, value: 'A3', selected: true }, { key: 62, value: '5系', selected: true }]
      },
      defaultDataFrom: {
        subModel3: [51, 62]
      },
      brandSubModel: [
        {
          key: 'A',
          value: 'A',
          children: [
            {
              key: 5,
              value: '奥迪',
              children: [
                {
                  key: 51,
                  value: 'A3'
                },
                {
                  key: 52,
                  value: 'A4'
                }
              ]
            }
          ]
        }
      ],
      segmentSubModel: [
        {
          key: 1001,
          value: '紧凑车型',
          children: [
            {
              key: 51,
              value: 'A3'
            },
            {
              key: 52,
              value: 'A4'
            },
            {
              key: 62,
              value: '5系'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    this.searchFormData.subModel3 = this.segmentSubModel
    this.columnName = ['细分市场', '车型']
    this.selectedFilter = 1
  },
  methods: {
    handleFilterChange(value) {
      this.loading = true
      this.selectedFilter = value
      if (value === 1) {
        this.searchFormData.subModel3 = this.segmentSubModel
        this.columnName = ['细分市场', '车型']
        this.showLetter = false
      } else if (value === 2) {
        this.searchFormData.subModel3 = this.brandSubModel
        this.columnName = ['品牌', '车型']
        this.showLetter = true
      } else if (value === 3) {
        this.searchFormData.subModel3 = this.competitorSubModel
        this.columnName = ['竞品圈', '车型']
        this.showLetter = false
      }
      this.loading = false
    },
    handleSubModelChange3(value, texts) {
      console.log(value, texts)
      this.dataForm.subModel3 = value
      this.dataForm.subModelText3 = texts
    }
  }
}
</script>
