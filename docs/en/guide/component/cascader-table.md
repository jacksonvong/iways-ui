---
title: submodel
pageClass: custom-page-class
---

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="iw-description-title">
      单选
    </header>
    <p class="iw-description-text">
      multiple，默认为false
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <CascaderTable-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader-table
          v-model="value"
          :data="data"
          :texts="texts"
          :show-search="true"
          :leafsPerColumn="5"
          :column-name="columnName"
          show-selected
          title="政策类型"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-policy'
    export default {
      name: '',
      data() {
        return {
          value: [],
          texts: [],
          columnName: ['类别', '类型', '标签'],
          data: [],
        }
      },
      mounted() {
        this.data = data
      },
      methods: {
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        }
      }
    }
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="iw-description-title">
      叶节点单选
    </header>
    <p class="iw-description-text">
      selectOnLeaf：只选叶节点，默认为false，每级均可选，当设置为true是，只选叶节点
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <CascaderTable-demo2/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">selectOnLeaf</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader-table
          v-model="value"
          :data="data"
          :texts="texts"
          :show-search="true"
          :leafsPerColumn="5"
          :column-name="columnName"
          selectOnLeaf
          show-selected
          title="政策类型"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-policy'
    export default {
      name: '',
      data() {
        return {
          value: [],
          texts: [],
          columnName: ['类别', '类型', '标签'],
          data: [],
        }
      },
      mounted() {
        this.data = data
      },
      methods: {
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        }
      }
    }
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="iw-description-title">
      多选
    </header>
    <p class="iw-description-text">
      multiple设置为true，适用性较广的基础多选，已选项超过1个，用"已选(N)"代替
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <CascaderTable-demo3/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader-table
          v-model="value"
          :data="data"
          :texts="texts"
          :show-search="true"
          :leafsPerColumn="5"
          :column-name="columnName"
          show-selected
          multiple
          title="政策类型"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-policy'
    export default {
      name: '',
      data() {
        return {
          value: [],
          texts: [],
          columnName: ['类别', '类型', '标签'],
          data: [],
        }
      },
      mounted() {
        this.data = data
      },
      methods: {
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        }
      }
    }
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="iw-description-title">
      级联多选 
    </header>
    <p class="iw-description-text">
      selectOnLeaf，默认为false，当设置为true，只选叶节点，则父节点用来全选子节点，父子节点互相影响，当设置为false，每级均可选，则父子节点互不影响
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <CascaderTable-demo4/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">selectOnLeaf</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true(级联)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader-table
          v-model="value"
          :data="data"
          :texts="texts"
          :show-search="true"
          :leafsPerColumn="5"
          :column-name="columnName"
          selectOnLeaf
          show-selected
          multiple
          title="政策类型"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-policy'
    export default {
      name: '',
      data() {
        return {
          value: [],
          texts: [],
          columnName: ['类别', '类型', '标签'],
          data: [],
        }
      },
      mounted() {
        this.data = data
      },
      methods: {
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        }
      }
    }
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="iw-description-title">
      互斥多选
    </header>
    <p class="iw-description-text">
      exclusion，默认是false，当设置为true时，父子关系的项将互斥选中
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <CascaderTable-demo5/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">exclusion</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true(互斥)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader-table
          v-model="value"
          :data="data"
          :texts="texts"
          :show-search="true"
          :leafsPerColumn="5"
          :column-name="columnName"
          show-selected
          multiple
          exclusion
          title="政策类型"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-policy'
    export default {
      name: '',
      data() {
        return {
          value: [],
          texts: [],
          columnName: ['类别', '类型', '标签'],
          data: [],
        }
      },
      mounted() {
        this.data = data
      },
      methods: {
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        }
      }
    }
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="iw-description-title">
      isModal
    </header>
    <p class="iw-description-text">
      isModal，默认是false，设置为true时，以模态窗口方式展示
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <CascaderTable-demo6/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">isModal</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader-table
          v-model="value"
          :data="data"
          :texts="texts"
          :show-search="true"
          :leafsPerColumn="5"
          :column-name="columnName"
          selectOnLeaf
          show-selected
          show-check-all
          multiple
          is-modal
          title="政策类型"
          size="mini"
          placement="bottomLeft"
          style="width: 120px;"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-policy'
    export default {
      name: '',
      data() {
        return {
          value: [],
          texts: [],
          columnName: ['类别', '类型', '标签'],
          data: [],
        }
      },
      mounted() {
        this.data = data
      },
      methods: {
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        }
      }
    }
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="iw-description-title">
      leafsPerColumn
    </header>
    <p class="iw-description-text">
      leafsPerColumn，默认是5，可选范围[2,3,4,5]
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <CascaderTable-demo7/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">leafsPerColumn</span>属性值:<span class="iw-paraStyle">[2,3,4,5]</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader-table
          v-model="value"
          :data="data"
          :texts="texts"
          :show-search="true"
          :leafsPerColumn="2"
          :column-name="columnName"
          select-on-leaf
          show-check-all
          multiple
          title="政策类型"
          size="mini"
          placement="bottomLeft"
          style="width: 120px;"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-mechanism'
    export default {
      name: '',
      data() {
        return {
          value: [],
          texts: [],
          columnName: ['类别', '类型', '标签'],
          data: [],
        }
      },
      mounted() {
        this.data = data
      },
      methods: {
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        }
      }
    }
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

#### Attributes
<ClientOnly>
<Common-create-form>
  <thead slot="form-header" class="formHead">
      <tr class="formHeadRow">
          <th class="formHeadCol">参数</th>
          <th class="formHeadCol">说明</th>
          <th class="formHeadCol">类型</th>
          <th class="formHeadCol">可选值</th>
          <th class="formHeadCol">默认值</th>
      </tr>
  </thead>
  <tbody slot="form-body" class="formBody">
      <tr class="formBodyRow">
          <td class="formBodyCol">data</td>
          <td class="formBodyCol">主体数据</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">value / v-model</td>
          <td class="formBodyCol">绑定值</td>
          <td class="formBodyCol">array / string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">defaultValue</td>
          <td class="formBodyCol">默认值</td>
          <td class="formBodyCol">array / string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">texts</td>
          <td class="formBodyCol">绑定项</td>
          <td class="formBodyCol">array / string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">defaultTexts</td>
          <td class="formBodyCol">默认项</td>
          <td class="formBodyCol">array / string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">title</td>
          <td class="formBodyCol">标题</td>
          <td class="formBodyCol">boolean / string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">multiple</td>
          <td class="formBodyCol">是否多选</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">disabled</td>
          <td class="formBodyCol">是否禁用状态</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">disabledSelect</td>
          <td class="formBodyCol">不可选项</td>
          <td class="formBodyCol">array</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">leafsPerColumn</td>
          <td class="formBodyCol">每列叶子节点个数</td>
          <td class="formBodyCol">Number</td>
          <td class="formBodyCol">[2,3,4,5]</td>
          <td class="formBodyCol">6</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">columnName</td>
          <td class="formBodyCol">列名</td>
          <td class="formBodyCol">Array</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">selectOnLeaf</td>
          <td class="formBodyCol">只选叶子节点</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">showSearch</td>
          <td class="formBodyCol">显示搜索框</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">showSelected</td>
          <td class="formBodyCol">显示已选</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">showCheckAll</td>
          <td class="formBodyCol">显示全选</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">exclusion</td>
          <td class="formBodyCol">子父互斥</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">appendPKey</td>
          <td class="formBodyCol">追加父级key</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">isModal</td>
          <td class="formBodyCol">是否以模态窗口展示</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">loading</td>
          <td class="formBodyCol">加载过程</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">status</td>
          <td class="formBodyCol">状态</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">size</td>
          <td class="formBodyCol">尺寸</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">mini / small / medium / default</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">height</td>
          <td class="formBodyCol">高度</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">320</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">min</td>
          <td class="formBodyCol">可选最小个数</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">max</td>
          <td class="formBodyCol">可选最大个数</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">require</td>
          <td class="formBodyCol">是否必选</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">placeholder</td>
          <td class="formBodyCol">空白填充</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">optionProps</td>
          <td class="formBodyCol">选项配置</td>
          <td class="formBodyCol">object</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>

#### Slots
<ClientOnly>
<Common-create-form>
  <thead slot="form-header" class="formHead">
      <tr class="formHeadRow">
          <th class="formHeadCol">name</th>
          <th class="formHeadCol">说明</th>
      </tr>
  </thead>
  <tbody slot="form-body" class="formBody">
    <tr class="formBodyRow">
        <td class="formBodyCol">reference</td>
        <td class="formBodyCol">触发</td>
    </tr>
  </tbody>
</Common-create-form>
</ClientOnly>

#### Methods 
<ClientOnly>
<Common-create-form>
  <thead slot="form-header" class="formHead">
      <tr class="formHeadRow">
          <th class="formHeadCol">方法名</th>
          <th class="formHeadCol">说明</th>
          <th class="formHeadCol">参数</th>
      </tr>
  </thead>
  <tbody slot="form-body" class="formBody">
    <tr class="formBodyRow">
        <td class="formBodyCol">change</td>
        <td class="formBodyCol">用户确认选定的值时触发</td>
        <td class="formBodyCol">-</td>
    </tr>
  </tbody>
</Common-create-form>
</ClientOnly>