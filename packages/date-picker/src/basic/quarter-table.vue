<template>
  <table class="iw-month-table" @click="handleMonthTableClick" @mousemove="handleMouseMove">
    <tbody>
      <tr v-for="(row, key) in rows" :key="key">
        <td v-for="(cell, key) in row" :class="getCellStyle(cell)" :key="key">
          <div>
            <a class="cell">{{ t('iw.datepicker.quarters.' + quarters[cell.text]) }}</a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script type="text/babel">
import Locale from '@iways-ui/src/mixins/locale'
import { isDate, range, getDayCountOfMonth, nextDate } from '@iways-ui/src/utils/date-util'
import { hasClass } from '@iways-ui/src/utils/dom'
import { arrayFindIndex, coerceTruthyValueToArray, arrayFind } from '@iways-ui/src/utils/util'

const datesInMonth = (year, month) => {
  const numOfDays = getDayCountOfMonth(year, month)
  const firstDay = new Date(year, month, 1)
  return range(numOfDays).map(n => nextDate(firstDay, n))
}

const clearDate = (date) => {
  return new Date(date.getFullYear(), date.getMonth())
}

const getMonthTimestamp = function(time) {
  if (typeof time === 'number' || typeof time === 'string') {
    return clearDate(new Date(time)).getTime()
  } else if (time instanceof Date) {
    return clearDate(time).getTime()
  } else {
    return NaN
  }
}
export default {

  mixins: [Locale],
  props: {
    disabledDate: {
      type: undefined,
      default: null
    },
    value: {
      type: undefined,
      default: null
    },
    selectionMode: {
      type: String,
      default: 'month'
    },
    selectionSide: {
      type: String,
      default: ''
    },
    minDate: {
      type: undefined,
      default: null
    },

    maxDate: {
      type: undefined,
      default: null
    },
    defaultValue: {
      type: Object,
      default() {
        return {}
      },
      validator(val) {
        // null or valid Date Object
        return val === null || isDate(val) || (Array.isArray(val) && val.every(isDate))
      }
    },
    date: {
      type: [Object, Date],
      default() {
        return {}
      }
    },
    rangeState: {
      type: Object,
      default() {
        return {
          endDate: null,
          selecting: false
        }
      }
    }
  },

  data() {
    return {
      quarters: ['Q1', 'Q2', 'Q3', 'Q4'],
      tableRows: [[]],
      lastRow: null,
      lastColumn: null
    }
  },

  computed: {
    rows() {
      // TODO: refactory rows / getCellClasses
      const rows = this.tableRows
      const disabledDate = this.disabledDate
      const selectedDate = []
      const now = getMonthTimestamp(new Date())

      for (let i = 0; i < 1; i++) {
        const row = rows[i]
        for (let j = 0; j < 4; j++) {
          let cell = row[j]
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false }
          }

          cell.type = 'normal'

          const index = i * 4 + j
          const time = new Date(this.date.getFullYear(), index * 3).getTime()
          cell.inRange = time >= getMonthTimestamp(this.minDate) && time <= getMonthTimestamp(this.maxDate)
          cell.start = this.minDate && time === getMonthTimestamp(this.minDate)
          cell.end = this.maxDate && time === getMonthTimestamp(this.maxDate)
          const isToday = time === now

          if (isToday) {
            cell.type = 'today'
          }
          cell.text = index
          const year = this.date.getFullYear()
          const month = cell.text
          const cellDate = new Date(time)
          cell.disabled = typeof disabledDate === 'function' && disabledDate(cellDate)
          if (this.selectionSide === 'left' && this.maxDate && new Date(year, month * 3, 1) > this.maxDate) {
            cell.disabled = true
          }
          if (this.selectionSide === 'right' && this.minDate && new Date(year, month * 3, 1) < this.minDate) {
            cell.disabled = true
          }
          cell.selected = arrayFind(selectedDate, date => date.getTime() === cellDate.getTime())

          this.$set(row, j, cell)
        }
      }
      return rows
    }
  },

  watch: {
    'rangeState.endDate'(newVal) {
      this.markRange(this.minDate, this.maxDate, newVal)
    },

    minDate(newVal, oldVal) {
      if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate)
      }
    },

    maxDate(newVal, oldVal) {
      if (getMonthTimestamp(newVal) !== getMonthTimestamp(oldVal)) {
        this.markRange(this.minDate, this.maxDate)
      }
    }
  },

  methods: {
    cellMatchesDate(cell, date) {
      const value = new Date(date)
      return this.date.getFullYear() === value.getFullYear() && Number(cell.text) === value.getMonth()
    },
    getCellStyle(cell) {
      const style = {}
      const year = this.date.getFullYear()
      const today = new Date()
      const month = cell.text
      const defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : []
      style.disabled = typeof this.disabledDate === 'function'
        ? datesInMonth(year, month).every(this.disabledDate)
        : false
      if (this.selectionSide === 'left' && this.maxDate && new Date(year, month * 3, 1) > this.maxDate) {
        style.disabled = true
      }
      if (this.selectionSide === 'right' && this.minDate && new Date(year, month * 3, 1) < this.minDate) {
        style.disabled = true
      }
      style.current = arrayFindIndex(coerceTruthyValueToArray(this.value), date => date.getFullYear() === year && Math.ceil(date.getMonth() / 3) === month) >= 0
      style.today = today.getFullYear() === year && today.getMonth() === month
      style.default = defaultValue.some(date => this.cellMatchesDate(cell, date))

      if (cell.inRange) {
        style['in-range'] = true
      }
      if (cell.start) {
        style['start-date'] = this.selectionSide === 'left'
      }
      if (cell.end) {
        style['end-date'] = this.selectionSide === 'right'
      }
      return style
    },
    getMonthOfCell(month) {
      const year = this.date.getFullYear()
      return new Date(year, month, 1)
    },
    markRange(minDate, maxDate, endDate) {
      minDate = minDate ? getMonthTimestamp(minDate) : minDate
      maxDate = maxDate ? getMonthTimestamp(maxDate) : maxDate
      endDate = endDate ? getMonthTimestamp(endDate) : endDate
      const rows = this.rows
      for (let i = 0, k = rows.length; i < k; i++) {
        const row = rows[i]
        for (let j = 0, l = row.length; j < l; j++) {
          const cell = row[j]
          const index = i * 4 + j
          const time = new Date(this.date.getFullYear(), index * 3).getTime()

          cell.inRange = (minDate && time >= minDate && time <= (maxDate || endDate)) || (maxDate && time <= maxDate && time >= (minDate || endDate))
          cell.start = (minDate ? time === minDate : this.selectionSide === this.rangeState.selectionSide && time === endDate)
          cell.end = (maxDate ? time === maxDate : this.selectionSide === this.rangeState.selectionSide && time === endDate)
        }
      }
    },
    handleMouseMove(event) {
      if (!this.rangeState.selecting) return

      let target = event.target
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }
      if (target.tagName !== 'TD') return

      const row = target.parentNode.rowIndex
      const column = target.cellIndex
      // can not select disabled date
      if (this.rows[row][column].disabled) return

      // only update rangeState when mouse moves to a new cell
      // this avoids frequent Date object creation and improves performance
      if (row !== this.lastRow || column !== this.lastColumn) {
        this.lastRow = row
        this.lastColumn = column
        this.$emit('changerange', {
          minDate: this.minDate,
          maxDate: this.maxDate,
          rangeState: {
            selecting: true,
            selectionSide: this.selectionSide,
            endDate: this.getMonthOfCell((row * 4 + column) * 3)
          }
        })
      }
    },
    handleMonthTableClick(event) {
      let target = event.target
      if (target.tagName === 'A') {
        target = target.parentNode.parentNode
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode
      }
      if (target.tagName !== 'TD') return
      if (hasClass(target, 'disabled')) return
      const column = target.cellIndex
      const month = column * 3
      const newDate = this.getMonthOfCell(month)
      if (this.selectionMode === 'range') {
        const value = {
          minDate: this.selectionSide === 'left' ? newDate : this.minDate,
          maxDate: this.selectionSide === 'right' ? newDate : this.maxDate
        }
        this.rangeState.selecting = value.minDate === null || value.maxDate === null
        this.$emit('pick', value)
      } else {
        this.$emit('pick', month)
      }
    }
  }
}
</script>
