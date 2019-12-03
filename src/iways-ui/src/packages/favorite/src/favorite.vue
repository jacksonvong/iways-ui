<template>
  <div style="display: inline-block;">
    <div v-if="popover==='IwDialog'" @click="visible = true">
      <slot name="reference">{{ placeholder }}</slot>
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
              <input v-else :value="checkedOption.children.map(item => item[optionProps.label]).join(', ')" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
            </span>
            <span v-else class="iw-input__value">
              <input :style="'width:'+(referenceWidth-36)+'px'" :value="placeholder" :disabled="disabled" class="iw-input__placeholder" unselectable="on" readonly >
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
          <div v-if="title" class="iw-favorite__inner">收藏{{ title }}</div>
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
                      <dt>收藏夹</dt>
                      <dt :style="{width: (mode==='edit' ? 385 : 490) + 'px'}">{{ title || subType || titles[type] }}</dt>
                      <dt v-if="mode==='edit'">操作</dt>
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
                          <span v-if="mode!=='edit'" :class="['iw-radio', row.key===checkedValue?'iw-radio--checked':'']" @click="handleRadioClick(row, index)" />
                          <span v-if="mode!=='edit'" class="iw-text"><label :title="row['value']" @click="handleRadioClick(row, index)">{{ row['value'] }}</label></span>
                          <span v-if="mode==='edit'" class="iw-text"><iw-input v-model="row['value']" :disabled="mode!=='edit'" :size="iwSize" placeholder="请输入竞争圈名称" style="width:114px;" /></span>
                        </div>
                      </dt>
                      <dt :style="{width: (mode==='edit' ? 385 : 490) + 'px', minHeight: '36px'}">
                        <div :class="{'children--model-edit':mode==='edit'}">
                          <span
                            v-if="row.children&&row.children.length"
                            class="iw-favorite__item iw-favorite__item--text"
                            v-html="row.children.map(item => '<em title='+item.value+' class='+(item.remark=='进口'?'font-orange':'font-blue')+'>'+item.value + '</em>').join(' , ')"
                          />
                          <span v-if="mode==='edit'" class="iw-favorite__item iw-favorite__item--select">
                            <component
                              :is="componentName"
                              v-model="dataForm[type][index]"
                              :disabled-select="dataForm[type+'Disabled'][index]"
                              :data="searchFormData[type]"
                              :show-search="true"
                              :show-letter="showLetter"
                              :filters="filters"
                              :selected-filter="selectedFilter"
                              :title="titles[type]"
                              :append-to-body="false"
                              multiple
                              size="mini"
                              placement="bottomLeft"
                              @filterChange="(value, text) => handleFilterChange(value, text, index)"
                              @change="(value, text) => handleChange(value, text, index)"
                            >
                              <span slot="reference" class="iw-favorite__button--select">选择</span>
                            </component>
                          </span>
                        </div>
                      </dt>
                      <dt v-if="mode==='edit'">
                        <span class="iw-favorite__button iw-favorite__button--del" @click="del(index)">删除</span>
                        <span class="iw-favorite__button iw-favorite__button--copy" @click="copy(index)">复制</span>
                      </dt>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <iw-empty v-else :style="{height: '150px'}" :status="200" />
        </div>
        <!-- 底部 -->
        <div class="iw-favorite__footer">
          <slot name="desc" />
          <div v-show="mode==='view'">
            <iw-button v-if="editable" :size="iwSize" @click="edit()">
              编辑
            </iw-button>
            <iw-button :size="iwSize" type="primary" @click="submit(false)">
              确定
            </iw-button>
          </div>
          <div v-show="mode==='edit'">
            <iw-button :size="iwSize" @click="create()">
              新建
            </iw-button>
            <iw-button :size="iwSize" @click="cancel()">
              取消
            </iw-button>
            <iw-button :size="iwSize" type="primary" @click="save()">
              保存
            </iw-button>
          </div>
        </div>
      </div>
    </component>
  </div>
</template>

<script>
import { deepClone } from '@iways-ui/src/utils/util'
export default {
  name: 'IwFavorite',
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
      default: 'bottom'
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
      default: '请选择'
    },
    loading: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      status: 0,
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
        subModel: this.selectTitle || '车型',
        manfBrand: this.selectTitle || '厂商品牌',
        segment: this.selectTitle || '细分市场'
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
          this.$set(this.titles, 'subModel', this.selectTitle || '车型')
          break
        case 'manfBrand':
          this.$set(this.titles, 'manfBrand', this.selectTitle || '厂商品牌')
          break
        case 'segment':
          this.$set(this.titles, 'segment', this.selectTitle || '细分市场')
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
      this.checkedOption = this.data.find(item => item.key === this.checkedValue) || {}
    },
    initData(data = this.data) {
      this.tableList = deepClone(data).map((row, index) => {
        row.key = row.key
        if (this.checkedValue) {
          row.selected = this.checkedValue === row.key
        } else if (row.selected) this.checkedValue = row.key
        this.checkedOption = this.data.find(item => item.key === this.checkedValue) || {}
        if (this.type === 'manfBrand') {
          this.$set(this.dataForm[this.type], index, [row.children.map(item => item.key)])
          this.$set(this.dataForm[this.type + 'Disabled'], index, [row.disabledChildren])
          this.$set(this.dataForm[this.type + 'Text'], index, [row.children.map(item => {
            item.selected = true
            return item
          })])
        } else {
          this.$set(this.dataForm[this.type], index, row.children.map(item => item.key))
          this.$set(this.dataForm[this.type + 'Disabled'], index, row.disabledChildren)
          this.$set(this.dataForm[this.type + 'Text'], index, row.children.map(item => {
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
        this.filters = [{ key: 1, value: '细分市场' }, { key: 2, value: '品牌' }]
      }
      if (this.type === 'segment') {
        this.$set(this.searchFormData, 'segment', deepClone(this.typeData))
        this.showLetter = false
        this.filters = []
      }
    },
    handleRadioClick(item, index) {
      this.checkedValue = item.key
      this.$set(this.tableList[index], 'selected', true)
    },
    beforeClose(done) {
      if (this.mode === 'view') {
        done()
      } else {
        this.error = '请先保存'
      }
    },
    close() {
      if (this.mode === 'view') {
        this.visible = false
      } else {
        this.error = '请先保存'
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
        this.error = '请选择'
        return
      }
      this.checkedOption = this.tableList.find(item => item.key === this.checkedValue)
      this.$emit('change', this.checkedValue, this.checkedOption)
      this.visible = false
    },
    del(index) {
      this.error = ''
      setTimeout(() => {
        this.tableList.splice(index, 1)
        if (this.type === 'manfBrand') {
          this.dataForm.manfBrand = this.tableList.map(row => row.children.map(item => item.key))
          this.dataForm.manfBrandText = this.tableList.map(row => row.children.map(item => item))
        }
        if (this.type === 'subModel') {
          this.dataForm.subModel = this.tableList.map(row => row.children.map(item => item.key))
          this.dataForm.subModelText = this.tableList.map(row => row.children.map(item => item))
        }
        this.initData(this.tableList)
      }, 0)
    },
    copy(index) {
      this.loading = true
      this.create(index, true)
    },
    create(index = 0, isCopy = false) {
      if (this.tableList.length >= this.maxLength) {
        this.error = '最多不能超过' + this.maxLength + '个'
        this.loading = false
        return false
      }
      const indexData = deepClone(this.tableList[index])
      indexData['key'] = parseInt(Math.random() * 1000000)
      indexData['value'] = '自定义文件夹' + (this.tableList.length + 1)
      indexData['children'] = isCopy ? indexData['children'] : []
      indexData['selected'] = 0
      setTimeout(() => {
        this.tableList.push(indexData)
        this.initData(this.tableList)
        this.loading = false
      }, 0)
    },
    save() {
      if (!this.tableList.length) {
        this.error = '请选择'
        return
      }
      if (this.tableList.filter(item => !!item.value).length !== this.tableList.length) {
        this.error = '请选择'
        return
      }
      if (this.tableList.length !== this.tableList.filter(item => item.value.length <= 30).length) {
        this.error = '名称不能超过30个字'
        return
      }
      if (this.tableList.length !== this.tableList.filter(item => item.children.length > 0).length) {
        this.error = '请选择'
        return
      }
      const names = this.tableList.map(item => item.value)
      if ([...new Set(names)].length !== this.tableList.length) {
        this.error = '名称已重复'
        return
      }
      if (!this.tableList.every(item => item.children.length < 1000)) {
        this.error = '超过范围'
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
      const tmpText = this.type === 'manfBrand' ? text[0] : text
      this.$set(this.dataForm[this.type], index, value)
      this.$set(this.tableList[index], 'children', tmpText.map(item => {
        const child = {
          key: item.key,
          value: item.value
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
