<template>
  <div>
    <iw-manfbrand
      v-model="value"
      :data="data"
      :default-value="[]"
      :show-check-all="true"
      :show-selected="true"
      :multiple="false"
      :loading="loading"
      :status="status"
      title="厂商"
      placement="bottom-start"
      size="mini"
      @tabChange="tabChange"
      @change="handleChange"
    />
    <iw-button size="mini" @click="reset" >重置</iw-button>
  </div>
</template>

<script>
import { data } from '../../data/get-manfbrand'
export default {
  name: 'Manfbrand',
  data() {
    return {
      value: [],
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
      this.data = data[0]
    }, 5000)
  },
  methods: {
    tabChange(value, key) {
      this.data = data[key] || []
    },
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.value = value
    },
    reset() {
      console.log('reset')
      this.value = []
    }
  }

}
</script>