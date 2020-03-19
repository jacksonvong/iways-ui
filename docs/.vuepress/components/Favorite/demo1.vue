<template>
  <div>
    <iw-favorite
      v-model="value"
      :data="data"
      :type-data="typeData"
      :show-search="true"
      :title="$t('favorite.submodel')"
      type="subModel"
      is-modal
      size="mini"
      require
      placement="bottom-start"
      @save="handleSave"
      @change="handleChange"
    >
      <iw-button slot="reference" type="primary" size="mini">{{ $t('favorite.manageSubmodel') }}</iw-button>
      <span slot="desc" class="iw-favorite__desc">
        <abbr class="font-blue">■ {{ $t('submodel.local') }} </abbr>
        <abbr class="font-orange">■ {{ $t('submodel.import') }}</abbr>
      </span>
    </iw-favorite>
    <iw-favorite
      v-model="value2"
      :data="data"
      :showFolder="false"
      :type-data="typeData"
      :show-search="true"
      :append-to-body="false"
      :title="$t('favorite.submodel')"
      type="subModel"
      size="mini"
      require
      placement="bottom"
      style="width: 120px;"
      @save="handleSave"
      @change="handleChange2"
    >
      <span slot="desc" class="iw-favorite__desc">
        <abbr class="font-blue">■ {{ $t('submodel.local') }} </abbr>
        <abbr class="font-orange">■ {{ $t('submodel.import') }}</abbr>
      </span>
    </iw-favorite>
  </div>
</template>
<script>
import { data } from '../../data/get-favorite-submodel'
import { data as submodel } from '../../data/get-submodel'
export default {
  name: '',
  data() {
    return {
      value: '',
      value2: '',
      data: [],
      typeData: []
    }
  },
  mounted() {
    this.data = data
    this.typeData = submodel
  },
  methods: {
    handleChange(value) {
      console.log('value', value)
      this.value = value
    },
    handleChange2(value) {
      console.log('value', value)
      this.value2 = value
    },
    handleSave(data) {
      this.data = data
    }
  }
}
</script>