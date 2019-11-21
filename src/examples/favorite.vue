<template>
  <div>
    <iw-favorite
      :data="data"
      :type-data="typeData"
      :show-search="true"
      type="subModel"
      is-modal
      title="收藏车型"
      size="mini"
      require
      placement="bottomLeft"
      style="width: 180px;"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">管理收藏车型</iw-button>
      <span slot="desc" class="iw-favorite__desc">
        <abbr class="font-blue">■ 国产 </abbr>
        <abbr class="font-orange">■ 进口</abbr>
      </span>
    </iw-favorite>
  </div>
</template>
<script>
import { data } from './data/get-favorite-submodel'
import { data as submodel } from './data/get-submodel'
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
    this.data = data
    this.typeData = submodel
  },
  methods: {
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.value = value
    }
  }
}
</script>
