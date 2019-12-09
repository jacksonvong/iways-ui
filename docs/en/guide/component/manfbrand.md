---
title: manfbrand
pageClass: custom-page-class
---

<ClientOnly>

<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Manfbrand厂商品牌选择
    </header>
    <p class="component-text">
      高级组件，下拉选择厂商品牌。
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
    <Manfbrand-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>
  
  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-manfbrand
          v-model="value"
          :data="data"
          :default-value="[]"
          :show-check-all="true"
          :show-selected="true"
          :multiple="false"
          title="厂商"
          placement="bottom-start"
          size="mini"
          @tabChange="tabChange"
          @change="handleChange"
        />
      </div>
    </template>

    <script>
    import { data } from '../../data/get-manfbrand'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        tabChange(value, key) {
          this.data = data[key] || []
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
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
    <Manfbrand-demo2/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-manfbrand
          v-model="value"
          :data="data"
          :default-value="[]"
          :show-check-all="true"
          title="厂商"
          multiple
          placement="bottom-start"
          size="small"
          @tabChange="tabChange"
          @change="handleChange"
        />
      </div>
    </template>

    <script>
    import { data } from '../../data/get-manfbrand'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        tabChange(value, key) {
          this.data = data[key] || []
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
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
      多标签单选
    </header>
    <p class="iw-description-text">
      适用广泛的基础单选
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Manfbrand-demo3/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-manfbrand
          v-model="value"
          :texts="texts"
          :data="data"
          :default-value="[]"
          :default-texts="[]"
          :tabs="tabs"
          :selected-tab="selectedTab"
          :value-tab="valueTab"
          :show-check-all="true"
          :show-selected="true"
          :multiple="false"
          title="厂商"
          placement="bottom-start"
          size="mini"
          @tabChange="tabChange"
          @change="handleChange"
        />
      </div>
    </template>

    <script>
    import { data } from '../../data/get-manfbrand'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          tabs: [
            { key: 0, value: '厂商' },
            { key: 1, value: '厂商品牌' },
            { key: 2, value: '品牌' },
            { key: 3, value: '厂商集团' }
          ],
          selectedTab: 0,
          value: [],
          texts: [],
          valueTab: 0,
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        tabChange(value, key) {
          this.selectedTab = value
          this.data = data[key] || []
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.valueTab = this.selectedTab
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
      多标签多选
    </header>
    <p class="iw-description-text">
      适用性较广的基础多选，已选项超过1个，用"已选(N)"代替
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Manfbrand-demo4/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-manfbrand
          v-model="value"
          :texts="texts"
          :data="data"
          :default-value="[]"
          :default-texts="[]"
          :tabs="tabs"
          :selected-tab="selectedTab"
          :value-tab="valueTab"
          :show-check-all="true"
          :show-selected="true"
          :multiple="true"
          title="厂商"
          placement="bottom-start"
          size="mini"
          @tabChange="tabChange"
          @change="handleChange">
        </iw-manfbrand>
        <iw-manfbrand
          v-model="value2"
          :texts="texts2"
          :data="data"
          :default-value="[]"
          :default-texts="[]"
          :tabs="tabs"
          :selected-tab="selectedTab"
          :value-tab="valueTab"
          :show-check-all="true"
          :show-selected="true"
          :multiple="true"
          title="厂商"
          placement="bottom-start"
          size="mini"
          @tabChange="tabChange"
          @change="handleChange2">
          <template slot="filters-select">
            <div class="iw-dropdown-filters-select-item">
              <iw-favorite
                v-model="value3"
                :data="data3"
                :editable="false"
                :type-data="typeData"
                :show-search="true"
                :append-to-body="false"
                :title="false"
                :sub-type="tabs[selectedTab].value"
                type="manfBrand"
                size="mini"
                placement="bottomLeft"
                @change="handleChange3"
              >
              </iw-favorite>
            </div>
          </template>
        </iw-manfbrand>
      </div>
    </template>

    <script>
    import { data } from '../../data/get-manfbrand'
    import { data as data3 } from '../../data/get-favorite-manfbrand'
    import { data as manfbrand } from '../../data/get-manfbrand'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          tabs: [
            { key: 0, value: '生产商' },
            { key: 1, value: '生产品牌' },
            { key: 2, value: '品牌' },
            { key: 3, value: '生产商集团' }
          ],
          selectedTab: 0,
          value: [],
          texts: [],
          value2: [],
          texts2: [],
          value3: '',
          valueTab: 0,
          data: [],
          data3: [],
          typeData: []
        }
      },
      mounted() {
        this.data = data[0]
        if (this.valueTab === 1) {
          this.data3 = data3
          const selected = data3.find(item => item.selected) || {}
          this.value3 = selected.key
          this.value2[1] = (selected.children || []).map(item => item.key)
          this.typeData = manfbrand
        }
      },
      methods: {
        tabChange(value, key) {
          this.selectedTab = value
          this.data = data[key] || []
          if (value === 1) {
            this.data3 = data3
            const selected = data3.find(item => item.selected) || {}
            this.value3 = selected.key
          } else {
            this.data3 = []
            this.value3 = ''
          }
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.valueTab = this.selectedTab
          this.value = value
          this.texts = texts
        },
        handleChange2(value, texts) {
          console.log('value', value, texts)
          this.value2 = value
          this.texts2 = texts
        },
        handleChange3(value, texts) {
          console.log('value', value, texts)
          this.value3 = value
          this.texts3 = texts
          if (texts) {
            this.$set(this.value2, 1, (texts.children || []).map(item => item.key))
            this.$set(this.texts2, 1, (texts.children || []).map(item => item))
          }
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
      leafsPerColumn，默认是7，范围是[5, 6, 7]
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Manfbrand-demo5/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">leafsPerColumn</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-manfbrand
          v-model="value"
          :texts="texts"
          :data="data"
          :default-value="[]"
          :default-texts="[]"
          :tabs="tabs"
          :selected-tab="selectedTab"
          :value-tab="valueTab"
          :show-check-all="true"
          :show-selected="true"
          :leafs-per-column="6"
          :multiple="true"
          title="厂商"
          placement="bottom-start"
          size="mini"
          @tabChange="tabChange"
          @change="handleChange"
        />
      </div>
    </template>

    <script>
    import { data } from '../../data/get-manfbrand'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          tabs: [
            { key: 0, value: '厂商' },
            { key: 1, value: '厂商品牌' },
            { key: 2, value: '品牌' },
            { key: 3, value: '厂商集团' }
          ],
          selectedTab: 0,
          value: [],
          texts: [],
          valueTab: 0,
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        tabChange(value, key) {
          this.selectedTab = value
          this.data = data[key] || []
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.valueTab = this.selectedTab
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
      loadding
    </header>
    <p class="iw-description-text">
      显示加载过程
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Manfbrand-demo6/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">loading</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-manfbrand
          v-model="value"
          :data="data"
          :default-value="[]"
          :show-check-all="true"
          :show-selected="true"
          :multiple="false"
          :loading="loading"
          :status="status"
          title="厂商"
          placement="bottom-start"
          size="mini"
          @tabChange="tabChange"
          @change="handleChange"
        />
        <iw-button size="mini" @click="reset" >重置</iw-button>
      </div>
    </template>

    <script>
    import { data } from '../../data/get-manfbrand'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          data: [],
          loading: false,
          status: 0
        }
      },
      mounted() {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.status = 200
          this.data = data[0]
        }, 5000)
      },
      methods: {
        tabChange(value, key) {
          this.data = data[key] || []
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
        },
        reset() {
          console.log('reset')
          this.value = []
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
    <Manfbrand-demo7/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">isModal</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-manfbrand
          v-model="value"
          :texts="texts"
          :data="data"
          :default-value="[]"
          :default-texts="[]"
          :tabs="tabs"
          :selected-tab="selectedTab"
          :value-tab="valueTab"
          :show-check-all="true"
          :show-selected="true"
          :multiple="true"
          is-modal
          title="厂商"
          placement="bottom-start"
          size="mini"
          @tabChange="tabChange"
          @change="handleChange"
        />
      </div>
    </template>

    <script>
    import { data } from '../../data/get-manfbrand'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          tabs: [
            { key: 0, value: '生产商' },
            { key: 1, value: '生产品牌' },
            { key: 2, value: '品牌' },
            { key: 3, value: '生产商集团' }
          ],
          selectedTab: 0,
          value: [],
          texts: [],
          valueTab: 0,
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        tabChange(value, key) {
          this.selectedTab = value
          this.data = data[key] || []
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.valueTab = this.selectedTab
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
          <td class="formBodyCol">[5, 6, 7]</td>
          <td class="formBodyCol">7</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">selectOnLeaf</td>
          <td class="formBodyCol">只选叶子节点</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">tabs</td>
          <td class="formBodyCol">标签列表</td>
          <td class="formBodyCol">string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">selectedTab</td>
          <td class="formBodyCol">选中标签</td>
          <td class="formBodyCol">string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">valueTab</td>
          <td class="formBodyCol">已选标签</td>
          <td class="formBodyCol">string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">showLetter</td>
          <td class="formBodyCol">快速定位</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
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
    <tr class="formBodyRow">
        <td class="formBodyCol">filters-select</td>
        <td class="formBodyCol">过滤选择</td>
    </tr>
    <tr class="formBodyRow">
        <td class="formBodyCol">desc</td>
        <td class="formBodyCol">描述说明</td>
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
        <td class="formBodyCol">tabChange</td>
        <td class="formBodyCol">用户点击标签切换时触发</td>
        <td class="formBodyCol">-</td>
    </tr>
    <tr class="formBodyRow">
        <td class="formBodyCol">change</td>
        <td class="formBodyCol">用户确认选定的值时触发</td>
        <td class="formBodyCol">-</td>
    </tr>
  </tbody>
</Common-create-form>
</ClientOnly>