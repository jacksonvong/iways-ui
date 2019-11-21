<template>
  <div :class="{ 'has-seconds': showSeconds }" class="iw-time-spinner">
    <template v-if="!arrowControl">
      <iw-scrollbar
        ref="hours"
        class="iw-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="iw-time-spinner__list"
        noresize
        tag="ul"
        @mouseenter.native="emitSelectRange('hours')"
        @mousemove.native="adjustCurrentSpinner('hours')">
        <li
          v-for="(disabled, hour) in hoursList"
          :key="hour"
          :class="{ 'active': hour === hours, 'disabled': disabled }"
          class="iw-time-spinner__item"
          @click="handleClick('hours', { value: hour, disabled: disabled })">{{ ('0' + (amPmMode ? (hour % 12 || 12) : hour )).slice(-2) }}{{ amPm(hour) }}</li>
      </iw-scrollbar>
      <iw-scrollbar
        ref="minutes"
        class="iw-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="iw-time-spinner__list"
        noresize
        tag="ul"
        @mouseenter.native="emitSelectRange('minutes')"
        @mousemove.native="adjustCurrentSpinner('minutes')">
        <li
          v-for="(enabled, key) in minutesList"
          :key="key"
          :class="{ 'active': key === minutes, disabled: !enabled }"
          class="iw-time-spinner__item"
          @click="handleClick('minutes', { value: key, disabled: false })">{{ ('0' + key).slice(-2) }}</li>
      </iw-scrollbar>
      <iw-scrollbar
        v-show="showSeconds"
        ref="seconds"
        class="iw-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="iw-time-spinner__list"
        noresize
        tag="ul"
        @mouseenter.native="emitSelectRange('seconds')"
        @mousemove.native="adjustCurrentSpinner('seconds')">
        <li
          v-for="(second, key) in 60"
          :class="{ 'active': key === seconds }"
          :key="key"
          class="iw-time-spinner__item"
          @click="handleClick('seconds', { value: key, disabled: false })">{{ ('0' + key).slice(-2) }}</li>
      </iw-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div
        class="iw-time-spinner__wrapper is-arrow"
        @mouseenter="emitSelectRange('hours')">
        <i v-repeat-click="decrease" class="iw-time-spinner__arrow iw-icon-arrow-up"/>
        <i v-repeat-click="increase" class="iw-time-spinner__arrow iw-icon-arrow-down"/>
        <ul ref="hours" class="iw-time-spinner__list">
          <li
            v-for="(hour, key) in arrowHourList"
            :class="{ 'active': hour === hours, 'disabled': hoursList[hour] }"
            :key="key"
            class="iw-time-spinner__item">{{ hour === undefined ? '' : ('0' + (amPmMode ? (hour % 12 || 12) : hour )).slice(-2) + amPm(hour) }}</li>
        </ul>
      </div>
      <div
        class="iw-time-spinner__wrapper is-arrow"
        @mouseenter="emitSelectRange('minutes')">
        <i v-repeat-click="decrease" class="iw-time-spinner__arrow iw-icon-arrow-up"/>
        <i v-repeat-click="increase" class="iw-time-spinner__arrow iw-icon-arrow-down"/>
        <ul ref="minutes" class="iw-time-spinner__list">
          <li
            v-for="(minute, key) in arrowMinuteList"
            :class="{ 'active': minute === minutes }"
            :key="key"
            class="iw-time-spinner__item">
            {{ minute === undefined ? '' : ('0' + minute).slice(-2) }}
          </li>
        </ul>
      </div>
      <div
        v-if="showSeconds"
        class="iw-time-spinner__wrapper is-arrow"
        @mouseenter="emitSelectRange('seconds')">
        <i v-repeat-click="decrease" class="iw-time-spinner__arrow iw-icon-arrow-up"/>
        <i v-repeat-click="increase" class="iw-time-spinner__arrow iw-icon-arrow-down"/>
        <ul ref="seconds" class="iw-time-spinner__list">
          <li
            v-for="(second, key) in arrowSecondList"
            :class="{ 'active': second === seconds }"
            :key="key"
            class="iw-time-spinner__item">
            {{ second === undefined ? '' : ('0' + second).slice(-2) }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script type="text/babel">
import { getRangeHours, getRangeMinutes, modifyTime } from '@iways-ui/src/utils/date-util'
import IwScrollbar from '@iways-ui/src/packages/scrollbar'
import RepeatClick from '@iways-ui/src/directives/repeat-click'

export default {
  components: { IwScrollbar },

  directives: {
    repeatClick: RepeatClick
  },

  props: {
    date: {
      type: [Object, String, Date],
      default() {
        return ''
      }
    },
    defaultValue: {
      type: [Object, String],
      default() {
        return {}
      }
    }, // reserved for future use
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: {
      type: Boolean,
      default: false
    },
    amPmMode: {
      type: String,
      default: '' // 'a': am/pm; 'A': AM/PM
    }
  },

  data() {
    return {
      selectableRange: [],
      currentScrollbar: null
    }
  },

  computed: {
    hours() {
      return this.date.getHours()
    },
    minutes() {
      return this.date.getMinutes()
    },
    seconds() {
      return this.date.getSeconds()
    },
    hoursList() {
      return getRangeHours(this.selectableRange)
    },
    minutesList() {
      return getRangeMinutes(this.selectableRange, this.hours)
    },
    arrowHourList() {
      const hours = this.hours
      return [
        hours > 0 ? hours - 1 : undefined,
        hours,
        hours < 23 ? hours + 1 : undefined
      ]
    },
    arrowMinuteList() {
      const minutes = this.minutes
      return [
        minutes > 0 ? minutes - 1 : undefined,
        minutes,
        minutes < 59 ? minutes + 1 : undefined
      ]
    },
    arrowSecondList() {
      const seconds = this.seconds
      return [
        seconds > 0 ? seconds - 1 : undefined,
        seconds,
        seconds < 59 ? seconds + 1 : undefined
      ]
    }
  },

  mounted() {
    this.$nextTick(() => {
      !this.arrowControl && this.bindScrollEvent()
    })
  },

  methods: {
    increase() {
      this.scrollDown(1)
    },

    decrease() {
      this.scrollDown(-1)
    },

    modifyDateField(type, value) {
      switch (type) {
        case 'hours': this.$emit('change', modifyTime(this.date, value, this.minutes, this.seconds)); break
        case 'minutes': this.$emit('change', modifyTime(this.date, this.hours, value, this.seconds)); break
        case 'seconds': this.$emit('change', modifyTime(this.date, this.hours, this.minutes, value)); break
      }
    },

    handleClick(type, { value, disabled }) {
      if (!disabled) {
        this.modifyDateField(type, value)
        this.emitSelectRange(type)
        this.adjustSpinner(type, value)
      }
    },

    emitSelectRange(type) {
      if (type === 'hours') {
        this.$emit('select-range', 0, 2)
      } else if (type === 'minutes') {
        this.$emit('select-range', 3, 5)
      } else if (type === 'seconds') {
        this.$emit('select-range', 6, 8)
      }
      this.currentScrollbar = type
    },

    bindScrollEvent() {
      const bindFuntion = (type) => {
        this.$refs[type].wrap.onscroll = (e) => {
          // TODO: scroll is emitted when set scrollTop programatically
          // should find better solutions in the future!
          this.handleScroll(type, e)
        }
      }
      bindFuntion('hours')
      bindFuntion('minutes')
      bindFuntion('seconds')
    },

    handleScroll(type) {
      const value = Math.min(Math.round((this.$refs[type].wrap.scrollTop - (this.scrollBarHeight(type) * 0.5 - 10) / this.typeItemHeight(type) + 3) / this.typeItemHeight(type)), (type === 'hours' ? 23 : 59))
      this.modifyDateField(type, value)
    },

    // NOTE: used by datetime / date-range panel
    //       renamed from adjustScrollTop
    //       should try to refactory it
    adjustSpinners() {
      this.adjustSpinner('hours', this.hours)
      this.adjustSpinner('minutes', this.minutes)
      this.adjustSpinner('seconds', this.seconds)
    },

    adjustCurrentSpinner(type) {
      this.adjustSpinner(type, this[type])
    },

    adjustSpinner(type, value) {
      if (this.arrowControl) return
      const iw = this.$refs[type].wrap
      if (iw) {
        iw.scrollTop = Math.max(0, value * this.typeItemHeight(type))
      }
    },

    scrollDown(step) {
      if (!this.currentScrollbar) {
        this.emitSelectRange('hours')
      }

      const label = this.currentScrollbar
      const hoursList = this.hoursList
      let now = this[label]

      if (this.currentScrollbar === 'hours') {
        let total = Math.abs(step)
        step = step > 0 ? 1 : -1
        let length = hoursList.length
        while (length-- && total) {
          now = (now + step + hoursList.length) % hoursList.length
          if (hoursList[now]) {
            continue
          }
          total--
        }
        if (hoursList[now]) return
      } else {
        now = (now + step + 60) % 60
      }

      this.modifyDateField(label, now)
      this.adjustSpinner(label, now)
    },
    amPm(hour) {
      const shouldShowAmPm = this.amPmMode.toLowerCase() === 'a'
      if (!shouldShowAmPm) return ''
      const isCapital = this.amPmMode === 'A'
      let content = (hour < 12) ? ' am' : ' pm'
      if (isCapital) content = content.toUpperCase()
      return content
    },
    typeItemHeight(type) {
      return this.$refs[type].$el.querySelector('li').offsetHeight
    },
    scrollBarHeight(type) {
      return this.$refs[type].$el.offsetHeight
    }
  }
}
</script>
