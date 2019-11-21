<template>
  <div>
    <iw-favorite
      v-model="value"
      :data="data"
      :type-data="typeData"
      :show-search="true"
      type="subModel"
      is-modal
      title="车型"
      size="mini"
      require
      placement="bottomLeft"
      @save="handleSave"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">管理收藏车型</iw-button>
      <span slot="desc" class="iw-favorite__desc">
        <abbr class="font-blue">■ 国产 </abbr>
        <abbr class="font-orange">■ 进口</abbr>
      </span>
    </iw-favorite>
    <iw-favorite
      v-model="value2"
      :data="data"
      :editable="false"
      :type-data="typeData"
      :show-search="true"
      type="subModel"
      title="车型"
      size="mini"
      require
      placement="bottomLeft"
      style="width: 120px;"
      @change="handleChange2"
    >
      <span slot="desc" class="iw-favorite__desc">
        <abbr class="font-blue">■ 国产 </abbr>
        <abbr class="font-orange">■ 进口</abbr>
      </span>
    </iw-favorite>
  </div>
</template>
<script>
import { data } from '../../data/get-favorite-submodel'
import { data as submodel } from '../../data/get-submodel'
export default {
  name: '',
  data() {
    return {
      value: '',
      value2: '',
      data: [],
      typeData: []
    }
  },
  mounted() {
    this.data = data
    this.typeData = submodel
  },
  methods: {
    handleChange(value) {
      console.log('value', value)
      this.value = value
    },
    handleChange2(value) {
      console.log('value', value)
      this.value2 = value
    },
    handleSave(data) {
      this.data = data
    }
  }
}
</script>