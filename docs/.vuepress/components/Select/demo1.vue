<template>
  <div>
    <iw-select
      v-model="value"
      :data="data"
      size="mini"
      style="width:100px;"
      placement="bottomLeft"
      @change="handleChange"
    />
    <iw-select
      v-model="value2"
      :data="data"
      size="mini"
      style="width:100px;"
      placement="bottomLeft"
      @change="handleChange2"
    />
    <iw-select
      v-model="value3"
      :data="[]"
      size="mini"
      style="width:400px;"
      placement="bottomLeft"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-select'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: '',
      value2: 1,
      value3: '',
      data: [],
    }
  },
  mounted() {
    this.data = data
  },
  methods: {
    handleChange(value, texts) {
      console.log('value', value)
      this.value = value
    },
    handleChange2(value, texts) {
      console.log('value', value)
      this.value2 = value
    }
  }
}
</script>