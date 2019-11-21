<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :select-on-leaf="true"
      :column-name="['国家', '大区', '省份', '城市']"
      :loading="loading"
      :height="230"
      :size="iwSize"
      show-check-all
      title="区域选择"
      placement="bottom-start"
      @change="handleChange">
      <template slot="filters-select">
        <div class="iw-cascader__filter">
          <iw-select
            v-model="dimenssion"
            :data="types"
            :multiple="false"
            :append-to-body="false"
            :size="iwSize"
            placeholder="维度"
            placement="bottom"
            style="width: 101px;"
            @change="handleTypeChange"
          />
        </div>
      </template>
    </iw-cascader>
  </div>
</template>
<script>
import { data as city } from '../../data/get-region'
import { data as region } from '../../data/get-region-region'
import { data as province } from '../../data/get-region-province'
export default {
  name: 'Region',
  data() {
    return {
      value: [],
      texts: [],
      data: [],
      loading: false,
      dimenssion: 3,
      iwSize: 'mini',
      types: [
        { key: 1, value: '区域'},
        { key: 2, value: '省份'},
        { key: 3, value: '城市'}
      ]
    }
  },
  mounted() {
    this.data = city
  },
  methods: {
    handleChange(value, texts) {
      console.log('value', value, texts)
      this.value = value
      this.texts = texts
    },
    handleTypeChange(value) {
      console.log('value', value)
      this.dimenssion = value
      this.loading = true
      this.value = []
      this.texts = []
      setTimeout(() => {
        if (value === 1) {
          this.data = region
        } else if (value === 2) {
          this.data = province
        } else if (value === 3) {
          this.data = city
        }
        this.loading = false
      }, 500)
    }
  }
}
</script>