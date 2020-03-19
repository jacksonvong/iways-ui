<template>
  <div>
    <iw-select
      v-model="value"
      :data="data"
      multiple
      show-check-all
      show-search
      size="mini"
      placement="bottom-start"
      @change="handleChange"
    />
  </div>
</template>
<script>
import { data } from '../../data/get-select'
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
      console.log('value', value)
      this.value = value
    }
  }
}
</script>