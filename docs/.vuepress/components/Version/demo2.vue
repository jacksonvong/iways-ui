<template>
  <div>
    <iw-version
      v-model="value"
      :data="data"
      :show-search="true"
      multiple
      show-check-all
      title="型坷"
      size="mini"
      placement="bottom-start"
      style="width: 180px;"
      @change="handleChange"
    />
    <iw-button size="mini" @click="reset" >針置</iw-button>
  </div>
</template>
<script>
import { data } from '../../data/get-version'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: [],
      data: [],
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
    reset() {
      console.log('reset')
      this.value = []
    }
  }
}
</script>