---
title: segment
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Segment细分市场选择
    </header>
    <p class="component-text">
      高级组件，下拉选择细分市场。
    </p>
  </div>

  <div slot="description">
    <header class="iw-description-title">
      基础用法
    </header>
    <p class="iw-description-text">
      适用广泛的基础单选
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Segment-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="false"
          :show-check-all="true"
          :select-on-leaf="false"
          :show-selected="true"
          :column-name="['一级', '二级', '三级', '四级']"
          title="细分市场选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
      import { data } from './data/get-segment'
      export default {
        name: 'Segment',
        data() {
          return {
            value: [],
            texts: [],
            data: []
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
      基础多选
    </header>
    <p class="iw-description-text">
      适用性较广的基础多选，已选项超过1个，用"已选(N)"代替
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Segment-demo2/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="true"
          :show-check-all="true"
          :select-on-leaf="false"
          :show-selected="true"
          :column-name="['一级', '二级', '三级', '四级']"
          title="细分市场选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
      import { data } from './data/get-segment'
      export default {
        name: 'Segment',
        data() {
          return {
            value: [],
            texts: [],
            data: []
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
      适用性较广的基础多选，是否只选叶子节点，如果是，则父节点用来全选子节点，父子节点互相影响，如果否，则父子节点互不影响
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Segment-demo3/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">selectOnLeaf</span>属性值:<span class="iw-paraStyle">false(任意节点)</span>、<span class="iw-paraStyle">true(只选叶节点)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="true"
          :show-check-all="true"
          :select-on-leaf="true"
          :column-name="['一级', '二级', '三级', '四级']"
          title="细分市场选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
      import { data } from './data/get-segment'
      export default {
        name: 'Segment',
        data() {
          return {
            value: [],
            texts: [],
            data: []
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
      是否显示搜索框或者全选
    </header>
    <p class="iw-description-text">
      是否显示搜索框，是否显示全选
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Segment-demo4/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">showSearch</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
        属性:<span class="iw-paraStyle">showCheckAll</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="true"
          :select-on-leaf="true"
          :show-check-all="false"
          :show-search="false"
          :column-name="['一级', '二级', '三级', '四级']"
          title="细分市场选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
    </template>
    <script>
      import { data } from './data/get-segment'
      export default {
        name: 'Segment',
        data() {
          return {
            value: [],
            texts: [],
            data: []
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
      样式控制
    </header>
    <p class="iw-description-text">
      控件大小，高度，宽度
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Segment-demo5/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">size</span>属性值:<span class="iw-paraStyle">default</span>、<span class="iw-paraStyle">medium</span>、<span class="iw-paraStyle">small</span>、<span class="iw-paraStyle">mini</span>
    </p>
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">height</span>属性值:100~320
    </p>
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">width</span>属性值:100~180
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-select
          v-model="size"
          :data="sizes"
          :multiple="false"
          :size="size"
          placement="bottom-start"
          @change="changeSize"
        />
        <iw-input
          v-model="height"
          :size="size"
          style="width:120px;"
          placeholder="高度"
        />
        <iw-input
          v-model="width"
          :size="size"
          style="width:120px;"
          placeholder="宽度"
        />
        <iw-cascader
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="false"
          :column-name="['一级', '二级', '三级', '四级']"
          :size="size"
          title="细分市场选择"
          placement="bottom-start"
          :height="Number(height)"
          :width="Number(width)"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-segment'
    export default {
      name: 'Segment',
      data() {
        return {
          value: [],
          texts: [],
          data: [],
          size: 'mini',
          sizes: [{key: 'default', value: 'default'}, {key: 'medium', value: 'medium'}, {key: 'small', value: 'small'}, {key: 'mini', value: 'mini'}],
          height: 320,
          width: 180
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
        },
        changeSize(value) {
          this.size = value
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
      默认值控制
    </header>
    <p class="iw-description-text">
      控制重置后的默认值，当没设置默认值时，重置为上次确定后的值，当设置默认值时，重置为默认值
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Segment-demo6/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">defaultValue</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader
          v-model="value"
          :default-value="[]"
          :data="data"
          :multiple="true"
          :column-name="['一级', '二级', '三级', '四级']"
          :size="size"
          title="细分市场选择"
          placement="bottom-start"
          height="200"
          @change="handleChange"
        />
    </template>
    <script>
      import { data } from './data/get-segment'
      export default {
        name: 'Segment',
        data() {
          return {
            value: [],
            texts: [],
            data: []
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
      必选和选择范围控制
    </header>
    <p class="iw-description-text">
      控制是否必选，默认是false，控制选择项的个数
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Segment-demo7/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">require</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">min</span>属性值:Number
    </p>
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">max</span>属性值:Number
    </p>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="true"
          :select-on-leaf="false"
          :column-name="['一级', '二级', '三级', '四级']"
          :require="true"
          :min="min"
          :max="max"
          title="细分市场选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-segment'
    export default {
      name: 'Segment',
      data() {
        return {
          value: [],
          texts: [],
          data: [],
          min: 5,
          max: 10
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
    <Segment-demo8/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">isModal</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-cascader
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="true"
          :select-on-leaf="false"
          :column-name="['一级', '二级', '三级', '四级']"
          :require="true"
          :min="min"
          :max="max"
          is-modal
          title="细分市场选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-segment'
    export default {
      name: 'Segment',
      data() {
        return {
          value: [],
          texts: [],
          data: [],
          min: 5,
          max: 10
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
          <td class="formBodyCol">selectOnLeaf</td>
          <td class="formBodyCol">只选叶子节点</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">columnName</td>
          <td class="formBodyCol">列名</td>
          <td class="formBodyCol">Array</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
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
          <td class="formBodyCol">width</td>
          <td class="formBodyCol">宽度</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">180</td>
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
          <td class="formBodyCol">请选择</td>
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