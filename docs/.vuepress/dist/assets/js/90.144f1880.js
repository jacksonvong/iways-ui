(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{608:function(t,s,o){"use strict";o.r(s);var a=o(0),l=Object(a.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"content"},[o("ClientOnly",[o("Common-code-format",[o("div",{staticClass:"component",attrs:{slot:"componentNameTitle"},slot:"componentNameTitle"},[o("header",{staticClass:"component-name"},[t._v("\n      Version型号选择\n    ")]),t._v(" "),o("p",{staticClass:"component-text"},[t._v("\n      高级组件，下拉选择型号。\n    ")])]),t._v(" "),o("div",{attrs:{slot:"description"},slot:"description"},[o("header",{staticClass:"iw-description-title"},[t._v("\n      基础用法\n    ")]),t._v(" "),o("p",{staticClass:"iw-description-text"},[t._v("\n      适用广泛的基础单选\n    ")])]),t._v(" "),o("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[o("Version-demo1")],1),t._v(" "),o("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[o("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),o("span",{staticClass:"iw-paraStyle"},[t._v("multiple")]),t._v("属性值:"),o("span",{staticClass:"iw-paraStyle"},[t._v("false(单选)")]),t._v("、"),o("span",{staticClass:"iw-paraStyle"},[t._v("true(多选)")])])]),t._v(" "),o("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[o("pre",[o("code",[t._v('<template>\n  <div>\n    <iw-version\n      v-model="value"\n      :data="data"\n      :show-search="true"\n      title="型号"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 180px;"\n      @change="handleChange"\n    />\n    <iw-button size="mini" @click="reset" >重置</iw-button>\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-version\'\nexport default {\n  name: \'Manfbrand\',\n  data() {\n    return {\n      value: [],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    },\n    reset() {\n      console.log(\'reset\')\n      this.value = []\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),o("ClientOnly",[o("Common-code-format",[o("div",{attrs:{slot:"description"},slot:"description"},[o("header",{staticClass:"iw-description-title"},[t._v("\n      基础多选\n    ")]),t._v(" "),o("p",{staticClass:"iw-description-text"},[t._v('\n      适用性较广的基础多选，已选项超过1个，用"已选(N)"代替\n    ')])]),t._v(" "),o("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[o("Version-demo2")],1),t._v(" "),o("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[o("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),o("span",{staticClass:"iw-paraStyle"},[t._v("multiple")]),t._v("属性值:"),o("span",{staticClass:"iw-paraStyle"},[t._v("false(单选)")]),t._v("、"),o("span",{staticClass:"iw-paraStyle"},[t._v("true(多选)")])])]),t._v(" "),o("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[o("pre",[o("code",[t._v('<template>\n  <div>\n    <iw-version\n      v-model="value"\n      :data="data"\n      :show-search="true"\n      multiple\n      show-check-all\n      title="型号"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 180px;"\n      @change="handleChange"\n    />\n    <iw-button size="mini" @click="reset" >重置</iw-button>\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-version\'\nexport default {\n  name: \'Manfbrand\',\n  data() {\n    return {\n      value: [],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    },\n    reset() {\n      console.log(\'reset\')\n      this.value = []\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),o("ClientOnly",[o("Common-code-format",[o("div",{attrs:{slot:"description"},slot:"description"},[o("header",{staticClass:"iw-description-title"},[t._v("\n      showModel\n    ")]),t._v(" "),o("p",{staticClass:"iw-description-text"},[t._v("\n      是否显示车型列\n    ")])]),t._v(" "),o("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[o("Version-demo3")],1),t._v(" "),o("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[o("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),o("span",{staticClass:"iw-paraStyle"},[t._v("showModel")]),t._v("属性值:"),o("span",{staticClass:"iw-paraStyle"},[t._v("false(不显示)")]),t._v("、"),o("span",{staticClass:"iw-paraStyle"},[t._v("true(显示)")])])]),t._v(" "),o("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[o("pre",[o("code",[t._v('<template>\n  <div>\n    <iw-version\n      v-model="value"\n      :data="data"\n      :show-search="true"\n      :show-model="false"\n      :height="200"\n      title="型号"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 180px;"\n      @change="handleChange"\n    />\n    <iw-button size="mini" @click="reset" >重置</iw-button>\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-version\'\nexport default {\n  name: \'Manfbrand\',\n  data() {\n    return {\n      value: [],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    },\n    reset() {\n      console.log(\'reset\')\n      this.value = []\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),t._m(0),t._v(" "),o("ClientOnly",[o("Common-create-form",[o("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[o("tr",{staticClass:"formHeadRow"},[o("th",{staticClass:"formHeadCol"},[t._v("参数")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("类型")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("可选值")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("默认值")])])]),t._v(" "),o("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("data")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("主体数据")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("value / v-model")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("绑定值")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("defaultValue")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("默认值")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("texts")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("绑定项")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("defaultTexts")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("默认项")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("title")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("标题")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean / string")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("multiple")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("是否多选")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("disabled")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("是否禁用状态")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("disabledSelect")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("不可选项")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("array")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("showSearch")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("显示搜索框")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("true")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("showModel")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("显示车型")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("true")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("showSelected")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("显示已选")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("showCheckAll")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("显示全选")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("loading")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("加载过程")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("status")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("状态")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("size")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("尺寸")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("mini / small / medium / default")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("height")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("高度")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("320")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("min")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("可选最小个数")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("max")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("可选最大个数")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("require")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("是否必选")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("placeholder")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("空白填充")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("optionProps")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("选项配置")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("object")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("—")])])])])],1),t._v(" "),t._m(1),t._v(" "),o("ClientOnly",[o("Common-create-form",[o("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[o("tr",{staticClass:"formHeadRow"},[o("th",{staticClass:"formHeadCol"},[t._v("name")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("说明")])])]),t._v(" "),o("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("reference")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("触发")])])])])],1),t._v(" "),t._m(2),t._v(" "),o("ClientOnly",[o("Common-create-form",[o("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[o("tr",{staticClass:"formHeadRow"},[o("th",{staticClass:"formHeadCol"},[t._v("方法名")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),o("th",{staticClass:"formHeadCol"},[t._v("参数")])])]),t._v(" "),o("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[o("tr",{staticClass:"formBodyRow"},[o("td",{staticClass:"formBodyCol"},[t._v("change")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("用户确认选定的值时触发")]),t._v(" "),o("td",{staticClass:"formBodyCol"},[t._v("-")])])])])],1)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" Attributes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"slots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[this._v("#")]),this._v(" Slots")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])}],!1,null,null,null);s.default=l.exports}}]);