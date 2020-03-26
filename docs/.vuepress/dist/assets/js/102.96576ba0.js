(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{634:function(t,s,a){"use strict";a.r(s);var e=a(0),o=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("ClientOnly",[a("Common-code-format",[a("div",{staticClass:"component",attrs:{slot:"componentNameTitle"},slot:"componentNameTitle"},[a("header",{staticClass:"component-name"},[t._v("\n      DatePicker日历选择\n    ")]),t._v(" "),a("p",{staticClass:"component-text"},[t._v("\n      高级组件，下拉选择日历。\n    ")])]),t._v(" "),a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      基础用法\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      基础用法\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Datepicker-demo1")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("type")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("date")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-date-picker\n      v-model="value1"\n      type="date"\n      size="mini"\n      style="width: 130px;"\n      align="right"\n      placeholder="选择日期">\n    </iw-date-picker>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value1: \'\',\n      value: []\n    }\n  },\n  mounted() {\n  },\n  methods: {\n    handleChange(value) {\n      console.log(\'value\', value)\n      this.value = value\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      范围选择\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      范围选择\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Datepicker-demo2")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("type")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("daterange")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-date-picker\n      v-model="value"\n      :editable="false"\n      format="yyyy/MM/dd"\n      value-format="yyyyMMdd"\n      type="daterange"\n      size="mini"\n      style="width: 220px;"\n      align="right"\n      placeholder="选择日期"\n      @change="handleChange">\n    </iw-date-picker>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: []\n    }\n  },\n  mounted() {\n  },\n  methods: {\n    handleChange(value) {\n      console.log(\'value\', value)\n      this.value = value\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      月份选择\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      月份选择\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Datepicker-demo3")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("type")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("month")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-date-picker\n      v-model="value1"\n      :picker-options="pickerOptions"\n      type="month"\n      size="mini"\n      style="width: 130px;"\n      align="right"\n      placeholder="选择月份"\n      @change="handleChange"\n    />\n  </div>\n</template>\n<script>\nimport moment from \'moment\'\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value1: \'\',\n      value: [],\n      dataTime: [\n        {\n          key: 201910,\n          selected: true,\n          value: "201910"\n        },\n        {\n          key: 201909,\n          value: "201909"\n        }\n      ]\n    }\n  },\n  computed: {\n    pickerOptions() { // 日期选择控制\n      const months = this.dataTime.map(item => {\n        const date = (new Date(String(item.key).substr(0, 4), String(item.key).substr(4, 2) - 1))\n        return [moment(date).valueOf(), moment(date).add(1, \'months\').valueOf()]\n      })\n      return {\n        disabledDate(time) {\n          return !months.find(item => {\n            return item[0] <= time.getTime() && time.getTime() < item[1]\n          })\n        }\n      }\n    }\n  },\n  mounted() {\n  },\n  methods: {\n    handleChange(value) {\n      setTimeout(() => {\n        console.log(\'value\', value)\n      }, 5000)\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      月份范围选择\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      月份范围选择\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Datepicker-demo4")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("type")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("monthrange")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-date-picker\n      v-model="value"\n      :editable="false"\n      format="yyyy/MM"\n      value-format="yyyyMM"\n      type="monthrange"\n      size="mini"\n      style="width: 180px;"\n      align="right"\n      placeholder="选择日期"\n      @change="handleChange">\n    </iw-date-picker>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: []\n    }\n  },\n  mounted() {\n  },\n  methods: {\n    handleChange(value) {\n      console.log(\'value\', value)\n      this.value = value\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      年份选择\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      年份选择\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Datepicker-demo5")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("type")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("year")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-date-picker\n      v-model="value"\n      :editable="false"\n      format="yyyy/MM"\n      value-format="yyyyMM"\n      type="monthrange"\n      size="mini"\n      style="width: 180px;"\n      align="right"\n      placeholder="选择日期"\n      @change="handleChange">\n    </iw-date-picker>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: []\n    }\n  },\n  mounted() {\n  },\n  methods: {\n    handleChange(value) {\n      console.log(\'value\', value)\n      this.value = value\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      周选择\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      周选择\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Datepicker-demo6")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("type")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("week")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-date-picker\n      v-model="value"\n      :editable="false"\n      type="week"\n      size="mini"\n      style="width: 120px;"\n      align="right"\n      placeholder="选择周"\n      @change="handleChange">\n    </iw-date-picker>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: []\n    }\n  },\n  mounted() {\n  },\n  methods: {\n    handleChange(value) {\n      console.log(\'value\', value)\n      this.value = value\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      季度选择\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      季度选择\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Datepicker-demo7")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("type")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("quarter")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-date-picker\n      v-model="value1"\n      :picker-options="pickerOptions"\n      type="quarter"\n      format="yyyy/Q"\n      value-format="yyyyQ"\n      size="mini"\n      style="width: 130px;"\n      align="right"\n      placeholder="选择季度"\n      @change="handleChange">\n    </iw-date-picker>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value1: new Date(1522425599000),\n      value: []\n    }\n  },\n  computed: {\n    pickerOptions() { // 日期选择控制\n      const months = [new Date(1483200000000), new Date(1519833600000)].map(item => {\n        return item.valueOf()\n      })\n      return {\n        disabledDate(time) {\n          console.log(months, time, time.getTime(), months[1] < time.getTime() || time.getTime() < months[0])\n          return months[1] < time.getTime() || time.getTime() < months[0]\n        }\n      }\n    }\n  },\n  mounted() {\n  },\n  methods: {\n    handleChange(value) {\n      console.log(\'value\', value)\n      this.value = value\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      季度范围选择\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      季度范围选择\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Datepicker-demo8")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("type")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("quarterrange")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-date-picker\n      v-model="value1"\n      type="quarterrange"\n      value-format="yyyyQ"\n      size="mini"\n      style="width: 180px;"\n      align="right"\n      placeholder="选择季度"\n      @change="handleChange">\n    </iw-date-picker>\n  </div>\n</template>\n<script>\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value1: ["2019Q2", "2020Q1"]\n    }\n  },\n  mounted() {\n  },\n  methods: {\n    handleChange(value) {\n      console.log(\'value\', value)\n      this.value = value\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),t._m(0),t._v(" "),a("ClientOnly",[a("Common-create-form",[a("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[a("tr",{staticClass:"formHeadRow"},[a("th",{staticClass:"formHeadCol"},[t._v("参数")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("类型")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("可选值")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("默认值")])])]),t._v(" "),a("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("value / v-model")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("绑定值")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("readonly")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("完全只读")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("disabled")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("禁用")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("editable")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("文本框可输入")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("true")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("clearable")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("是否显示清除按钮")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("true")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("type")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("显示类型")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("year/month/quarter/ date/dates/week/datetime/ datetimerange/daterange/ monthrange/quarterrange")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("date")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("format")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("显示在输入框中的格式")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("yyyy-MM-dd")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("size")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("尺寸")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("mini / small / medium / default")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("value-format")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("可选，绑定值的格式。不指定则绑定值为 Date 对象")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("见日期格式")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("unlink-panels")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("在范围选择器里取消两个日期面板之间的联动")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("true")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("placeholder")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("空白填充")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])])])])],1),t._v(" "),t._m(1),t._v(" "),a("ClientOnly",[a("Common-create-form",[a("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[a("tr",{staticClass:"formHeadRow"},[a("th",{staticClass:"formHeadCol"},[t._v("方法名")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("参数")])])]),t._v(" "),a("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("change")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("用户确认选定的值时触发")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("-")])])])])],1)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" Attributes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])}],!1,null,null,null);s.default=o.exports}}]);