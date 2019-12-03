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
      :popper-class="popover==='IwPopover'?'iw-cascader-table iw-cascader-table--'+iwSize + (disabled?' iw-cascader-table--disabled':''):''"
      :class="popover!=='IwPopover'?'iw-cascader-table iw-cascader-table--'+iwSize + (disabled?' iw-cascader-table--disabled':''):''"
      :disabled="disabled"
      :width="popover==='IwPopover'?null:clientWidth"
      :title="popover==='IwPopover'?null:false">
      <div slot="reference" class="iw-cascader-table-reference">
        <div :class="[{'is-focus': !disabled&&visible, 'is-disabled': disabled}, 'iw-input', 'iw-input--' + iwSize]" :style="referenceWidth?'width:'+referenceWidth+'px':''">
          <div v-if="popover==='IwPopover'" class="iw-input__inner">
            <span v-if="multiple&&checkedOptions&&checkedOptions.length>0" class="iw-input__value">
              <input v-if="checkedOptions.length>1" :value="'已选(' + checkedOptions.length +')'" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
              <input v-else :value="checkedOptions[0][optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
            </span>
            <span v-else-if="!multiple&&checkedOptions&&checkedOptions.length" class="iw-input__value">
              <input :value="checkedOptions[checkedOptions.length-1][optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
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
      <div v-if="!disabled" ref="iw-cascader-table__popover" :id="'iw-cascader-table__popover--'+id" :style="{minWidth: '357px',width: clientWidth}">
        <!-- 标题区 -->
        <div v-if="title||tabs.length" class="iw-cascader-table__title">
          <div v-if="title" class="iw-cascader-table__inner">{{ title }}</div>
          <div v-if="showSearch&&data.length" :class="'iw-cascader-table__search--'+iwSize" class="iw-cascader-table__search">
            <iw-input v-model="keyword" :size="iwSize" style="width: 130px;" prefix-icon="iw-icon-search" placeholder="搜索" @change="handleSearchChange" @keyup.native="handleSearchChange" />
          </div>
          <div v-if="error" class="iw-cascader-table__error">{{ error }}</div>
          <div class="iw-cascader-table__close" @click="visible = false">
            <i class="iw-icon-close" />
          </div>
        </div>
        <!-- 内容区 -->
        <div class="iw-cascader-table__body">
          <div v-loading="loading">
            <div v-if="columnNameData&&columnNameData.length" class="iw-cascader-table__body-header iw-cascader-table__wrap">
              <div class="iw-cascader-table__group">
                <IwCascaderTableItem
                  :data="columnNameData"
                  :select-on-leaf="selectOnLeaf"
                  :leafs-per-column="leafsPerColumn"
                  :multiple="multiple"
                  :deep="deep"
                  :level="0"
                  :is-header="true" />
              </div>
            </div>
            <template v-if="datas&&datas.length">
              <iw-scrollbar :ref="'scrollbarRight__KEY'" :wrap-style="'height:'+(height+16)+'px;'" wrap-class="iw-cascader-table__wrap">
                <div class="iw-cascader-table__group">
                  <IwCascaderTableItem
                    :data="datas"
                    :select-on-leaf="selectOnLeaf"
                    :leafs-per-column="leafsPerColumn"
                    :exclusion="exclusion"
                    :multiple="multiple"
                    :deep="deep"
                    :level="0"
                    @change="handleItemChange" />
                </div>
              </iw-scrollbar>
            </template>
            <iw-empty v-else :status="status" style="height:160px;" />
          </div>
        </div>
        <!-- 底部 -->
        <div v-if="data.length" class="iw-cascader-table__footer">
          <span v-if="(showSelected)&&selectTextsTag&&selectTextsTag.length" class="iw-cascader-table__footer-selected">
            <label>已选：</label>
            <div>
              <iw-scrollbar :wrap-class="'iw-cascader-table__footer-scroll iw-cascader-table__footer-scroll--'+iwSize">
                <iw-tag
                  v-for="item in selectTextsTag"
                  :key="item[optionProps.value]+'_'+item['level']"
                  :title="item[optionProps.label]"
                  :size="iwSize"
                  type="pink"
                  closable
                  @click="handleTagClose(item)"
                  @close="handleTagClose(item)"
                >{{ item[optionProps.label] }}</iw-tag>
              </iw-scrollbar>
            </div>
          </span>
          <span
            v-if="showCheckAll&&multiple&&datas.length"
            class="iw-cascader-table__footer-checkall"
            @click="handleCheckAllChange(datas, !isCheckAllChecked(datas))">
            <span
              :class="[
                'iw-checkbox',
                data.length&&isCheckAllChecked(datas)?'iw-checkbox--checked':'',
                data.length&&isCheckAllIndeterminate(datas)?'iw-checkbox--indeterminate':''
              ]"
            />
            <span>全选所有</span>
          </span>
          <iw-button :size="iwSize" @click="reset()">
            重置
          </iw-button>
          <iw-button :size="iwSize" type="primary" @click="submit(false)">
            确定
          </iw-button>
        </div>
      </div>
    </component>
  </div>
</template>
<script>
import { getTree, arr2table, treeDeep, deepClone, substr } from '@iways-ui/src/utils/util'
import IwCascaderTableItem from './cascader-table-item'
export default {
  name: 'IwCascaderTable',
  components: {
    IwCascaderTableItem: IwCascaderTableItem
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: Array,
      default() {
        return []
      }
    },
    defaultValue: {
      type: Array,
      default() {
        return undefined
      }
    },
    texts: {
      type: Array,
      default() {
        return []
      }
    },
    defaultTexts: {
      type: Array,
      default() {
        return undefined
      }
    },
    id: {
      type: Number,
      default() {
        return parseInt(Math.random() * 10000)
      }
    },
    title: {
      // 标题： 为空就不显示
      type: [Boolean, String],
      default: false
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    leafsPerColumn: {
      type: Number,
      default: 5,
      validator(value) {
        return [2, 3, 4, 5].includes(value)
      }
    },
    columnName: {
      type: Array,
      default() {
        return []
      }
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showLetter: {
      // 是否需要快速字母选择器
      type: Boolean,
      default: true
    },
    showSearch: {
      // 显示搜索框
      type: Boolean,
      default: true
    },
    showSelected: {
      // 是否显示已选项
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    status: {
      type: [Number, String],
      default: 0
    },
    height: {
      type: [Number, String],
      default: 320
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
      type: Boolean,
      default() {
        return false
      }
    },
    exclusion: {
      // 当此项为 true 时，同级节点互斥
      type: Boolean,
      default() {
        return false
      }
    },
    appendPKey: {
      // key追加父级key，避免重复key
      type: Boolean,
      default() {
        return true
      }
    },
    showCheckAll: {
      // 当此项为 true 时，显示顶部全选功能
      type: Boolean,
      default() {
        return false
      }
    },
    require: {
      // 当此项为 true 时，必须选择
      type: Boolean,
      default() {
        return false
      }
    },
    min: {
      type: Number,
      default() {
        return 0
      }
    },
    max: {
      type: Number,
      default() {
        return 0
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
    disabledSelect: {
      tips: '禁止选择',
      type: Array,
      default() {
        return []
      }
    },
    /**
     * Popover的属性
     */
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
    className: {
      type: String,
      default: ''
    },
    size: {
      // 组件尺寸
      type: String,
      default: '' // 可选: medium || small || mini
    }
  },
  data() {
    return {
      visible: false,
      popover: 'IwPopover',
      referenceWidth: null,
      clientWidth: null,
      datas: [], // 数据源
      checkedOptions: [], // 已选项(选择框显示)
      selectTextsTag: [], // 已选项(已选栏显示)
      selectValues: [], // 已选项的ID
      selectTexts: [], // 已选项(内部存储，单选存所有节点项，复选根据selectOnLeaf存所有节点项或叶子节点项)
      keyword: undefined, // 查询值
      selectedKey: undefined, // 快速定位(showLetter=true)
      selectedTrack: undefined, // 快速定位(showLetter=false)
      lastSearch: undefined,
      error: '', // 错误信息
      firstLoad: true,
      scrollOptions: { // 滚动条配置
        bar: {
          showDelay: 500,
          onlyShowBarOnScroll: false,
          background: '#c1c1c1',
          opacity: 1,
          size: '10px'
        },
        rail: {
          size: '10px'
        }
      }
    }
  },
  computed: {
    iwSize() {
      return this.size || (this.$IWAYS || {}).size
    },

    iconClass() {
      return this.visible && !this.disabled ? 'arrow-up is-reverse' : 'arrow-up'
    },

    deep() {
      return this.data.length ? treeDeep(this.data) : 0
    },

    columnNameData() {
      let data = []
      for (let i = this.deep - 1; i >= 0; i--) {
        if (!this.columnName[i]) continue
        const tmp = { key: 'title_' + i, value: this.columnName[i] }
        if (data.length) {
          data = [{ ...tmp, children: data }]
        } else {
          data = [tmp]
        }
      }
      return data
    }
  },
  watch: {
    value() {
      this.initValue()
      this.initData()
      this.initStatus()
    },
    data() {
      if (this.firstLoad) {
        this.initData()
        this.firstLoad = false
      } else {
        this.initData(this.data, false)
      }
    },
    visible() {
      this.keyword = ''
      if (this.visible) {
        this.initValue()
        this.initData()
        this.initStatus()
      } else {
        this.$emit('close')
      }
    }
  },
  mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover'
    this.referenceWidth = this.$el.offsetWidth
    this.initValue()
    this.initData()
    this.initStatus()
  },
  methods: {
    initValue(value = this.value, texts = this.texts, reset = false) {
      if (value !== null && value !== undefined && (value instanceof String || value instanceof Number)) {
        value = [value]
      }
      if (value instanceof Array) {
        this.selectValues = deepClone(value)
      }
      if (texts !== null && texts !== undefined && (texts instanceof String || texts instanceof Number)) {
        texts = [texts]
      }
      if (texts instanceof Array) {
        this.selectTexts = deepClone(texts)
        this.selectTextsTag = deepClone(texts)
        if (!reset) this.checkedOptions = deepClone(texts)
      } else {
        this.selectTexts = []
        this.selectTextsTag = []
        if (!reset) this.checkedOptions = []
      }
    },
    initData(data = this.data, submit = true) {
      this.datas = getTree(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: this.selectTexts && this.selectTexts.length ? this.selectTexts : this.selectValues,
        appendPKey: this.appendPKey,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: this.selectOnLeaf,
        disabledSelect: this.disabledSelect || []
      })

      if (!this.multiple) {
        const selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(item => item.selected === true)
        if (selectTexts.length) {
          this.selectTexts = selectTexts
          this.selectValues = selectTexts.map(item => item.key)
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1)
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        const selectTexts = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf).filter(item => item.selected === true)
        selectTexts.forEach(item => {
          const key = this.optionProps.value
          const index = this.selectTextsTag.findIndex(row => { return row[key] === item[key] && row['value'] === item['value'] })
          if (index > -1) {
            this.$set(this.selectTextsTag, index, item)
          } else {
            this.selectTextsTag.push(item)
          }
        })
      }
      // 未设置属性texts值时，设置已选项
      if (submit) {
        this.checkedOptions = deepClone(this.selectTextsTag)
      }
      this.clientWidth = (this.deep - 1) * 132 + this.leafsPerColumn * 112 + (this.deep - 1) + 'px'
    },
    initStatus() {
      if (this.selectValues.length) {
        const key = this.multiple ? this.selectValues[0] : this.selectValues[1]
        this.$nextTick(() => {
          this.scrollTop(key, 'KEY')
        })
      }
    },
    /**
     * 重置
     * 1.重置已选项，有默认值重置为默认值，无默认值重置为初始值
     * 2.重置内容区选中项
     */
    reset() {
      this.keyword = ''
      this.initValue(this.defaultValue, this.defaultTexts, true)
      this.initData(this.data, false)
    },
    /**
     * 提交，触发回调
     */
    submit(visible = false) {
      // 验证
      if (
        (this.require && this.selectTextsTag.length <= 0)
      ) {
        this.error = '请选择'
        return
      }
      if (this.multiple) {
        if (this.min && this.selectTextsTag.length < this.min) {
          this.error = '最少选择' + this.min + '项'
          return
        }
        if (this.max && this.selectTextsTag.length > this.max) {
          this.error = '最多选择' + this.max + '项'
          return
        }
      }
      this.keyword = ''
      this.error = ''
      this.checkedOptions = deepClone(this.selectTextsTag)
      this.$emit('change', this.checkedOptions.map(item => item[this.optionProps.value]), this.checkedOptions)
      this.visible = visible
    },
    /**
     * 快速定位
     */
    handleTrackChange(value) {
      this.scrollTop(value)
    },
    scrollTop(key, target = 'KEY', delay = 0) {
      this.selectedKey = key
      const obj = document.querySelector('#iw-cascader-table__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]')
      if (obj) {
        const scrollTop = parseInt(obj['offsetTop'])
        document.querySelector('#iw-cascader-table__popover--' + this.id + ' .iw-cascader-table__wrap').scrollTop = scrollTop
      }
    },
    /**
     * 回调函数，过滤数据源
     */
    handleFilterChange(value, key) {
      this.firstLoad = false
      this.$emit('filterChange', value, key)
    },
    /**
     * 查询关键字，过滤数据源
     */
    handleSearchChange(event) {
      this.lastSearch = event.timeStamp
      setTimeout(() => {
        if (this.lastSearch === event.timeStamp) {
          this.initData(this.data, false)
        }
      }, 400)
    },
    /**
     * 删除已选项
     * 1.设置已选项selected=false，由原型链绑定实现去除内容区已选
     * 2.过滤已选项
     */
    handleTagClose(item) {
      item.selected = false
      this.selectTextsTag = this.selectTextsTag.filter(child => child.selected)
      this.selectTexts = this.selectTextsTag.filter(child => child.selected)
      this.selectValues = this.selectTextsTag.map(child => { return child.key })
    },
    handleItemChange(item) {
      if (this.multiple) {
        this.handleMultipleChange(item)
      } else {
        this.selectTexts.forEach(row => {
          this.$set(row, 'selected', false)
        })
        this.$set(item, 'selected', true)
        this.selectTexts = [item]
        this.selectValues = [item[this.optionProps.value]]
        this.selectTextsTag = [item]
      }
    },
    /**
     * 复选方法，设置已选项selectTextsTag，避免不在数据源的已选项被误删
     * 1.添加时把数据源selected=true的项赋值到selectTextsTag
     * 2.删除时把selectTextsTag中对应的selected=false的项删除
     */
    handleMultipleChange(item) {
      const tableDatas = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf)
      const selectTexts = tableDatas.filter(item => item.selected)
      const unselectTexts = tableDatas.filter(item => item.selected === false)
      if (this.keyword === '') {
        this.selectTextsTag = selectTexts
      } else {
        if (item.selected) {
          selectTexts.forEach(item => {
            const index = this.selectTextsTag.findIndex((child, key) => {
              return child.key === item.key && child.value === item.value
            })
            if (index === -1) this.selectTextsTag.push(item)
            else this.selectTextsTag[index] = item
          })
        } else {
          unselectTexts.forEach(item => {
            const index = this.selectTextsTag.findIndex((child, key) => {
              return child.key === item.key && child.value === item.value
            })
            if (index !== -1) this.selectTextsTag.splice(index, 1)
          })
        }
      }
      this.selectTexts = deepClone(this.selectTextsTag)
      this.selectValues = this.selectTexts.map(item => item[this.optionProps.value])
    },
    handleCheckAllChange(data, selected = false, go = true) {
      if (data instanceof Array) {
        data.forEach(item => {
          this.handleCheckAllChange(item, selected, false)
        })
      } else if (data instanceof Object) {
        this.$set(data, 'selected', selected)
        const children = data[this.optionProps.children]
        if (children && children.length > 0) {
          this.handleCheckAllChange(children, selected, false)
        }
      }
      if (go && data[0]) {
        this.handleMultipleChange(data[0])
      }
    },
    isCheckAllChecked(data) {
      if (data instanceof Array) {
        for (const item of data) {
          if (!this.isCheckAllChecked(item)) return false
        }
      } else if (data instanceof Object) {
        if (!data.selected) return false
        const children = data[this.optionProps.children]
        if (children && children.length > 0) {
          if (!this.isCheckAllChecked(children)) return false
        }
      }
      return true
    },
    isCheckAllIndeterminate(data) {
      if (data instanceof Array) {
        for (const item of data) {
          if (this.isCheckAllIndeterminate(item)) return true
        }
      } else if (data instanceof Object) {
        if (data.selected) return true
        const children = data[this.optionProps.children]
        if (children && children.length > 0) {
          if (this.isCheckAllIndeterminate(children)) return true
        }
      }
      return false
    },
    getCheckedKeys() {
      return this.checkedOptions.map(item => item[this.optionProps.value])
    },
    substr(str, len) {
      return substr(str, len)
    }
  }
}
</script>
