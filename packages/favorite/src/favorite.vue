<template>
  <div style="display: inline-block;">
    <div v-if="popover==='IwDialog'" @click="visible = true">
      <slot name="reference">{{ placeholder || t('iw.common.placeholder') }}</slot>
    </div>
    <component
      :is="popover"
      v-model="visible"
      :visible.sync="visible"
      :trigger="trigger"
      :placement="placement"
      :append-to-body="popover==='IwPopover'?appendToBody:true"
      :popper-class="popover==='IwPopover'?'iw-favorite iw-favorite--'+iwSize + (disabled?' iw-favorite--disabled':''):''"
      :class="popover!=='IwPopover'?'iw-favorite iw-favorite--'+iwSize + (disabled?' iw-favorite--disabled':''):''"
      :disabled="disabled"
      :width="popover==='IwPopover'?null:'650px'"
      :title="popover==='IwPopover'?null:false"
      :before-close="beforeClose">
      <!-- 触发操作 -->
      <div slot="reference" class="iw-favorite-reference">
        <div :class="[{'is-focus': !disabled&&visible, 'is-disabled': disabled}, 'iw-input', 'iw-input--' + iwSize]" :style="referenceWidth?'width:'+referenceWidth+'px':''">
          <div v-if="popover==='IwPopover'" class="iw-input__inner">
            <span v-if="checkedOption[optionProps.value]" class="iw-input__value">
              <input v-if="showFolder" :value="checkedOption[optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
              <input v-else :value="checkedOption[optionProps.children].map(item => item[optionProps.label]).join(', ')" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
            </span>
            <span v-else class="iw-input__value">
              <input :style="'width:'+(referenceWidth-36)+'px'" :value="placeholder || t('iw.common.placeholder')" :disabled="disabled" class="iw-input__placeholder" unselectable="on" readonly >
            </span>
            <span class="iw-input__suffix">
              <slot>
                <i :class="['iw-input__icon', 'iw-icon-' + iconClass]"/>
              </slot>
            </span>
          </div>
        </div>
      </div>
      <div v-if="!disabled" :id="'iw-favorite__popover--'+id" :style="{width: '650px', minWidth: '400px'}">
        <!-- 标题区 -->
        <div v-if="title" class="iw-favorite__title">
          <div v-if="title" class="iw-favorite__inner">{{ title }}</div>
          <div v-if="error" :class="['iw-favorite__error','iw-favorite__error--'+size]">{{ error }}</div>
          <div class="iw-favorite__close" @click="close">
            <i class="iw-icon-close" />
          </div>
        </div>
        <!-- 内容区 -->
        <div v-loading="loading" class="iw-favorite__body">
          <div v-if="tableList.length">
            <div class="iw-favorite__body-header iw-favorite__wrap">
              <div class="iw-favorite__group">
                <div class="iw-favorite__group_table">
                  <div>
                    <dl>
                      <dt>{{ t('iw.favorite.folder') }}</dt>
                      <dt :style="{width: (mode==='edit' ? 385 : 490) + 'px'}">{{ subType || titles[type] }}</dt>
                      <dt v-if="mode==='edit'">{{ t('iw.favorite.operation') }}</dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div class="iw-favorite__wrap">
              <div class="iw-favorite__group">
                <div class="iw-favorite__group_table">
                  <div>
                    <dl v-for="(row, index) in tableList" :key="row[optionProps.value]">
                      <dt>
                        <div>
                          <span v-if="mode!=='edit'" :class="['iw-radio', row[optionProps.value]===checkedValue?'iw-radio--checked':'']" @click="handleRadioClick(row, index)" />
                          <span v-if="mode!=='edit'" class="iw-text"><label :title="row[optionProps.label]" @click="handleRadioClick(row, index)">{{ row[optionProps.label] }}</label></span>
                          <span v-if="mode==='edit'" class="iw-text"><iw-input v-model="row[optionProps.label]" :disabled="mode!=='edit'" :size="iwSize" :placeholder="t('iw.favorite.placeholder')" style="width:146px;" /></span>
                        </div>
                      </dt>
                      <dt :style="{width: (mode==='edit' ? 385 : 490) + 'px', maxHeight: '48px'}">
                        <div :class="{'children--model-edit':mode==='edit'}">
                          <span
                            v-if="row[optionProps.children]&&row[optionProps.children].length"
                            class="iw-favorite__item iw-favorite__item--text"
                            v-html="row[optionProps.children].map(item => '<em title='+item[optionProps.label]+' class='+(item.remark=='进口'?'font-orange':'font-blue')+'>'+item[optionProps.label] + '</em>').join(' , ')"
                          />
                          <span v-if="mode==='edit'" class="iw-favorite__item iw-favorite__item--select">
                            <component
                              :is="componentName"
                              v-model="dataForm[type][index]"
                              :disabled-select="dataForm[type+'Disabled'][index]"
                              :data="searchFormData[type]"
                              :show-search="true"
                              :show-selected="showSelected"
                              :show-letter="showLetter"
                              :filters="filters"
                              :selected-filter="selectedFilter"
                              :title="titles[type]"
                              :append-to-body="false"
                              :option-props="optionProps"
                              select-on-leaf
                              multiple
                              size="mini"
                              placement="bottom-start"
                              @filterChange="(value, text) => handleFilterChange(value, text, index)"
                              @change="(value, text) => handleChange(value, text, index)"
                            >
                              <span slot="reference" class="iw-favorite__button--select">{{ t('iw.favorite.select') }}</span>
                            </component>
                          </span>
                        </div>
                      </dt>
                      <dt v-if="mode==='edit'">
                        <span class="iw-favorite__button iw-favorite__button--del" @click="del(index)">{{ t('iw.favorite.del') }}</span>
                        <span class="iw-favorite__button iw-favorite__button--copy" @click="copy(index)">{{ t('iw.favorite.copy') }}</span>
                      </dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iw-empty v-else :style="{height: '150px'}" :status="status" />
        </div>
        <!-- 底部 -->
        <div class="iw-favorite__footer">
          <slot name="desc" />
          <div v-show="mode==='view'">
            <iw-button v-if="editable" :size="iwSize" @click="edit()">
              {{ t('iw.favorite.edit') }}
            </iw-button>
            <iw-button :size="iwSize" type="primary" @click="submit(false)">
              {{ t('iw.favorite.confirm') }}
            </iw-button>
          </div>
          <div v-show="mode==='edit'">
            <iw-button :size="iwSize" @click="create()">
              {{ t('iw.favorite.create') }}
            </iw-button>
            <iw-button :size="iwSize" @click="cancel()">
              {{ t('iw.favorite.cancel') }}
            </iw-button>
            <iw-button :size="iwSize" type="primary" @click="save()">
              {{ t('iw.favorite.save') }}
            </iw-button>
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
import { deepClone } from '@iways-ui/src/utils/util'
import Locale from '@iways-ui/src/mixins/locale'
export default {
  name: 'IwFavorite',
  mixins: [Locale],
  props: {
    value: {
      type: [String, Number],
      default() {
        return
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    id: {
      type: Number,
      default() {
        return parseInt(Math.random() * 10000)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: true
    },
    showFolder: {
      // 默认显示文件夹名称，false表示显示具体收藏项目
      type: Boolean,
      default: true
    },
    trigger: {
      // 触发方式， 可选：hover/focus/click/contextmenu
      type: String,
      default: 'click'
    },
    placement: {
      // 气泡框位置， 可选：top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom
      type: String,
      default: ''
    },
    appendToBody: {
      // 是否插入至body下, 默认true
      type: Boolean,
      default: true
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: large || default || small
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    selectTitle: {
      // 选择器标题 20191111 远杰
      type: [Boolean, String],
      default: false
    },
    type: {
      type: String,
      default() {
        return 'subModel' // ['manfBrand', 'subModel', 'segment']
      }
    },
    subType: {
      type: String,
      default: undefined // ['生产商品牌', '厂商', '品牌', '生产商集团']
    },
    typeData: {
      type: Array,
      default() {
        return []
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default() {
        return false
      }
    },
    optionProps: {
      type: Object,
      default() {
        return {
          label: 'value',
          value: 'key',
          children: 'children'
        }
      }
    },
    isModal: {
      type: Boolean,
      default() {
        return false
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default() {
        return false
      }
    },
    status: {
      type: [Number, String],
      default: 200
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      error: '', // 错误信息
      checkedValue: undefined,
      checkedOption: {},
      mode: 'view', // ['view', 'edit']
      maxLength: 10,
      propsOptions: {
        title: this.title
      },
      tableList: [],
      titles: {
        subModel: this.selectTitle || this.t('iw.favorite.subModel'),
        manfBrand: this.selectTitle || this.t('iw.favorite.manfBrand'),
        segment: this.selectTitle || this.t('iw.favorite.segment')
      },
      // 编辑状态
      dataForm: {
        manfBrand: [],
        manfBrandText: [],
        manfBrandDisabled: [],
        subModel: [],
        subModelText: [],
        subModelDisabled: [],
        segment: [],
        segmentText: [],
        segmentDisabled: []
      },
      searchFormData: {
        manfBrand: [], // 产商品牌
        subModel: [], // 子车型
        segment: [] // 子车型
      },
      segmentSubModel: [],
      brandSubModel: [],
      showLetter: false,
      filters: [],
      selectedFilter: 1
    }
  },
  computed: {
    iwSize() {
      return this.size || (this.$IWAYS || {}).size
    },

    iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up'
    },

    componentName() {
      const type = ['segment', 'region'].includes(this.type) ? 'cascader' : this.type
      return 'iw-' + type.toLowerCase()
    }
  },
  watch: {
    data() {
      this.init()
    },
    typeData() {
      this.init()
    },
    visible() {
      this.mode = 'view'
      this.init()
    },
    // 选择器标题发生变化 20191111 远杰
    selectTitle() {
      switch (this.type) {
        case 'subModel':
          this.$set(this.titles, 'subModel', this.selectTitle || this.t('iw.favorite.subModel'))
          break
        case 'manfBrand':
          this.$set(this.titles, 'manfBrand', this.selectTitle || this.t('iw.favorite.manfBrand'))
          break
        case 'segment':
          this.$set(this.titles, 'segment', this.selectTitle || this.t('iw.favorite.segment'))
          break
      }
    }
  },
  mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover'
    this.referenceWidth = this.$el.offsetWidth || 100
    this.init()
  },
  methods: {
    init() {
      this.error = ''
      this.initValue()
      this.initData()
    },
    initValue() {
      this.checkedValue = this.value
      this.checkedOption = this.data.find(item => item[this.optionProps.value] === this.checkedValue) || {}
    },
    initData(data = this.data) {
      this.tableList = deepClone(data).map((row, index) => {
        row[this.optionProps.value] = row[this.optionProps.value]
        if (this.checkedValue) {
          row.selected = this.checkedValue === row[this.optionProps.value]
        } else if (row.selected) this.checkedValue = row[this.optionProps.value]
        this.checkedOption = this.data.find(item => item[this.optionProps.value] === this.checkedValue) || {}
        if (this.type === 'manfBrand') {
          this.$set(this.dataForm[this.type], index, [row[this.optionProps.children].map(item => item[this.optionProps.value])])
          this.$set(this.dataForm[this.type + 'Disabled'], index, [row.disabledChildren])
          this.$set(this.dataForm[this.type + 'Text'], index, [row[this.optionProps.children].map(item => {
            item.selected = true
            return item
          })])
        } else {
          this.$set(this.dataForm[this.type], index, row[this.optionProps.children].map(item => item[this.optionProps.value]))
          this.$set(this.dataForm[this.type + 'Disabled'], index, row.disabledChildren)
          this.$set(this.dataForm[this.type + 'Text'], index, row[this.optionProps.children].map(item => {
            item.selected = true
            return item
          }))
        }
        return row
      })
      // 编辑状态
      if (this.type === 'manfBrand') {
        this.$set(this.searchFormData, 'manfBrand', deepClone(this.typeData))
        this.showLetter = true
        this.filters = []
      }
      if (this.type === 'subModel') {
        const data = deepClone(this.typeData)
        this.segmentSubModel = data[0]
        this.brandSubModel = data[1]
        this.$set(this.searchFormData, 'subModel', this.segmentSubModel)
        this.showLetter = false
        this.selectedFilter = 1
        this.filters = [{ key: 1, value: this.t('iw.favorite.segment') }, { key: 2, value: this.t('iw.favorite.manfBrand') }] 
      }
      if (this.type === 'segment') {
        this.$set(this.searchFormData, 'segment', deepClone(this.typeData))
        this.showLetter = false
        this.filters = []
      }
    },
    handleRadioClick(item, index) {
      this.checkedValue = item[this.optionProps.value]
      this.$set(this.tableList[index], 'selected', true)
    },
    beforeClose(done) {
      if (this.mode === 'view') {
        done()
      } else {
        this.error = this.t('iw.favorite.saveFirst')
      }
    },
    close() {
      if (this.mode === 'view') {
        this.visible = false
      } else {
        this.error = this.t('iw.favorite.saveFirst')
      }
    },
    edit() {
      this.mode = 'edit'
    },
    cancel() {
      this.mode = 'view'
      this.error = ''
      this.init()
    },
    submit() {
      if (
        (this.require && !this.checkedValue)
      ) {
        this.error = this.t('iw.common.placeholder')
        return
      }
      this.checkedOption = this.tableList.find(item => item[this.optionProps.value] === this.checkedValue)
      this.$emit('change', this.checkedValue, this.checkedOption)
      this.visible = false
    },
    del(index) {
      this.error = ''
      setTimeout(() => {
        this.tableList.splice(index, 1)
        if (this.type === 'manfBrand') {
          this.dataForm.manfBrand = this.tableList.map(row => row[this.optionProps.children].map(item => item[this.optionProps.value]))
          this.dataForm.manfBrandText = this.tableList.map(row => row[this.optionProps.children].map(item => item))
        }
        if (this.type === 'subModel') {
          this.dataForm.subModel = this.tableList.map(row => row[this.optionProps.children].map(item => item[this.optionProps.value]))
          this.dataForm.subModelText = this.tableList.map(row => row[this.optionProps.children].map(item => item))
        }
        this.initData(this.tableList)
      }, 0)
    },
    copy(index) {
      this.create(index, true)
    },
    create(index = 0, isCopy = false) {
      if (this.tableList.length >= this.maxLength) {
        this.error = this.t('iw.favorite.maxFolders', {maxLength: this.maxLength})
        return false
      }
      const indexData = deepClone(this.tableList[index])
      indexData[this.optionProps.value] = parseInt(Math.random() * 1000000)
      indexData[this.optionProps.label] = this.t('iw.favorite.customFolder') + (this.tableList.length + 1)
      indexData[this.optionProps.children] = isCopy ? indexData[this.optionProps.children] : []
      indexData['selected'] = 0
      setTimeout(() => {
        this.tableList.push(indexData)
        this.initData(this.tableList)
      }, 0)
    },
    save() {
      if (!this.tableList.length) {
        this.error = this.t('iw.favorite.placeholder')
        return
      }
      if (this.tableList.filter(item => !!item[this.optionProps.label]).length !== this.tableList.length) {
        this.error = this.t('iw.favorite.placeholder')
        return
      }
      if (this.tableList.length !== this.tableList.filter(item => item[this.optionProps.label].length <= 50).length) {
        this.error = this.t('iw.favorite.maxFolderName', {maxLength: 50})
        return
      }
      if (this.tableList.length !== this.tableList.filter(item => item[this.optionProps.children].length > 0).length) {
        this.error = this.t('iw.common.placeholder')
        return
      }
      const names = this.tableList.map(item => item[this.optionProps.label])
      if ([...new Set(names)].length !== this.tableList.length) {
        this.error = this.t('iw.favorite.nameExist')
        return
      }
      if (!this.tableList.every(item => item[this.optionProps.children].length < 1000)) {
        this.error = this.t('iw.favorite.outOfRange')
        return
      }
      this.mode = 'view'
      this.error = ''
      this.$emit('save', this.tableList)
    },
    handleFilterChange(value, text, index) {
      this.selectedFilter = value
      if (value === 1) {
        this.searchFormData.subModel = this.segmentSubModel
        this.$set(this.dataForm.subModel, index, this.dataForm.subModel[index])
        this.showLetter = false
      } else if (value === 2) {
        this.searchFormData.subModel = this.brandSubModel
        this.$set(this.dataForm.subModel, index, this.dataForm.subModel[index])
        this.showLetter = true
      }
    },
    handleChange(value, text, index) {
      console.log(value, text, index)
      const tmpText = this.type === 'manfBrand' ? text[0] : text
      this.$set(this.dataForm[this.type], index, value)
      this.$set(this.tableList[index], this.optionProps.children, tmpText.map(item => {
        const child = {
          [this.optionProps.value]: item[this.optionProps.value],
          [this.optionProps.label]: item[this.optionProps.label]
        }
        if (this.type === 'subModel') {
          child['remark'] = item.remark
        }
        return child
      }))
      this.initData(this.tableList)
    }
  }
}
</script>
