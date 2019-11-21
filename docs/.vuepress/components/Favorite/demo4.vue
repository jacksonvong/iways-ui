<template>
  <div>
    <iw-favorite
      v-model="value"
      :data="data"
      :type-data="typeData"
      :show-search="true"
      type="manfBrand"
      is-modal
      title="生产商"
      size="mini"
      placement="bottomLeft"
      style="width: 180px;"
      @save="handleSave"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">管理收藏生产商</iw-button>
    </iw-favorite>
  </div>
</template>
<script>
import { data as manfbrand } from '../../data/get-manfbrand'
export default {
  name: '',
  data() {
    return {
      value: '',
      data: [],
      typeData: []
    }
  },
  mounted() {
    this.data = []
    this.typeData = manfbrand[0]
  },
  methods: {
    handleChange(value) {
      console.log('value', value)
      this.value = value
    },
    handleSave(data) {
      this.data = data
    }
  }
}
</script>