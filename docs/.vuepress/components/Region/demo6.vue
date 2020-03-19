<template>
  <div>
    <iw-cascader
      v-model="value"
      :texts="texts"
      :data="data"
      :multiple="true"
      :column-name="['国家', '大区', '省份', '城市']"
      title="区域选择"
      placement="bottom-start"
      :size="size"
      :height="200"
      @change="handleChange"
    />
    <iw-cascader
      v-model="value2"
      :texts="texts2"
      :default-value="defaultValue2"
      :default-texts="defaultTexts2"
      :data="data"
      :multiple="true"
      :show-check-all="true"
      :select-on-leaf="false"
      :column-name="['国家', '大区', '省份', '城市']"
      title="区域选择"
      placement="bottom"
      :size="size"
      :height="200"
      @change="handleChange2"
    />
    <iw-cascader
      v-model="value3"
      :texts="texts3"
      :default-value="defaultValue3"
      :default-texts="defaultTexts3"
      :data="data"
      :multiple="true"
      :column-name="['国家', '大区', '省份', '城市']"
      :size="size"
      title="区域选择"
      placement="bottom-end"
      :height="200"
      @change="handleChange3"
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
      value2: [],
      texts2: [],
      value3: [194],
      texts3: [{ key: 194, value: '北京市', level: 3 }],
      data: [],
      size: 'mini',
      defaultValue2: [],
      defaultTexts2: [],
      defaultValue3: [194],
      defaultTexts3: [{ key: 194, value: '北京市', level: 3 }]
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
    handleChange2(value, texts) {
      console.log('value', value, texts)
      this.value2 = value
      this.texts2 = texts
    },
    handleChange3(value, texts) {
      console.log('value', value, texts)
      this.value3 = value
      this.texts3 = texts
    }
  }

}
</script>