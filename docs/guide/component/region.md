---
title: Region
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Region区域选择
    </header>
    <p class="component-text">
      高级组件，下拉选择区域。
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
    <Region-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">selectOnLeaf</span>属性值:<span class="iw-paraStyle">false(每层可选)</span>、<span class="iw-paraStyle">true(只有叶节点可选)</span>, <span class="iw-paraStyle">multiple</span>属性值:<span class="iw-paraStyle">false(单选)</span>、<span class="iw-paraStyle">true(多选)</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-select
          v-model="value2"
          :multiple="false"
          :data="[{key: 0, value: 'false'},{key: 1, value: 'true'}]"
          size="mini"
          @change="handleSelect"
        />
        <iw-cascader
          v-model="value"
          :texts="texts"
          :data="data"
          :multiple="false"
          :show-check-all="true"
          :select-on-leaf="false"
          :show-selected="true"
          :column-name="['国家', '大区', '省份', '城市']"
          :height="260"
          :selectOnLeaf="selectOnLeaf"
          title="区域选择"
          placement="bottom-start"
          size="mini"
          style="width: 160px;"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-region'
    export default {
      name: 'Region',
      data() {
        return {
          value: [],
          texts: [],
          data: [],
          selectOnLeaf: false,
          value2: 0
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
        handleSelect(value) {
          this.selectOnLeaf = !!value
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
    <Region-demo2/>
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
          :loading="loading"
          :status="status"
          :height="260"
          title="区域选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-region'
    export default {
      name: 'Region',
      data() {
        return {
          value: [],
          texts: [],
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
          this.data = data
        }, 5000)
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
    <Region-demo3/>
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
          :column-name="['国家', '大区', '省份', '城市']"
          title="区域选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
      import { data } from './data/get-region'
      export default {
        name: 'Region',
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
    <Region-demo4/>
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
          :column-name="['国家', '大区', '省份', '城市']"
          title="区域选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
    </template>
    <script>
      import { data } from './data/get-region'
      export default {
        name: 'Region',
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
    <Region-demo5/>
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
          :column-name="['国家', '大区', '省份', '城市']"
          :size="size"
          title="区域选择"
          placement="bottom-start"
          :height="Number(height)"
          :width="Number(width)"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-region'
    export default {
      name: 'Region',
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
    <Region-demo6/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">value</span>，当data中所有层级key值是唯一时，不需texts属性
    </p>
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">defaultValue</span>，满足上述条件时，设置defaultValue便可设定默认值
    </p>
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">texts</span>，当data中不同层级存在相同key值时，必须启动texts，用来设置或保存选中项，选中项中包含层级level来区分选中项
    </p>
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">defaultTexts</span>，当data中不同层级存在相同key值时，必须设置defaultTexts才可设定默认值
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
          :column-name="['国家', '大区', '省份', '城市']"
          title="区域选择"
          placement="bottom-start"
          :size="size"
          :height="200"
          @change="handleChange"
        />
        <iw-cascader
          v-model="value2"
          :texts="texts2"
          :default-value="defaultValue2"
          :default-texts="defaultTexts2"
          :data="data"
          :multiple="true"
          :show-check-all="true"
          :select-on-leaf="false"
          :column-name="['国家', '大区', '省份', '城市']"
          title="区域选择"
          placement="bottom-start"
          :size="size"
          :height="200"
          @change="handleChange2"
        />
        <iw-cascader
          v-model="value3"
          :texts="texts3"
          :default-value="defaultValue3"
          :default-texts="defaultTexts3"
          :data="data"
          :multiple="true"
          :column-name="['国家', '大区', '省份', '城市']"
          :size="size"
          title="区域选择"
          placement="bottom-start"
          :height="200"
          @change="handleChange3"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-region'
    export default {
      name: 'Region',
      data() {
        return {
          value: [],
          texts: [],
          value2: [],
          texts2: [],
          value3: [194],
          texts3: [{ key: 194, value: '北京市', level: 3 }],
          data: [],
          size: 'mini',
          defaultValue2: [],
          defaultTexts2: [],
          defaultValue3: [194],
          defaultTexts3: [{ key: 194, value: '北京市', level: 3 }]
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
        handleChange2(value, texts) {
          console.log('value', value, texts)
          this.value2 = value
          this.texts2 = texts
        },
        handleChange3(value, texts) {
          console.log('value', value, texts)
          this.value3 = value
          this.texts3 = texts
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
    <Region-demo7/>
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
          :column-name="['国家', '大区', '省份', '城市']"
          :require="true"
          :min="min"
          :max="max"
          title="区域选择"
          placement="bottom-start"
          size="mini"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import { data } from '../../data/get-region'
    export default {
      name: 'Region',
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
      插槽 filters-select 
    </header>
    <p class="iw-description-text">
      filters-select 插槽表示数据源可以过滤
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Region-demo9/>
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
          :select-on-leaf="true"
          :column-name="['国家', '大区', '省份', '城市']"
          :loading="loading"
          :height="230"
          :size="iwSize"
          show-check-all
          title="区域选择"
          placement="bottom-start"
          @change="handleChange">
          <template slot="filters-select">
            <div class="iw-cascader__filter">
              <iw-select
                v-model="dimenssion"
                :data="types"
                :multiple="false"
                :append-to-body="false"
                :size="iwSize"
                placeholder="维度"
                placement="bottom"
                style="width: 101px;"
                @change="handleTypeChange"
              />
            </div>
          </template>
        </iw-cascader>
      </div>
    </template>
    <script>
    import { data as city } from '../../data/get-region'
    import { data as region } from '../../data/get-region-region'
    import { data as province } from '../../data/get-region-province'
    export default {
      name: 'Region',
      data() {
        return {
          value: [],
          texts: [],
          data: [],
          loading: false,
          dimenssion: 3,
          iwSize: 'mini',
          types: [
            { key: 1, value: '区域'},
            { key: 2, value: '省份'},
            { key: 3, value: '城市'}
          ]
        }
      },
      mounted() {
        this.data = city
      },
      methods: {
        handleChange(value, texts) {
          console.log('value', value, texts)
          this.value = value
          this.texts = texts
        },
        handleTypeChange(value) {
          console.log('value', value)
          this.dimenssion = value
          this.loading = true
          this.value = []
          this.texts = []
          setTimeout(() => {
            if (value === 1) {
              this.data = region
            } else if (value === 2) {
              this.data = province
            } else if (value === 3) {
              this.data = city
            }
            this.loading = false
          }, 500)
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
    <Region-demo8/>
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
          :column-name="['国家', '大区', '省份', '城市']"
          is-modal
          title="区域选择"
          placement="bottom-start"
          size="mediumn"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理区域</iw-button>
        </iw-cascader>
      </div>
    </template>
    <script>
    import { data } from '../../data/get-region'
    export default {
      name: 'Region',
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