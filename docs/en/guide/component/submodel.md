---
title: submodel
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Submodel车型选择
    </header>
    <p class="component-text">
      高级组件，下拉选择车型。
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
    <Submodel-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-submodel
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="false"
          :show-search="true"
          :show-letter="showLetter"
          :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
          :selected-filter="selectedFilter"
          title="车型"
          size="mini"
          placement="bottomLeft"
          style="width: 120px;"
          @filterChange="handleFilterChange"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-submodel'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          texts: [],
          selectedFilter: 1,
          showLetter: false,
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        handleFilterChange(value, key) {
          this.selectedFilter = value
          if (value === 1) {
            this.showLetter = false
            this.data = data[0]
          } else {
            this.showLetter = true
            this.data = data[1]
          }
        },
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
    <Submodel-demo2/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-submodel
          v-model="value"
          :default-value="[]"
          :data="data"
          :show-search="true"
          :show-letter="showLetter"
          :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
          :selected-filter="selectedFilter"
          title="车型"
          size="mini"
          placement="bottomLeft"
          style="width: 120px;"
          @filterChange="handleFilterChange"
          @change="handleChange"
        />
        <iw-submodel
          v-model="value2"
          :default-value="defaultValue2"
          :data="data"
          :show-search="true"
          :show-letter="showLetter"
          :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
          :selected-filter="selectedFilter"
          show-selected
          title="车型"
          size="mini"
          placement="bottomLeft"
          style="width: 120px;"
          @filterChange="handleFilterChange"
          @change="handleChange2"
        />
      </div>
    </template>

    <script>
    import { data } from '../../data/get-submodel'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          value2: [61],
          defaultValue2: [61],
          selectedFilter: 1,
          showLetter: false,
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        handleFilterChange(value, key) {
          this.selectedFilter = value
          if (value === 1) {
            this.showLetter = false
            this.data = data[0]
          } else {
            this.showLetter = true
            this.data = data[1]
          }
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
        },
        handleChange2(value, texts) {
          console.log('value', value, texts)
          this.value2 = value
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
      是否显示全选
    </header>
    <p class="iw-description-text">
      是否显示全选，showCheckAll
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Submodel-demo3/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">showCheckAll</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-submodel
          v-model="value"
          :default-value="[]"
          :data="data"
          :show-search="true"
          :show-letter="showLetter"
          :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
          :selected-filter="selectedFilter"
          :show-check-all="true"
          title="车型"
          size="mini"
          placement="bottomLeft"
          style="width: 120px;"
          @filterChange="handleFilterChange"
          @change="handleChange"
        />
      </div>
    </template>

    <script>
    import { data } from '../../data/get-submodel'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          texts: [],
          selectedFilter: 1,
          showLetter: false,
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        handleFilterChange(value, key) {
          this.selectedFilter = value
          if (value === 1) {
            this.showLetter = false
            this.data = data[0]
          } else {
            this.showLetter = true
            this.data = data[1]
          }
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        }
      }

    }
    </script>

    <style>
    </style>

  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>
  <div slot="description">
    <header class="iw-description-title">
      插槽 filters-select 
    </header>
    <p class="iw-description-text">
      filters-select 插槽表示数据源可以过滤
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Submodel-demo4/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">filters-select</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-submodel
          v-model="value"
          :default-value="[]"
          :data="data"
          :show-search="true"
          :show-letter="showLetter"
          :filters="[{key: 0, value: '细分市场'}, {key: 1, value: '品牌'}]"
          :selected-filter="selectedFilter"
          :loading="loading"
          :status="status"
          title="车型"
          size="mini"
          placement="bottom"
          style="width: 120px;"
          @filterChange="handleFilterChange"
          @change="handleChange"
        >
          <template slot="filters-select">
            <div class="iw-dropdown-filters-select-item">
              <iw-select
                v-model="typeId"
                :data="types"
                :multiple="false"
                :append-to-body="false"
                placeholder="燃料"
                size="mini"
                placement="bottom"
                style="width: 101px;"
                class="iw-dropdown-filter-wrap"
                @change="handleFuelTypeChange"
              />
            </div>
            <div class="iw-dropdown-filters-select-item">
              <iw-select
                v-model="fuelTypeId"
                :data="fuelTypeOptions[typeId]"
                :multiple="false"
                :append-to-body="false"
                :disabled="typeId===''"
                placeholder="燃料类型"
                size="mini"
                placement="bottom"
                style="width: 102px;"
                class="iw-dropdown-filter-wrap"
                @change="handleFuelTypeChange2"
              />
            </div>
          </template>
        </iw-submodel>
        <iw-submodel
          v-model="value2"
          :default-value="[]"
          :data="data"
          :show-search="true"
          :show-letter="showLetter"
          :filters="[{key: 0, value: '细分市场'}, {key: 1, value: '品牌'}]"
          :selected-filter="selectedFilter"
          :loading="loading"
          :status="status"
          show-selected
          title="车型"
          size="mini"
          placement="bottom"
          style="width: 120px;"
          @filterChange="handleFilterChange"
          @change="handleChange2"
        >
          <template slot="filters-select">
            <div class="iw-dropdown-filters-select-item">
              <iw-favorite
                v-model="value3"
                :data="data3"
                :editable="false"
                :type-data="typeData"
                :show-search="true"
                :append-to-body="false"
                type="subModel"
                title="车型"
                size="mini"
                require
                placement="bottomLeft"
                style="width: 120px;"
                @change="handleChange3"
              >
                <span slot="desc" class="iw-favorite__desc">
                  <abbr class="font-blue">■ 国产 </abbr>
                  <abbr class="font-orange">■ 进口</abbr>
                </span>
              </iw-favorite>
            </div>
          </template>
        </iw-submodel>
      </div>
    </template>

    <script>
    import { data } from '../../data/get-submodel'
    import { data as data3 } from '../../data/get-favorite-submodel'
    import { data as submodel } from '../../data/get-submodel'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          value2: [],
          value3: '',
          selectedFilter: 0,
          showLetter: false,
          data: [],
          data3: [],
          typeData: [],

          fuelTypeOptions: {
            0: [
              { key: 3, value: '柴油' },
              { key: 5, value: '汽油' }
            ],
            1: [
              { key: 1, value: '纯电动' },
              { key: 2, value: '插电式混合动力' },
              { key: 7, value: '增程型电动' },
              { key: 8, value: '燃料电池' }
            ]
          },
          fuelTypeId: '',
          types: [
            { key: 0, value: '传统燃油车' },
            { key: 1, value: '新能源车' }
          ],
          typeId: '',
          loading: false,
          status: 0
        }
      },
      mounted() {
        this.data = data[0]
        this.data3 = data3
        const selected = data3.find(item => item.selected) || {}
        this.value2 = (selected.children || []).map(item => item.key)
        this.typeData = submodel
      },
      methods: {
        handleFilterChange(value) {
          this.selectedFilter = value
          if (value === 0) {
            this.showLetter = false
            this.data = data[0]
          } else {
            this.showLetter = true
            this.data = data[1]
          }
        },
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
        },
        handleChange2(value, texts) {
          console.log('value', value, texts)
          this.value2 = value
        },
        handleChange3(value, texts) {
          console.log('value', value, texts)
          this.value3 = value
          this.value2 = (texts.children || []).map(item => item.key)
        },
        handleFuelTypeChange(value) {
          console.log('value', value)
          this.fuelTypeId = ''
          this.loading = true
          setTimeout(() => {
            // ToDo: request
            this.data = data[this.selectedFilter]
            this.loading = false
            this.status = 200
          }, 1000)
        },
        handleFuelTypeChange2(value) {
          console.log('value', value)
          this.loading = true
          setTimeout(() => {
            // ToDo: request
            if (value === 3) {
              this.data = []
            } else {
              this.data = data[this.selectedFilter]
            }
            this.loading = false
            this.status = 200
          }, 1000)
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
      leafsPerColumn，默认是6，范围是[4, 5, 6]
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Submodel-demo5/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">showCheckAll</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-submodel
          v-model="value"
          :default-value="[]"
          :data="data"
          :show-search="true"
          :show-letter="showLetter"
          :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
          :selected-filter="selectedFilter"
          :show-check-all="true"
          :leafs-per-column="5"
          title="车型"
          size="mini"
          placement="bottomLeft"
          style="width: 120px;"
          @filterChange="handleFilterChange"
          @change="handleChange"
        />
      </div>
    </template>

    <script>
    import { data } from '../../data/get-submodel'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          texts: [],
          selectedFilter: 1,
          showLetter: false,
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        handleFilterChange(value, key) {
          this.selectedFilter = value
          if (value === 1) {
            this.showLetter = false
            this.data = data[0]
          } else {
            this.showLetter = true
            this.data = data[1]
          }
        },
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
    <Submodel-demo6/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">isModal</span>属性值:<span class="iw-paraStyle">false</span>、<span class="iw-paraStyle">true</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-submodel
          v-model="value"
          :default-value="[]"
          :data="data"
          :show-search="true"
          :show-letter="showLetter"
          :filters="[{key: 1, value: '细分市场'}, {key: 2, value: '品牌'}]"
          :selected-filter="selectedFilter"
          :show-check-all="true"
          :leafs-per-column="6"
          :is-modal="true"
          title="车型"
          size="mini"
          placement="bottomLeft"
          style="width: 120px;"
          @filterChange="handleFilterChange"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理车型</iw-button>
        </iw-submodel>
      </div>
    </template>

    <script>
    import { data } from '../../data/get-submodel'
    export default {
      name: 'Manfbrand',
      data() {
        return {
          value: [],
          texts: [],
          selectedFilter: 1,
          showLetter: false,
          data: []
        }
      },
      mounted() {
        this.data = data[0]
      },
      methods: {
        handleFilterChange(value, key) {
          this.selectedFilter = value
          if (value === 1) {
            this.showLetter = false
            this.data = data[0]
          } else {
            this.showLetter = true
            this.data = data[1]
          }
        },
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
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">6</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">filters</td>
          <td class="formBodyCol">标签列表</td>
          <td class="formBodyCol">array</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">selectedFilter</td>
          <td class="formBodyCol">选中标签</td>
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
        <td class="formBodyCol">filterChange</td>
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