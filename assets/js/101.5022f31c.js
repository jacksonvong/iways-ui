(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{638:function(t,s,a){"use strict";a.r(s);var o=a(0),l=Object(o.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      单选\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      multiple，默认为false\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Cascader-demo1")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("multiple")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("false(单选)")]),t._v("、"),a("span",{staticClass:"iw-paraStyle"},[t._v("true(多选)")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-cascader\n      v-model="value"\n      :data="data"\n      :texts="texts"\n      :show-search="true"\n      :leafsPerColumn="5"\n      :column-name="columnName"\n      show-selected\n      title="政策类型"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 180px;"\n      @change="handleChange"\n    />\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-policy\'\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: [],\n      texts: [],\n      columnName: [\'类别\', \'类型\', \'标签\'],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      叶节点单选\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      selectOnLeaf：只选叶节点，默认为false，每级均可选，当设置为true是，只选叶节点\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Cascader-demo2")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("selectOnLeaf")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("false")]),t._v("、"),a("span",{staticClass:"iw-paraStyle"},[t._v("true")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-cascader\n      v-model="value"\n      :data="data"\n      :texts="texts"\n      :show-search="true"\n      :leafsPerColumn="5"\n      :column-name="columnName"\n      selectOnLeaf\n      show-selected\n      title="政策类型"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 180px;"\n      @change="handleChange"\n    />\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-policy\'\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: [],\n      texts: [],\n      columnName: [\'类别\', \'类型\', \'标签\'],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      多选\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v('\n      multiple设置为true，适用性较广的基础多选，已选项超过1个，用"已选(N)"代替\n    ')])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Cascader-demo3")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("multiple")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("false")]),t._v("、"),a("span",{staticClass:"iw-paraStyle"},[t._v("true")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-cascader\n      v-model="value"\n      :data="data"\n      :texts="texts"\n      :show-search="true"\n      :leafsPerColumn="5"\n      :column-name="columnName"\n      show-selected\n      multiple\n      title="政策类型"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 180px;"\n      @change="handleChange"\n    />\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-policy\'\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: [],\n      texts: [],\n      columnName: [\'类别\', \'类型\', \'标签\'],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      级联多选 \n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      selectOnLeaf，默认为false，当设置为true，只选叶节点，则父节点用来全选子节点，父子节点互相影响，当设置为false，每级均可选，则父子节点互不影响\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Cascader-demo4")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("selectOnLeaf")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("false")]),t._v("、"),a("span",{staticClass:"iw-paraStyle"},[t._v("true(级联)")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-cascader\n      v-model="value"\n      :data="data"\n      :texts="texts"\n      :show-search="true"\n      :leafsPerColumn="5"\n      :column-name="columnName"\n      selectOnLeaf\n      show-selected\n      multiple\n      title="政策类型"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 180px;"\n      @change="handleChange"\n    />\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-policy\'\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: [],\n      texts: [],\n      columnName: [\'类别\', \'类型\', \'标签\'],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      互斥多选\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      exclusion，默认是false，当设置为true时，父子关系的项将互斥选中\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Cascader-demo5")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("exclusion")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("false")]),t._v("、"),a("span",{staticClass:"iw-paraStyle"},[t._v("true(互斥)")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-cascader\n      v-model="value"\n      :data="data"\n      :texts="texts"\n      :show-search="true"\n      :leafsPerColumn="5"\n      :column-name="columnName"\n      show-selected\n      multiple\n      exclusion\n      title="政策类型"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 180px;"\n      @change="handleChange"\n    />\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-policy\'\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: [],\n      texts: [],\n      columnName: [\'类别\', \'类型\', \'标签\'],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),a("ClientOnly",[a("Common-code-format",[a("div",{attrs:{slot:"description"},slot:"description"},[a("header",{staticClass:"iw-description-title"},[t._v("\n      isModal\n    ")]),t._v(" "),a("p",{staticClass:"iw-description-text"},[t._v("\n      isModal，默认是false，设置为true时，以模态窗口方式展示\n    ")])]),t._v(" "),a("div",{staticClass:"iw-show-component",attrs:{slot:"showComponents"},slot:"showComponents"},[a("Cascader-demo6")],1),t._v(" "),a("section",{staticClass:"iw-code-description",attrs:{slot:"paraDescription"},slot:"paraDescription"},[a("p",{staticClass:"iw-paraStyle-wrapper"},[t._v("\n        属性:"),a("span",{staticClass:"iw-paraStyle"},[t._v("isModal")]),t._v("属性值:"),a("span",{staticClass:"iw-paraStyle"},[t._v("false")]),t._v("、"),a("span",{staticClass:"iw-paraStyle"},[t._v("true")])])]),t._v(" "),a("highlight-code",{staticClass:"codeStyle",attrs:{slot:"showCode",lang:"vue"},slot:"showCode"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <iw-cascader\n      v-model="value"\n      :data="data"\n      :texts="texts"\n      :show-search="true"\n      :leafsPerColumn="5"\n      :column-name="columnName"\n      selectOnLeaf\n      show-selected\n      show-check-all\n      multiple\n      is-modal\n      title="政策类型"\n      size="mini"\n      placement="bottomLeft"\n      style="width: 120px;"\n      @change="handleChange"\n    />\n  </div>\n</template>\n<script>\nimport { data } from \'../../data/get-policy\'\nexport default {\n  name: \'\',\n  data() {\n    return {\n      value: [],\n      texts: [],\n      columnName: [\'类别\', \'类型\', \'标签\'],\n      data: [],\n    }\n  },\n  mounted() {\n    this.data = data\n  },\n  methods: {\n    handleChange(value, texts) {\n      console.log(\'value\', value, texts)\n      this.value = value\n      this.texts = texts\n    }\n  }\n}\n<\/script>\n')])])])],1)],1),t._v(" "),t._m(0),t._v(" "),a("ClientOnly",[a("Common-create-form",[a("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[a("tr",{staticClass:"formHeadRow"},[a("th",{staticClass:"formHeadCol"},[t._v("参数")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("类型")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("可选值")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("默认值")])])]),t._v(" "),a("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("data")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("主体数据")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("value / v-model")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("绑定值")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("defaultValue")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("默认值")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("texts")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("绑定项")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("defaultTexts")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("默认项")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("array / string / number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("title")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("标题")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean / string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("multiple")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("是否多选")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("disabled")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("是否禁用状态")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("disabledSelect")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("不可选项")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("array")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("leafsPerColumn")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("每列叶子节点个数")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("Number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("6")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("columnName")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("列名")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("Array")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("selectOnLeaf")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("只选叶子节点")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("showSearch")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("显示搜索框")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("true")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("showSelected")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("显示已选")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("showCheckAll")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("显示全选")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("exclusion")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("子父互斥")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("isModal")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("是否以模态窗口展示")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("loading")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("加载过程")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("status")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("状态")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("size")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("尺寸")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("mini / small / medium / default")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("height")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("高度")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("320")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("min")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("可选最小个数")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("max")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("可选最大个数")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("number")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("require")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("是否必选")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("boolean")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("false")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("placeholder")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("空白填充")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("string")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])]),t._v(" "),a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("optionProps")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("选项配置")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("object")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("—")])])])])],1),t._v(" "),t._m(1),t._v(" "),a("ClientOnly",[a("Common-create-form",[a("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[a("tr",{staticClass:"formHeadRow"},[a("th",{staticClass:"formHeadCol"},[t._v("name")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("说明")])])]),t._v(" "),a("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("reference")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("触发")])])])])],1),t._v(" "),t._m(2),t._v(" "),a("ClientOnly",[a("Common-create-form",[a("thead",{staticClass:"formHead",attrs:{slot:"form-header"},slot:"form-header"},[a("tr",{staticClass:"formHeadRow"},[a("th",{staticClass:"formHeadCol"},[t._v("方法名")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("说明")]),t._v(" "),a("th",{staticClass:"formHeadCol"},[t._v("参数")])])]),t._v(" "),a("tbody",{staticClass:"formBody",attrs:{slot:"form-body"},slot:"form-body"},[a("tr",{staticClass:"formBodyRow"},[a("td",{staticClass:"formBodyCol"},[t._v("change")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("用户确认选定的值时触发")]),t._v(" "),a("td",{staticClass:"formBodyCol"},[t._v("-")])])])])],1)],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"attributes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" Attributes")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"slots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[this._v("#")]),this._v(" Slots")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])}],!1,null,null,null);s.default=l.exports}}]);