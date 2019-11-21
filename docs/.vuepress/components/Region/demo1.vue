<template>
  <div>
    <iw-select
      v-model="value2"
      :multiple="false"
      :data="[{key: 0, value: 'false'},{key: 1, value: 'true'}]"
      size="mini"
      @change="handleSelect"
    />
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="false"
      :show-check-all="true"
      :select-on-leaf="false"
      :show-selected="true"
      :column-name="['国家', '大区', '省份', '城市']"
      :height="260"
      :selectOnLeaf="selectOnLeaf"
      title="区域选择"
      placement="bottom-start"
      size="mini"
      style="width: 160px;"
      @change="handleChange"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-region'
export default {
  name: 'Region',
  data() {
    return {
      value: [],
      texts: [],
      data: [],
      selectOnLeaf: false,
      value2: 0
    }
  },
  mounted() {
    this.data = data
  },
  methods: {
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.value = value
      this.texts = texts
    },
    handleSelect(value) {
      this.selectOnLeaf = !!value
    }
  }

}
</script>