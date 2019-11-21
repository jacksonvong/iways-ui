<template>
  <div>
    <iw-favorite
      v-model="value"
      :data="data"
      :type-data="typeData"
      :show-search="true"
      type="manfBrand"
      is-modal
      title="厂商品牌"
      size="mini"
      placement="bottomLeft"
      style="width: 180px;"
      @save="handleSave"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">管理收藏厂商品牌</iw-button>
    </iw-favorite>
  </div>
</template>
<script>
const data = [
  {
    "key":780,
    "value":"默认竞争圈",
    "selected":1,
    "children":[
      {
          "key":138,
          "value":"一汽丰田-丰田"
      },
      {
          "key":135,
          "value":"一汽-大众-大众"
      },
      {
          "key":115,
          "value":"上汽通用-别克"
      },
      {
          "key":109,
          "value":"上汽大众-大众"
      },
      {
          "key":80,
          "value":"吉利汽车-吉利"
      },
      {
          "key":61,
          "value":"广汽丰田-丰田"
      },
      {
          "key":58,
          "value":"广汽本田-本田"
      },
      {
          "key":41,
          "value":"东风日产"
      },
      {
          "key":35,
          "value":"东风本田-本田"
      },
      {
          "key":8,
          "value":"北京奔驰-奔驰"
      }
    ]
  }
]
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
    this.data = data
    this.typeData = manfbrand[1]
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