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
      :popper-class="popover==='IwPopover'?'iw-cascader iw-cascader--'+iwSize + (disabled?' iw-cascader--disabled':''):''"
      :class="popover!=='IwPopover'?'iw-cascader iw-cascader--'+iwSize + (disabled?' iw-cascader--disabled':''):''"
      :disabled="disabled"
      :width="popover==='IwPopover'?null:deep * width + 'px'"
      :title="popover==='IwPopover'?null:false">
      <div slot="reference" class="iw-cascader-reference">
        <div :class="[{'is-focus': !disabled&&visible, 'is-disabled': disabled}, 'iw-input', 'iw-input--' + iwSize]" :style="'width:'+referenceWidth+'px'">
          <div v-if="popover==='IwPopover'" class="iw-input__inner">
            <span v-if="multiple&&checkedOptions&&checkedOptions.length>0" class="iw-input__value">
              <input v-if="checkedOptions.length>1" :value="'已选(' + checkedOptions.length +')'" :style="'width:'+(referenceWidth-36)+'px'" disabled>
              <input v-else :value="checkedOptions[0][optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" disabled>
            </span>
            <span v-else-if="!multiple&&checkedOptions&&checkedOptions.length" class="iw-input__value">
              <input :value="checkedOptions[checkedOptions.length-1][optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" disabled>
            </span>
            <span v-else class="iw-input__placeholder">{{ placeholder }}</span>
            <span class="iw-input__suffix">
              <slot>
                <i :class="['iw-input__icon', 'iw-icon-' + iconClass]"/>
              </slot>
            </span>
          </div>
        </div>
      </div>
      <div v-if="!disabled" :id="'iw-cascader__popover--'+id" :style="{width: deep * width + 'px', minWidth: (deep * 100 || 400) + 'px'}">
        <!-- 标题区 -->
        <div v-if="title" class="iw-cascader__title">
          <div v-if="title" class="iw-cascader__inner">{{ title }}</div>
          <div v-if="showSearch&&data.length" :class="'iw-cascader__search--'+iwSize" class="iw-cascader__search">
            <iw-input v-model="keyword" :size="iwSize" style="width: 120px;" prefix-icon="iw-icon-search" placeholder="搜索" @keyup.native="handleSearchChange" />
          </div>
          <div v-if="error" class="iw-cascader__error">{{ error }}</div>
          <div class="iw-cascader__close" @click="visible = false">
            <i class="iw-icon-close" />
          </div>
        </div>
        <!-- 内容区 -->
        <div v-loading="loading" class="iw-cascader__body">
          <slot name="filters-select" />
          <div v-if="data&&data.length">
            <div v-for="(group, index) in deep" :key="index" :style="{width: width + 'px'}" :id="'iw-cascader__group--'+index" class="iw-cascader__group">
              <div v-if="multiple&&listData[index]&&listData[index].length" class="iw-cascader__group-title" @click="handleCheckColumnChange(listData[index]||[], isCheckColumnChecked(listData[index]||[]))">
                <span
                  :class="[
                    multiple?'iw-checkbox':'iw-radio',
                    multiple&&(listData[index].length&&isCheckColumnChecked(listData[index]))?'iw-checkbox--checked':'',
                    multiple&&(listData[index].length&&isCheckColumnIndeterminate(listData[index]))?'iw-checkbox--indeterminate':''
                  ]"
                />
                <span class="iw-text"><em>{{ columnName[index] }}(全选)</em></span>
              </div>
              <div v-else class="iw-cascader__group-title">{{ columnName[index] || '&nbsp;' }}</div>
              <iw-scrollbar :ref="'scrollbarRight__KEY'" :wrap-style="'height:'+(height+16)+'px;'" wrap-class="iw-cascader__wrap">
                <div>
                  <ul v-if="listData[index]&&listData[index].length">
                    <li
                      v-for="row in listData[index]"
                      :key="row.key"
                      :class="{on: activeItemKey[index]!==undefined&&row.key===activeItemKey[index]&&row.children, 'has-checkbox': row.children}"
                      :scroll-key="row.key + '_' + index"
                      class="iw-cascader__item"
                      @click="handleSelectChange(row)"
                    >
                      <template v-if="row.children&&row.children.length">
                        <span
                          :class="[
                            multiple?'iw-checkbox':'',
                            multiple&&(selectOnLeaf&&isItemIndeterminate(row))?'iw-checkbox--indeterminate':'',
                            multiple&&((!selectOnLeaf&&row.selected)||(selectOnLeaf&&isItemChecked(row)))?'iw-checkbox--checked':'',
                            !multiple&&!selectOnLeaf?'iw-radio':'',
                            !multiple&&!selectOnLeaf&&row.selected?'iw-radio--checked':''
                          ]"
                          @click="handleItemChange(row)"
                        />
                        <span class="iw-text">
                          <em :title="row.value" :style="{color: row.disabled?'#c0c4cc':''}">{{ row[optionProps.label] }}</em>
                          <i class="iw-cascader__item-icon iw-icon-arrow-right" />
                        </span>
                      </template>
                      <template v-else>
                        <span :title="row[optionProps.label]" class="iw-text" @click="handleItemChange(row)">
                          <span
                            :class="[
                              multiple?'iw-checkbox':'iw-radio',
                              multiple&&row.selected?'iw-checkbox--checked':'',
                              !multiple&&row.selected?'iw-radio--checked':''
                            ]"
                          />
                          <em :title="row.value" :class="{'font-orange': row.remark=='进口'}" :style="{color: row.disabled?'#c0c4cc':''}">
                            {{ row[optionProps.label] }}<abbr class="font-gray">{{ row.date ? `(`+row.date+`)` : '' }}</abbr>
                          </em>
                          <i class="iw-cascader__item-icon" />
                        </span>
                      </template>
                    </li>
                  </ul>
                </div>
              </iw-scrollbar>
            </div>
          </div>
          <iw-empty v-else :status="status" style="height:160px;" />
        </div>
        <!-- 底部 -->
        <div v-if="datas.length" class="iw-cascader__footer">
          <span v-if="(showSelected||multiple)&&selectTextsTag&&selectTextsTag.length" class="iw-cascader__footer-selected">
            <label>已选：</label>
            <div>
              <iw-scrollbar :wrap-class="'iw-cascader__footer-scroll iw-cascader__footer-scroll--'+iwSize">
                <iw-tag
                  v-for="item in selectTextsTag"
                  :key="item[optionProps.value]+'_'+item['level']"
                  :title="item[optionProps.label]"
                  :size="iwSize"
                  type="danger"
                  closable
                  @click="handleTagClose(item)"
                  @close="handleTagClose(item)"
                >{{ item[optionProps.label] }}</iw-tag>
              </iw-scrollbar>
            </div>
          </span>
          <span
            v-if="showCheckAll&&multiple&&datas.length"
            class="iw-cascader__footer-checkall"
            @click="handleCheckAllChange(datas, !isCheckAllChecked(datas))">
            <span
              :class="[
                'iw-checkbox',
                data.length&&isCheckAllChecked(datas)?'iw-checkbox--checked':''
              ]"
            />
            <span class="iw-text">全选所有</span>
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
import { getTree, arr2table, findInArray, treeDeep, recursiveLoop, deepClone, substr } from '@iways-ui/src/utils/util'
export default {
  name: 'IwCascader',
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: [Array, String, Number],
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
    width: {
      // 单列宽度
      type: [Number, String],
      default: 180
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
      datas: [], // 数据源
      listData: [], // 内容列表，[0 => [], 1, []]
      activeItemKey: [], // 激活的选项key
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
    }
  },
  watch: {
    value() {
      this.initValue()
      this.initData()
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
      if (!data || data.length === 0) return
      this.datas = getTree(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: this.selectTexts && this.selectTexts.length ? this.selectTexts : this.selectValues,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: this.selectOnLeaf,
        disabledSelect: this.disabledSelect
      })

      // 初始化activeItemKey
      const selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(item => item.selected === true)
      if (selectTexts && selectTexts.length) {
        this.activeItemKey = recursiveLoop(this.multiple ? selectTexts[0] : selectTexts.slice(-1), 'parent').reverse()
      }
      // 初始化列表数组
      let datas = this.datas
      const length = this.deep
      this.listData = [datas]
      for (let index = 0; index < length; index++) {
        this.activeItemKey[index] = this.activeItemKey[index] || (datas && datas[0] && datas[0][this.optionProps.value])
        const activeItem = datas.find(item => item[this.optionProps.value] === this.activeItemKey[index] && item['level'] === index)
        if (activeItem) {
          const nlevel = activeItem.level + 1
          this.listData[nlevel] = datas = activeItem[this.optionProps.children] || []
          this.$nextTick(() => {
            this.selectLetter(this.activeItemKey[index], index)
          })
        }
      }

      if (!this.multiple) {
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
    },
    handleClearClick(e) {
      console.log(e)
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
     * 查询关键字，过滤数据源
     */
    handleSearchChange(event) {
      this.lastSearch = event.timeStamp
      setTimeout(() => {
        if (this.lastSearch === event.timeStamp) {
          this.activeItemKey = []
          this.initData()
        }
      }, 500)
    },
    /**
     * 删除已选项
     * 1.设置已选项selected=false，由原型链绑定实现去除内容区已选
     * 2.过滤已选项
     */
    handleTagClose(item) {
      this.$set(item, 'selected', false)
      this.selectTextsTag = this.selectTextsTag.filter(child => child.selected === true)
      this.selectTexts = this.selectTextsTag.map(child => child)
      this.selectValues = this.selectTextsTag.map(child => { return child[this.optionProps.value] })
    },
    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange(item, selected, up = true) {
      if (item.disabled) return
      this.error = ''
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected
        this.$set(item, 'selected', selected)
        if (this.selectOnLeaf) {
          item[this.optionProps.children] && item[this.optionProps.children].forEach(row => {
            this.handleItemChange(row, selected, false)
          })
          if (up) {
            this.handleParentChange(item)
          }
        } else if (this.exclusion) {
          this.handleExclusionChange(item, !item.selected)
        }
        if (up) {
          this.handleMultipleChange(item)
        }
      } else {
        this.selectTexts.forEach(row => {
          this.$set(row, 'selected', false)
        })
        if (up) {
          this.$set(item, 'selected', true)
          this.selectTexts = [item]
          this.selectValues = [item[this.optionProps.value]]
          this.selectTextsTag = [item]
        }
      }
    },
    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange(item) {
      if (item.parent) {
        const parent = findInArray('key', item.parent[this.optionProps.value], this.datas, this.optionProps.children, item.parent.level)
        if (parent) {
          parent.selected = parent.children.length === parent.children.filter(item => item.selected === true).length
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent)
        }
      }
    },
    handleMultipleChange(item) {
      const tableDatas = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf)
      const selectTexts = tableDatas.filter(item => item.selected)
      const unselectTexts = tableDatas.filter(item => item.selected === false)
      if (!this.exclusion) {
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
      } else {
        this.selectTextsTag = selectTexts
      }
      this.selectTexts = deepClone(this.selectTextsTag)
      this.selectValues = this.selectTexts.map(item => item[this.optionProps.value])
    },
    handleExclusionChange(item, selected, first = true) {
      // 选中值
      if (!selected) {
        // 清除所有子节点
        item.children && item.children.forEach(row => {
          row.selected = false
          this.handleExclusionChange(row, false, false)
        })
        if (first) {
          // 清除所有父节点
          this.handleParentExclusionChange(item, false)
        }
      }
    },
    handleParentExclusionChange(item, selected) {
      if (!selected) {
        if (item.parent) {
          const data = this.listData[item.parent.level]
          const parent = data.find(child => child.key === item.parent.key)
          if (parent) {
            parent.selected = false
          }
          if (parent && parent.parent) {
            this.handleParentExclusionChange(parent, false)
          }
        }
      }
    },
    /**
     * 单选事件
     * @param {Number} index 节点层级
     * @param {Object} item 节点对象
     */
    handleSelectChange(item, clear, submit = true) {
      if (!item) return
      if (!item.children || !item.children.length) return
      const index = Number(item.level)
      const nIndex = index + 1
      this.$set(this.activeItemKey, index, item.key)

      if (item.children && item.children.length) {
        this.$set(this.listData, nIndex, item.children)
        this.listData = this.listData.map((item, key) => {
          return key <= nIndex && key < this.deep ? item : []
        })
        this.activeItemKey = this.activeItemKey.filter((item, key) => {
          return key < nIndex && key < this.deep
        })
      }
    },
    isItemChecked(data) {
      const _selected = data[this.optionProps.children].filter(item => item.selected === true)
      const _children = data[this.optionProps.children]
      data.selected = _selected.length === _children.length
      return data.selected
    },
    isItemIndeterminate(data) {
      const _selected = data[this.optionProps.children].filter(item => item.selected === true)
      const _children = data[this.optionProps.children]
      return _selected.length > 0 && _children.length > _selected.length
    },
    handleCheckColumnChange(data, checked = false) {
      data.forEach((group, key) => {
        this.handleItemChange(group, !checked, false)
      })
      if (data[0]) {
        this.handleMultipleChange(data[0])
      }
    },
    isCheckColumnChecked(data) {
      return data.every(group => {
        return group.selected === true
      })
    },
    isCheckColumnIndeterminate(data) {
      const count = data.filter(group => {
        return group.selected === true
      }).length
      return data.length !== count && count > 0
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
    selectLetter(key, target = 'KEY', delay = 0) {
      this.selectedKey = key
      const obj = document.querySelector('#iw-cascader__popover--' + this.id + ' #iw-cascader__group--' + target + ' [scroll-key="' + key + '_' + target + '"]')
      if (obj) {
        const scrollTop = parseInt(obj['offsetTop'])
        document.querySelector('#iw-cascader__popover--' + this.id + ' #iw-cascader__group--' + target + ' .iw-cascader__wrap').scrollTop = scrollTop
      }
    },
    substr(str, len) {
      return substr(str, len)
    }
  }
}
</script>
