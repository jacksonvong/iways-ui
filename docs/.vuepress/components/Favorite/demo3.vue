<template>
  <div>
    <iw-favorite
      v-model="value"
      :data="data"
      :type-data="typeData"
      :show-search="true"
      type="segment"
      is-modal
      title="细分市场"
      size="mini"
      placement="bottomLeft"
      @save="handleSave"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">管理收藏细分市场</iw-button>
    </iw-favorite>
    <iw-favorite
      v-model="value"
      :data="data"
      :type-data="typeData"
      :show-search="true"
      type="segment"
      title="细分市场"
      size="mini"
      style="width: 128px;"
      @save="handleSave"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">管理收藏细分市场</iw-button>
    </iw-favorite>
  </div>
</template>
<script>
import { data } from '../../data/get-favorite-segment'
import { data as segment } from '../../data/get-segment'
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
    this.typeData = segment
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