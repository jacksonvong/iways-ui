<template>
  <div>
    <iw-favorite
      v-model="value"
      :data="data"
      :type-data="typeData"
      :show-search="true"
      type="manfBrand"
      is-modal
      require
      title="生产商集团"
      size="mini"
      placement="bottomLeft"
      style="width: 180px;"
      @save="handleSave"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">{{ text && text.value ? text.value : '管理' }}</iw-button>
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
      text: {},
      data: [],
      typeData: []
    }
  },
  mounted() {
    this.data = []
    this.typeData = manfbrand[3]
  },
  methods: {
    handleChange(value, text) {
      console.log('value', value, text)
      this.value = value
      this.text = text
    },
    handleSave(data) {
      this.data = data
    }
  }
}
</script>