<template>
  <iw-popover
    v-model="visible"
    :trigger="trigger"
    :placement="placement"
    :append-to-body="appendToBody"
    :popper-class="'iw-version iw-version--'+iwSize + (disabled?' iw-version--disabled':'')"
    :width="null"
  >
    <div slot="reference" class="iw-version-reference">
      <slot name="reference">
        <div :class="[{'is-focus': !disabled&&visible, 'is-disabled': disabled}, 'iw-input', 'iw-input--' + iwSize]" :style="referenceWidth?'width:'+referenceWidth+'px':''">
          <div class="iw-input__inner">
            <span v-if="triggerText" class="iw-input__value">
              <font>{{ triggerText }}</font>
            </span>
            <span v-else-if="multiple&&checkedOptions&&checkedOptions.length>0" class="iw-input__value">
              <input v-if="checkedOptions.length>1" :value="t('iw.common.selected')+'(' + checkedOptions.length +')'" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
              <input v-else :value="checkedOptions[0][optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
            </span>
            <span v-else-if="!multiple&&checkedOptions&&checkedOptions.length" class="iw-input__value">
              <input :value="checkedOptions[checkedOptions.length-1][optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
            </span>
            <span v-else class="iw-input__value">
              <input :style="'width:'+(referenceWidth-36)+'px'" :value="placeholder || t('iw.common.placeholder')" :disabled="disabled" class="iw-input__placeholder" unselectable="on" readonly>
            </span>
            <span class="iw-input__suffix">
              <slot>
                <i :class="['iw-input__icon', 'iw-icon-' + iconClass]"/>
              </slot>
            </span>
          </div>
        </div>
      </slot>
    </div>
    <div v-if="!disabled" :id="'iw-version__popover--'+id" :style="{minWidth: showModel?'400px':'270px', width: showModel?'660px':'530px'}">
      <!-- 标题区 -->
      <div v-if="title" class="iw-version__title">
        <div class="iw-version__inner">{{ title }}</div>
        <div v-if="showSearch&&data.length" :class="'iw-version__search--'+iwSize" class="iw-version__search">
          <iw-input v-model="keyword" :size="iwSize" :placeholder="t('iw.common.search')" style="width: 130px;" prefix-icon="iw-icon-search" @change="handleSearchChange" @keyup.native="handleSearchChange" />
        </div>
        <div v-if="error" class="iw-version__error">{{ error }}</div>
        <div class="iw-version__close" @click="visible = false">
          <i class="iw-icon-close" />
        </div>
      </div>
      <!-- 内容区 -->
      <div class="iw-version__body">
        <div v-loading="loading">
          <template v-if="datas&&datas.length">
            <div class="iw-version__body-header iw-version__wrap">
              <div class="iw-version__group">
                <div class="iw-version__group_table">
                  <table>
                    <tr>
                      <td v-show="showModel">{{ t('iw.version.submodel') }}</td>
                      <td>
                        <div class="iw-version__group_table">
                          <table>
                            <tr>
                              <td>{{ t('iw.version.version') }}</td>
                              <td>{{ t('iw.version.msrp') }}</td>
                              <td>{{ t('iw.version.hot') }}</td>
                              <td>{{ t('iw.version.dataSource') }}</td>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <iw-scrollbar :ref="'scrollbarRight__KEY'" :wrap-style="'height:'+(height+16)+'px;'" wrap-class="iw-version__wrap">
              <div class="iw-version__group">
                <div class="iw-version__group_table">
                  <table>
                    <tr v-for="row in datas" :key="row[optionProps.value]">
                      <td v-show="showModel">
                        <div :title="row[optionProps.label]" class="iw-version__group_item" @click="handleItemChange(row)">
                          <span
                            :class="[
                              multiple?'iw-checkbox':'',
                              multiple&&(!selectOnLeaf&&row.selected)||(selectOnLeaf&&isItemChecked(row))?'iw-checkbox--checked':'',
                              multiple&&(selectOnLeaf&&isItemIndeterminate(row))?'iw-checkbox--indeterminate':''
                            ]"
                          />
                          <span class="iw-text">{{ row[optionProps.label] }}</span>
                        </div>
                      </td>
                      <td>
                        <table class="">
                          <tr v-for="(item, key2) in row[optionProps.children]" :key="key2">
                            <td>
                              <div :title="item[optionProps.label]" :class="['iw-version__group_item']" @click="handleItemChange(item)">
                                <span
                                  :class="[
                                    multiple?'iw-checkbox':'iw-radio',
                                    multiple&&item.selected?'iw-checkbox--checked':'',
                                    !multiple&&item.selected?'iw-radio--checked':''
                                  ]"
                                />
                                <span class="iw-text">
                                  {{ item[optionProps.label] }}
                                </span>
                              </div>
                            </td>
                            <td>{{ item.msrp | toThousand }}</td>
                            <td><span :class="['iw-star', 'iw-star-'+(item.heat+'').replace('.','_')]" /></td>
                            <td>{{ item.dataSource }}</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </iw-scrollbar>
          </template>
          <iw-empty v-else :status="status" style="height:160px;" />
        </div>
      </div>
      <!-- 底部 -->
      <div v-if="data.length" class="iw-version__footer">
        <span
          v-if="showCheckAll&&multiple&&datas.length"
          class="iw-version__footer-checkall"
          @click="handleCheckAllChange(datas, !isCheckAllChecked(datas))">
          <span
            :class="[
              'iw-checkbox',
              data.length&&isCheckAllChecked(datas)?'iw-checkbox--checked':'',
              data.length&&isCheckAllIndeterminate(datas)?'iw-checkbox--indeterminate':''
            ]"
          />
          <span>{{ t('iw.common.checkAll') }}</span>
        </span>
        <iw-button :size="iwSize" @click="reset()">
          {{ t('iw.common.reset') }}
        </iw-button>
        <iw-button :size="iwSize" type="primary" @click="submit(false)">
          {{ t('iw.common.confirm') }}
        </iw-button>
      </div>
    </div>
  </iw-popover>
</template>
<script>
import { chunk, getTree, arr2table, findInArray, deepClone, substr } from '@iways-ui/src/utils/util'
import Locale from '@iways-ui/src/mixins/locale'
export default {
  name: 'IwVersion',
  mixins: [Locale],
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
    showModel: {
      // 显示车型列
      type: Boolean,
      default: true
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
    triggerText: {
      type: [String, Boolean],
      default() {
        return false
      }
    },
    placeholder: {
      type: String,
      default: ''
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
      default: ''
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
      referenceWidth: null,
      datas: [], // 数据源
      selectOnLeaf: true,
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
        value: this.optionProps.label,
        selected: this.selectTexts && this.selectTexts.length ? this.selectTexts : this.selectValues,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: true,
        disabledSelect: this.disabledSelect || []
      })

      if (!this.multiple) {
        const selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(item => item.selected === true)
        if (selectTexts.length) {
          this.selectTexts = selectTexts
          this.selectValues = selectTexts.map(item => item[this.optionProps.value])
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1)
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        const selectTexts = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf).filter(item => item.selected === true)
        selectTexts.forEach(item => {
          const key = this.optionProps.value
          const value = this.optionProps.label
          const index = this.selectTextsTag.findIndex(row => { return row[key] === item[key] && row[value] === item[value] })
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
    initStatus() {
      if (this.selectValues.length) {
        const key = this.multiple ? this.selectValues[0] : this.selectValues[1]
        this.$nextTick(() => {
          this.scrollTop(key, 'SUBMODEL')
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
        this.error = this.t('iw.common.placeholder')
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
     * Table中选项的换行
     */
    chunk() { return chunk(...arguments) },
    /**
     * 快速定位
     */
    handleTrackChange(value) {
      this.scrollTop(value)
    },
    scrollTop(key, target = 'SUBMODEL', delay = 0) {
      this.selectedKey = key
      const obj = document.querySelector('#iw-version__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]')
      if (obj) {
        const scrollTop = parseInt(obj['offsetTop'])
        document.querySelector('#iw-version__popover--' + this.id + ' .iw-version__wrap').scrollTop = scrollTop
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
      this.selectValues = this.selectTextsTag.map(child => { return child[this.optionProps.value] })
    },
    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange(item, selected, go = true) {
      // if (!this.multiple && item.level !== 2) return
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected
        this.$set(item, 'selected', selected)
        if (this.selectOnLeaf) {
          // 子节点选择
          item[this.optionProps.children] && item[this.optionProps.children].forEach(row => {
            this.handleItemChange(row, selected, false)
          })
          // 父级节点选择
          if (go) {
            this.handleParentChange(item)
            this.handleMultipleChange(item)
          }
        }
      } else {
        if (this.selectTexts && this.selectTexts[item.level]) {
          this.$set(this.selectTexts[item.level], 'selected', false)
        }
        this.$set(item, 'selected', true)
        if (go) {
          this.selectValues = []
          this.selectTexts = []
        }
        this.$set(this.selectValues, item.level, item[this.optionProps.value])
        this.$set(this.selectTexts, item.level, item)
        if (item.parent) {
          this.handleItemChange(item.parent, true, false)
        }
        this.selectTextsTag = this.selectTexts.length === 0 ? [] : this.selectTexts.slice(-1)
      }
    },
    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange(item) {
      if (item.parent) {
        const parent = findInArray(this.optionProps.value, item.parent[this.optionProps.value], this.datas, this.optionProps.children, item.parent.level)
        if (parent) {
          parent.selected = parent.children.length === parent.children.filter(item => item.selected === true).length
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent)
        }
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
              return child[this.optionProps.value] === item[this.optionProps.value] && child[this.optionProps.label] === item[this.optionProps.label]
            })
            if (index === -1) this.selectTextsTag.push(item)
            else this.selectTextsTag[index] = item
          })
        } else {
          unselectTexts.forEach(item => {
            const index = this.selectTextsTag.findIndex((child, key) => {
              return child[this.optionProps.value] === item[this.optionProps.value] && child[this.optionProps.label] === item[this.optionProps.label]
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
    isCheckAllIndeterminate(datas) {
      const count = this.datas.filter(group => {
        return group.selected === true
      }).length
      return this.datas.length !== count && count > 0
    },
    /**
     * 是否已选
     */
    isItemChecked(data) {
      const _selected = data[this.optionProps.children].filter(item => item.selected === true)
      const _children = data[this.optionProps.children]
      data.selected = _selected.length === _children.length
      return data.selected
    },
    /**
     * 是否半选
     */
    isItemIndeterminate(data) {
      const _selected = data[this.optionProps.children].filter(item => item.selected === true)
      const _children = data[this.optionProps.children]
      return _selected.length > 0 && _children.length > _selected.length
    },
    substr(str, len) {
      return substr(str, len)
    }
  }
}
</script>
