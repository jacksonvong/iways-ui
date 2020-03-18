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
      :popper-class="'iw-manfbrand iw-manfbrand--'+iwSize + (disabled?' iw-manfbrand--disabled':'')"
      :class="'iw-manfbrand iw-manfbrand--'+iwSize + (disabled?' iw-manfbrand--disabled':'')"
      :disabled="disabled"
      :width="popover==='IwPopover'?null:'820px'"
      :title="popover==='IwPopover'?null:false">
      <div slot="reference" class="iw-manfbrand-reference">
        <slot name="reference">
          <div :class="[{'is-focus': !disabled&&visible, 'is-disabled': disabled}, 'iw-input', 'iw-input--' + iwSize]" :style="referenceWidth?'width:'+referenceWidth+'px':''">
            <div v-if="popover==='IwPopover'" class="iw-input__inner">
              <span v-if="multiple&&checkedOptions[checkedTab]&&checkedOptions[checkedTab].length>0" class="iw-input__value">
                <input v-if="checkedOptions[checkedTab].length>1" :value="t('iw.common.selected')+'(' + checkedOptions[checkedTab].length +')'" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
                <input v-else :value="checkedOptions[checkedTab][0][optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
              </span>
              <span v-else-if="!multiple&&checkedOptions[checkedTab]&&checkedOptions[checkedTab].length" class="iw-input__value">
                <input :value="checkedOptions[checkedTab][checkedOptions.length-1][optionProps.label]" :style="'width:'+(referenceWidth-36)+'px'" :disabled="disabled" unselectable="on" readonly>
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
        </slot>
      </div>
      <div v-if="!disabled" :id="'iw-manfbrand__popover--'+id" :style="{minWidth: '400px', width: '820px'}">
        <!-- 标题区 -->
        <div v-if="title||tabOptions.length" class="iw-manfbrand__title">
          <div v-if="tabOptions&&tabOptions[selectedTab]" class="iw-manfbrand__inner">{{ tabOptions[selectedTab].value }}</div>
          <div v-if="tabOptions&&tabOptions.length&&tabOptions.length>1" class="iw-manfbrand__filter">
            <span v-for="(item, key) in tabOptions" :key="item.key" :class="{on: item.key==selectedTab}" class="iw-manfbrand__filter-item" @click="handleTabChange(item[optionProps.value], key)">{{ item.value }}</span>
          </div>
          <div v-if="showSearch&&data.length" :class="'iw-manfbrand__search--'+iwSize" class="iw-manfbrand__search">
            <iw-input v-model="keyword" :size="iwSize" :placeholder="t('iw.common.search')" style="width: 120px;" prefix-icon="iw-icon-search" @keyup.native="handleSearchChange" />
          </div>
          <div v-if="error" class="iw-manfbrand__error">{{ error }}</div>
          <div class="iw-manfbrand__close" @click="visible = false">
            <i class="iw-icon-close" />
          </div>
        </div>
        <!-- 内容区 -->
        <div v-loading="loading" class="iw-manfbrand__body">
          <template v-if="data&&data.length">
            <div class="iw-manfbrand__track">
              <div :class="'iw-manfbrand__track--'+(showLetter?'plain':'select')">
                <div v-if="showLetter===true">
                  <em
                    v-for="group in datas"
                    :key="group[optionProps.value]"
                    :class="{on:selectedKey==group[optionProps.value]}"
                    @click="handleTrackChange(group[optionProps.value])"
                  >{{ group[optionProps.label] }}</em>
                </div>
                <div v-else-if="showLetter===false">
                  <iw-select
                    v-model="selectedTrack"
                    :data="datas"
                    :multiple="false"
                    :size="iwSize"
                    :placeholder="t('iw.manfbrand.quickppositioning')"
                    placement="bottomLeft"
                    style="width:110px;"
                    @change="handleTrackChange"
                  />
                </div>
              </div>
              <div class="iw-manfbrand__track-filter">
                <slot name="filters-select" />
              </div>
              <slot name="desc" />
            </div>
            <iw-scrollbar :ref="'scrollbarRight__KEY'" :wrap-style="'height:'+(height+16)+'px;'" wrap-class="iw-manfbrand__wrap">
              <div class="iw-manfbrand__group">
                <ul v-for="(group) in datas" :key="group[optionProps.value]">
                  <li :scroll-key="group[optionProps.value] + '_' + 'KEY'" class="iw-manfbrand__group_label">
                    <div :title="group[optionProps.label]" class="iw-manfbrand__group_item" @click="handleItemChange(group)">
                      <span
                        v-if="showLetter===false"
                        :class="[
                          multiple?'iw-checkbox':'',
                          multiple&&group.selected?'iw-checkbox--checked':'',
                        ]"
                      />
                      <span class="iw-text">{{ group[optionProps.label] }}</span>
                    </div>
                  </li>
                  <li class="iw-manfbrand__group_table">
                    <table>
                      <tr v-for="(row, key) in chunk(group[optionProps.children], leafsPerColumn)" :key="key">
                        <td v-for="item in row" :key="key+'_'+item[optionProps.value]">
                          <div :title="item[optionProps.label]" :class="['iw-manfbrand__group_item', 'iw-manfbrand__group_item--'+leafsPerColumn]" @click="handleItemChange(item)">
                            <span
                              :class="[
                                multiple?'iw-checkbox':'iw-radio',
                                multiple&&item.selected?'iw-checkbox--checked':'',
                                !multiple&&item.selected?'iw-radio--checked':''
                              ]"
                            />
                            <span :class="{'font-orange': item.remark=='进口'}" class="iw-text">
                              {{ item[optionProps.label] }}
                            </span>
                          </div>
                        </td>
                        <td v-for="item in (leafsPerColumn - row.length)" :key="key+'__'+item">
                          <div :class="['iw-manfbrand__group_item', 'iw-manfbrand__group_item--'+leafsPerColumn]" />
                        </td>
                      </tr>
                    </table>
                  </li>
                </ul>
              </div>
            </iw-scrollbar>
          </template>
          <iw-empty v-else :status="status" style="height:160px;" />
        </div>
        <!-- 底部 -->
        <div v-if="data.length" class="iw-manfbrand__footer">
          <span v-if="(showSelected||multiple)&&selectTextsTag[selectedTab]&&selectTextsTag[selectedTab].length" class="iw-manfbrand__footer-selected">
            <label>{{ t('iw.common.selected') }}：</label>
            <div>
              <iw-scrollbar :wrap-class="'iw-manfbrand__footer-scroll iw-manfbrand__footer-scroll--'+iwSize">
                <iw-tag
                  v-for="item in selectTextsTag[selectedTab]"
                  :key="item[optionProps.value]"
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
            class="iw-manfbrand__footer-checkall"
            @click="handleCheckAllChange(datas, isCheckAllChecked(datas))">
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
    </component>
  </div>
</template>
<script>
import { chunk, getTree, arr2table, findInArray, deepClone, substr } from '@iways-ui/src/utils/util'
import Locale from '@iways-ui/src/mixins/locale'
export default {
  name: 'IwManfbrand',
  mixins: [Locale],
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
      default: 7,
      validator(value) {
        return [5, 6, 7].includes(value)
      }
    },
    tabs: {
      type: [Array, Boolean],
      default() {
        return false
      }
    },
    selectedTab: {
      type: [Number, String],
      default() {
        return 0
      }
    },
    valueTab: {
      type: [Number, String],
      default() {
        return 0
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
      default: 200
    },
    height: {
      type: [Number, String],
      default: 320
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
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
      tabOptions: [],
      checkedOptions: [], // 已选项(选择框显示)
      checkedTab: this.valueTab,
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
    id() {
      return parseInt(Math.random() * 10000)
    },

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
        // this.scrollToTop()
      }
    }
  },
  mounted() {
    this.popover = this.isModal ? 'IwDialog' : 'IwPopover'
    this.referenceWidth = this.$el.offsetWidth
    if (!this.tabs) {
      this.tabOptions = [{ key: 0, value: this.title }]
    } else {
      this.tabOptions = deepClone(this.tabs)
    }
    this.initValue()
    this.initData()
  },
  methods: {
    initValue(value = this.value, texts = this.texts, reset = false) {
      if (value instanceof Array) {
        this.selectValues = deepClone(value)
      }
      this.tabOptions.forEach((item, key) => {
        value[key] = value[key] || []
        if (texts[key] instanceof Array) {
          this.selectTexts[key] = deepClone(texts[key])
          this.selectTextsTag[key] = deepClone(texts[key])
          if (!reset && this.selectedTab === this.valueTab) this.checkedOptions[key] = deepClone(texts[key])
        } else {
          this.selectTexts[key] = []
          this.selectTextsTag[key] = []
          if (!reset && this.selectedTab === this.valueTab) this.checkedOptions[key] = []
        }
      })
    },
    initData(data = this.data, submit = true) {
      const selectedOptions = this.selectValues[this.selectedTab] || []
      const selected = selectedOptions.length ? (this.multiple ? selectedOptions : [selectedOptions[selectedOptions.length - 1]]) : []
      this.datas = getTree(data, {
        son: this.optionProps.children,
        key: this.optionProps.value,
        selected: selected,
        keyword: (this.keyword || '').trim(),
        multiple: this.multiple,
        leaf: true,
        disabledSelect: this.disabledSelect || []
      })

      if (!this.multiple) {
        const selectTexts = arr2table(this.datas, this.optionProps.children, false).filter(item => item.selected === true)
        if (selectTexts.length) {
          this.selectTexts[this.selectedTab] = selectTexts
          this.selectValues[this.selectedTab] = selectTexts.map(item => item.key)
        }
        // 把selectTexts的最后一个设置为已选项
        this.selectTextsTag[this.selectedTab] = this.selectTexts[this.selectedTab].length === 0 ? [] : this.selectTexts[this.selectedTab].slice(-1)
      } else {
        // 取出数据源已选项selectTexts，重新赋值已选栏的selectTextsTag，实现原型链绑定
        const selectTexts = arr2table(this.datas, this.optionProps.children, this.selectOnLeaf).filter(item => item.selected === true)
        selectTexts.forEach(item => {
          const key = this.optionProps.value
          const index = this.selectTextsTag[this.selectedTab].findIndex(row => { return row[key] === item[key] })
          if (index > -1) {
            this.$set(this.selectTextsTag[this.selectedTab], index, item)
          } else {
            this.selectTextsTag[this.selectedTab].push(item)
          }
        })
      }
      // 未设置属性texts值时，设置已选项
      if (submit && this.selectedTab === this.valueTab) {
        this.checkedTab = this.selectedTab
        this.checkedOptions = deepClone(this.selectTextsTag)
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
        (this.require && this.selectTextsTag[this.selectedTab].length <= 0)
      ) {
        this.error = this.t('iw.common.placeholder')
        return
      }
      if (this.multiple) {
        if (this.selectTextsTag[this.selectedTab] && this.min && this.selectTextsTag[this.selectedTab].length < this.min) {
          this.error = this.t('iw.common.atLeast', { count: this.min })
          return
        }
        if (this.selectTextsTag[this.selectedTab] && this.max && this.selectTextsTag[this.selectedTab].length > this.max) {
          this.error = this.t('iw.common.atMost', { count: this.max })
          return
        }
      }
      this.keyword = ''
      this.error = ''
      if (this.multiple) {
        this.checkedOptions = this.selectTextsTag.every(item => item.length === 0) ? [] : deepClone(this.selectTextsTag)
      } else {
        if (this.selectTextsTag.length === 0) {
          this.checkedOptions = []
        } else {
          this.checkedOptions = deepClone(this.selectTextsTag)
        }
      }
      this.checkedTab = this.selectedTab
      this.$emit('change', this.checkedOptions.map(group => group.map(item => item[this.optionProps.value])), this.checkedOptions)
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
      this.selectLetter(value)
    },
    selectLetter(key, target = 'KEY', delay = 0) {
      this.selectedKey = key
      const obj = document.querySelector('#iw-manfbrand__popover--' + this.id + ' [scroll-key="' + key + '_' + target + '"]')
      if (obj) {
        const scrollTop = parseInt(obj['offsetTop'])
        document.querySelector('#iw-manfbrand__popover--' + this.id + ' .iw-manfbrand__wrap').scrollTop = scrollTop
      }
    },
    scrollToTop() {
      this.selectedKey = undefined
      document.querySelector('#iw-manfbrand__popover--' + this.id + ' .iw-manfbrand__wrap').scrollTop = 0
    },
    /**
     * 回调函数，过滤数据源
     */
    handleTabChange(value, key) {
      this.firstLoad = false
      this.$emit('tabChange', value, key)
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
      this.selectTextsTag[this.selectedTab] = this.selectTextsTag[this.selectedTab].filter(child => child.selected)
      this.selectTexts[this.selectedTab] = this.selectTextsTag[this.selectedTab].filter(child => child.selected)
      this.selectValues[this.selectedTab] = this.selectTextsTag[this.selectedTab].map(child => { return child.key })
    },
    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange(item, selected, up = true) {
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected
        this.$set(item, 'selected', selected)
        if (this.selectOnLeaf) {
          // 子节点选择
          item[this.optionProps.children] && item[this.optionProps.children].forEach(row => {
            this.handleItemChange(row, selected, false)
          })
          // 父级节点选择
          if (up) {
            this.handleParentChange(item)
            this.handleMultipleChange(item)
          }
        }
      } else {
        if (this.selectTexts[this.selectedTab] && this.selectTexts[this.selectedTab][item.level]) {
          this.$set(this.selectTexts[this.selectedTab][item.level], 'selected', false)
        }
        this.$set(item, 'selected', true)
        this.$set(this.selectValues[this.selectedTab], item.level, item[this.optionProps.value])
        this.$set(this.selectTexts[this.selectedTab], item.level, item)
        this.selectTextsTag[this.selectedTab] = this.selectTexts[this.selectedTab].length === 0 ? [] : this.selectTexts[this.selectedTab].slice(-1)
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
        this.selectTextsTag[this.selectedTab] = selectTexts
      } else {
        if (item.selected) {
          selectTexts.forEach(item => {
            const index = this.selectTextsTag[this.selectedTab].findIndex((child, key) => {
              return child.key === item.key
            })
            if (index === -1) this.selectTextsTag[this.selectedTab].push(item)
            else this.selectTextsTag[this.selectedTab][index] = item
          })
        } else {
          unselectTexts.forEach(item => {
            const index = this.selectTextsTag[this.selectedTab].findIndex((child, key) => {
              return child.key === item.key
            })
            if (index !== -1) this.selectTextsTag[this.selectedTab].splice(index, 1)
          })
        }
      }
      this.selectTexts = deepClone(this.selectTextsTag)
      this.selectValues[this.selectedTab] = this.selectTexts[this.selectedTab].map(item => item[this.optionProps.value])
    },
    handleCheckAllChange(datas, checked = false) {
      datas.forEach((group, key) => {
        this.handleItemChange(group, !checked, true)
      })
    },
    isCheckAllChecked(datas) {
      return this.datas.every(group => {
        return group.selected === true
      })
    },
    isCheckAllIndeterminate(datas) {
      const count = this.datas.filter(group => {
        return group.selected === true
      }).length
      return this.datas.length !== count && count > 0
    },
    substr(str, len) {
      return substr(str, len)
    }
  }
}
</script>
