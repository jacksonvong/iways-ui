<template>
  <transition name="iw-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      v-show="visible"
      :class="[{
        'has-sidebar': $slots.sidebar || shortcuts
      }, popperClass]"
      class="iw-picker-panel iw-date-range-picker iw-popper">
      <div class="iw-picker-panel__body-wrapper">
        <slot name="sidebar" class="iw-picker-panel__sidebar"/>
        <div v-if="shortcuts" class="iw-picker-panel__sidebar">
          <button
            v-for="(shortcut, key) in shortcuts"
            :key="key"
            type="button"
            class="iw-picker-panel__shortcut"
            @click="handleShortcutClick(shortcut)">{{ shortcut.text }}</button>
        </div>
        <div class="iw-picker-panel__body">
          <div class="iw-picker-panel__content iw-date-range-picker__content is-left">
            <div class="iw-date-range-picker__header">
              <button
                type="button"
                class="iw-picker-panel__icon-btn iw-icon-d-arrow-left"
                @click="leftPrevYear"/>
              <button
                v-if="unlinkPanels"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                type="button"
                class="iw-picker-panel__icon-btn iw-icon-d-arrow-right"
                @click="leftNextYear"/>
              <div>{{ leftLabel }}</div>
            </div>
            <div class="iw-date-range-picker-panel__content">
              <month-table
                :date="leftDate"
                :default-value="defaultValue"
                :min-date="minDate"
                :max-date="maxDate"
                :range-state="rangeState"
                :disabled-date="disabledDate"
                selection-mode="range"
                selection-side="left"
                @changerange="handleChangeRange"
                @pick="handleRangePick"/>
            </div>
          </div>
          <div class="iw-picker-panel__content iw-date-range-picker__content is-right">
            <div class="iw-date-range-picker__header">
              <button
                v-if="unlinkPanels"
                :disabled="!enableYearArrow"
                :class="{ 'is-disabled': !enableYearArrow }"
                type="button"
                class="iw-picker-panel__icon-btn iw-icon-d-arrow-left"
                @click="rightPrevYear"/>
              <button
                type="button"
                class="iw-picker-panel__icon-btn iw-icon-d-arrow-right"
                @click="rightNextYear"/>
              <div>{{ rightLabel }}</div>
            </div>
            <div class="iw-date-range-picker-panel__content">
              <month-table
                :date="rightDate"
                :default-value="defaultValue"
                :min-date="minDate"
                :max-date="maxDate"
                :range-state="rangeState"
                :disabled-date="disabledDate"
                selection-mode="range"
                selection-side="right"
                @changerange="handleChangeRange"
                @pick="handleRangePick"/>
            </div>
          </div>
        </div>
      </div>
      <div class="iw-picker-panel__footer">
        <iw-button
          :size="size"
          type="text"
          class="iw-picker-panel__link-btn"
          @click="handleClear">
          {{ t('iw.datepicker.clear') }}
        </iw-button>
        <iw-button
          :disabled="btnDisabled"
          :size="size"
          type="primary"
          class="iw-picker-panel__link-btn"
          @click="handleConfirm(false)">
          {{ t('iw.datepicker.confirm') }}
        </iw-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
import {
  isDate,
  modifyWithTimeString,
  prevYear,
  nextYear,
  nextMonth
} from '@iways-ui/src/utils/date-util'
import Clickoutside from '@iways-ui/src/utils/clickoutside'
import Locale from '@iways-ui/src/mixins/locale'
import MonthTable from '../basic/month-table'
import IwInput from '@iways-ui/src/packages/input'
import IwButton from '@iways-ui/src/packages/button'

const calcDefaultValue = (defaultValue) => {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])]
  } else if (defaultValue) {
    return [new Date(defaultValue), nextMonth(new Date(defaultValue))]
  } else {
    return [new Date(), nextMonth(new Date())]
  }
}
export default {

  directives: { Clickoutside },

  components: { MonthTable, IwInput, IwButton },
  mixins: [Locale],

  data() {
    return {
      popperClass: '',
      value: [],
      defaultValue: null,
      defaultTime: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: new Date(),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      shortcuts: '',
      visible: '',
      disabledDate: '',
      format: '',
      size: '',
      arrowControl: false,
      unlinkPanels: false
    }
  },

  computed: {
    btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting && this.isValidValue([this.minDate, this.maxDate]))
    },

    leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('iw.datepicker.year')
    },

    rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('iw.datepicker.year')
    },

    leftYear() {
      return this.leftDate.getFullYear()
    },

    rightYear() {
      return this.rightDate.getFullYear() === this.leftDate.getFullYear() ? this.leftDate.getFullYear() : this.rightDate.getFullYear()
    },

    enableYearArrow() {
      return this.unlinkPanels && this.rightYear > this.leftYear
    }
  },

  watch: {
    value(newVal) {
      if (!newVal) {
        this.minDate = null
        this.maxDate = null
      } else if (Array.isArray(newVal)) {
        this.minDate = isDate(newVal[0]) ? new Date(newVal[0]) : null
        this.maxDate = isDate(newVal[1]) ? new Date(newVal[1]) : null
        if (this.minDate) {
          this.leftDate = this.minDate
          if (this.unlinkPanels && this.maxDate) {
            this.rightDate = this.maxDate
          } else {
            this.rightDate = this.leftDate
          }
        } else {
          this.leftDate = calcDefaultValue(this.defaultValue)[0]
          this.rightDate = this.leftDate
        }
      }
    },

    defaultValue(val) {
      if (!Array.isArray(this.value)) {
        const [left, right] = calcDefaultValue(val)
        this.leftDate = left
        this.rightDate = val && val[1] && left.getFullYear() !== right.getFullYear() && this.unlinkPanels
          ? right
          : this.leftDate
      }
    }
  },

  methods: {
    handleClear() {
      this.minDate = null
      this.maxDate = null
      this.leftDate = calcDefaultValue(this.defaultValue)[0]
      this.rightDate = this.leftDate
      this.$emit('pick', null)
    },

    handleChangeRange(val) {
      this.minDate = val.minDate
      this.maxDate = val.maxDate
      this.rangeState = val.rangeState
    },

    handleRangePick(val, close = true) {
      const defaultTime = this.defaultTime || []
      const minDate = modifyWithTimeString(val.minDate, defaultTime[0])
      const maxDate = modifyWithTimeString(val.maxDate, defaultTime[1])
      if (this.maxDate === maxDate && this.minDate === minDate) {
        return
      }
      this.onPick && this.onPick(val)
      this.maxDate = maxDate
      this.minDate = minDate

      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(() => {
        this.maxDate = maxDate
        this.minDate = minDate
      }, 10)
      if (!close) return
    },

    handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this)
      }
    },

    // leftPrev*, rightNext* need to take care of `unlinkPanels`
    leftPrevYear() {
      this.leftDate = prevYear(this.leftDate)
      if (!this.unlinkPanels) {
        this.rightDate = prevYear(this.rightDate)
      }
    },

    rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = nextYear(this.leftDate)
      }
      this.rightDate = nextYear(this.rightDate)
    },

    // leftNext*, rightPrev* are called when `unlinkPanels` is true
    leftNextYear() {
      this.leftDate = nextYear(this.leftDate)
    },

    rightPrevYear() {
      this.rightDate = prevYear(this.rightDate)
    },

    handleConfirm(visible = false) {
      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$emit('pick', [this.minDate, this.maxDate], visible)
      }
    },

    isValidValue(value) {
      return Array.isArray(value) &&
          value && value[0] && value[1] &&
          isDate(value[0]) && isDate(value[1]) &&
          value[0].getTime() <= value[1].getTime() && (
        typeof this.disabledDate === 'function'
          ? !this.disabledDate(value[0]) && !this.disabledDate(value[1])
          : true
      )
    },

    resetView() {
      // NOTE: this is a hack to reset {min, max}Date on picker open.
      // TODO: correct way of doing so is to refactor {min, max}Date to be dependent on value and internal selection state
      //       an alternative would be resetView whenever picker becomes visible, should also investigate date-panel's resetView
      this.minDate = this.value && isDate(this.value[0]) ? new Date(this.value[0]) : null
      this.maxDate = this.value && isDate(this.value[0]) ? new Date(this.value[1]) : null
    }
  }
}
</script>
