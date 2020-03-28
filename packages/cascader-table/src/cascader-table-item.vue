<template>
  <div class="iw-cascader-table__group_table">
    <table v-if="level < deep - 1">
      <tr v-for="row in data" :key="row[optionProps.value]">
        <td>
          <div :title="row[optionProps.label]" class="iw-cascader-table__group_item" @click="handleItemChange(row)">
            <span
              v-if="!isHeader"
              :class="[
                multiple?'iw-checkbox':'',
                multiple&&(selectOnLeaf&&isItemIndeterminate(row))?'iw-checkbox--indeterminate':'',
                multiple&&(!selectOnLeaf&&row.selected)||(selectOnLeaf&&isItemChecked(row))?'iw-checkbox--checked':'',
                !multiple&&!selectOnLeaf?'iw-radio':'',
                !multiple&&!selectOnLeaf&&row.selected?'iw-radio--checked':''
              ]"
            />
            <span :class="['iw-text', {'is-header': isHeader}]">{{ row[optionProps.label] }}</span>
          </div>
        </td>
        <td>
          <IwCascaderTableItem
            v-if="row[optionProps.children]"
            :data="row[optionProps.children]"
            :select-on-leaf="selectOnLeaf"
            :leafs-per-column="leafsPerColumn"
            :multiple="multiple"
            :option-props="optionProps"
            :exclusion="exclusion"
            :parent="row"
            :deep="deep"
            :level="level+1"
            :is-header="isHeader"
            @exclusionChange="handleParentExclusionChange"
            @change="handleChange" />
        </td>
      </tr>
    </table>
    <table v-else class="iw-cascader-table__group_table--plain">
      <tr v-for="(row2, key2) in chunk(data, leafsPerColumn)" :key="key2">
        <td v-for="item in row2" :key="item[optionProps.value]" :scroll-key="item[optionProps.value] + '_' + 'KEY'">
          <div :title="item[optionProps.label]" :class="['iw-cascader-table__group_item', 'iw-cascader-table__group_item--'+leafsPerColumn]" @click="handleItemChange(item)">
            <span
              v-if="!isHeader"
              :class="[
                multiple?'iw-checkbox':'iw-radio',
                multiple&&item.selected?'iw-checkbox--checked':'',
                !multiple&&item.selected?'iw-radio--checked':''
              ]"
            />
            <span class="iw-text">{{ item[optionProps.label] }}</span>
          </div>
        </td>
        <td v-for="item in (leafsPerColumn - row2.length)" :key="item">
          <div :class="['iw-cascader-table__group_item', 'iw-cascader-table__group_item--'+leafsPerColumn]" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { chunk, findInArray } from '@iways-ui/src/utils/util'
import IwCascaderTableItem from './cascader-table-item'
export default {
  name: 'IwCascaderTableItem',
  components: {
    IwCascaderTableItem
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    parent: {
      type: Object,
      default() {
        return {}
      }
    },
    multiple: {
      // 是否多选模式
      type: Boolean,
      default: true
    },
    selectOnLeaf: {
      // 当此项为 false 时，每级节点均可选, true 时只有叶节点可选
      type: Boolean,
      default() {
        return true
      }
    },
    exclusion: {
      // 当此项为 true 时，同级节点互斥
      type: Boolean,
      default() {
        return false
      }
    },
    leafsPerColumn: {
      type: Number,
      default: 5,
      validator(value) {
        return [2, 3, 4, 5].includes(value)
      }
    },
    deep: {
      type: Number,
      default: 0
    },
    level: {
      type: Number,
      default: 0
    },
    isHeader: {
      type: Boolean,
      default: false
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
    }
  },
  methods: {
    /**
     * Table中选项的换行
     */
    chunk() { return chunk(...arguments) },
    /**
     * 是否已选
     */
    /**
     * 单/复选方法，设置selected
     * 1.先设置子节点，后设置父节点
     */
    handleItemChange(item, selected, go = true) {
      if (!this.multiple && this.selectOnLeaf && this.level < this.deep - 1) return
      if (this.multiple) {
        selected = selected === undefined ? !item.selected : selected
        this.$set(item, 'selected', selected)
        if (this.selectOnLeaf) {
          item[this.optionProps.children] && item[this.optionProps.children].forEach(row => {
            this.handleItemChange(row, selected, false)
          })
          if (go) {
            this.handleParentChange(item)
          }
        } else if (this.exclusion) {
          this.handleExclusionChange(item, !item.selected)
        }
        if (go) {
          this.$emit('change', item)
        }
      } else {
        this.$emit('change', item)
      }
    },
    handleExclusionChange(item, selected, first = true) {
      // 选中值
      if (!selected) {
        // 清除所有子节点
        item[this.optionProps.children] && item[this.optionProps.children].forEach(row => {
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
          const parent = this.parent
          if (parent) {
            parent.selected = false
          }
          if (parent && parent.parent) {
            this.$emit('exclusionChange', parent, false)
          }
        }
      }
    },
    handleChange(item) {
      this.$emit('change', item)
    },
    /**
     * 复选方法，递归设置父级selected
     */
    handleParentChange(item) {
      if (item.parent) {
        const parent = findInArray(this.optionProps.value, item.parent[this.optionProps.value], this.data, this.optionProps.children, item.parent.level)
        if (parent && parent[this.optionProps.children]) {
          parent.selected = parent[this.optionProps.children].length === parent[this.optionProps.children].filter(item => item.selected === true).length
        }
        if (parent && parent.parent) {
          this.handleParentChange(parent)
        }
      }
    },
    isItemChecked(data) {
      if (!data[this.optionProps.children]) return false
      const _selected = data[this.optionProps.children].filter(item => item.selected === true)
      const _children = data[this.optionProps.children]
      data.selected = _selected.length === _children.length
      return data.selected
    },
    /**
     * 是否半选
     */
    isItemIndeterminate(data) {
      if (!data[this.optionProps.children]) return false
      const _selected = data[this.optionProps.children].filter(item => item.selected === true)
      const _indeterminate = data[this.optionProps.children].filter(item => item.indeterminate === true)
      const _children = data[this.optionProps.children]
      data.indeterminate = (_selected.length > 0 && _children.length > _selected.length) || _indeterminate.length > 0
      return data.indeterminate
    }
  }
}
</script>
