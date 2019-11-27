<template>
  <iw-select
    v-model="dataForm.fuelTypes"
    :default-value="defaultDataForm.fuelTypes"
    :data="filtersSelect"
    :show-check-all="true"
    :multiple="false"
    show-search
    placeholder="请选择"
    placement="bottomLeft"
    style="width: 120px;"
    size="small"
    @change="handleChange"
  />
</template>
<script>
export default {
  data() {
    return {
      dataForm: {
        fuelTypes: [],
        fuelType: []
      },
      defaultDataForm: {
        fuelTypes: []
      },
      filtersSelect: [{ key: 1, value: '纯电动' }, { key: 2, value: '插电式混' }, { key: 3, value: '增程式电动333333333' }, { key: 4, value: '燃料电池' }, { key: 5, value: '燃料电池5' }, { key: 6, value: '燃料电池6' }, { key: 7, value: '燃料电池7' }]
    }
  },
  methods: {
    handleChange(value, texts) {
      console.log('value', value)
      this.value = value
    }
  }
}
</script>
