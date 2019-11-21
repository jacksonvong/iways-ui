<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :show-check-all="true"
      :select-on-leaf="false"
      :show-selected="true"
      :loading="loading"
      :status="status"
      :height="260"
      title="区域选择"
      placement="top"
      size="mini"
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
      loading: false,
      status: 0
    }
  },
  mounted() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.status = 200
      this.data = data
    }, 5000)
  },
  methods: {
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.value = value
      this.texts = texts
    }
  }

}
</script>