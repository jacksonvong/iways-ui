---
title: Favorite
pageClass: custom-page-class
---

<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Favorite收藏选择
    </header>
    <p class="component-text">
      高级组件，下拉选择收藏。
    </p>
  </div>

  <div slot="description">
    <header class="iw-description-title">
      车型类型
    </header>
    <p class="iw-description-text">
      类型type为subModel时，表示收藏车型
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Favorite-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">['manfBrand', 'subModel', 'segment']</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-favorite
          v-model="value"
          :data="data"
          :type-data="typeData"
          :show-search="true"
          type="subModel"
          is-modal
          title="车型"
          size="mini"
          require
          placement="bottomLeft"
          @save="handleSave"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理收藏车型</iw-button>
          <span slot="desc" class="iw-favorite__desc">
            <abbr class="font-blue">■ 国产 </abbr>
            <abbr class="font-orange">■ 进口</abbr>
          </span>
        </iw-favorite>
        <iw-favorite
          v-model="value2"
          :data="data"
          :showFolder="false"
          :type-data="typeData"
          :show-search="true"
          :append-to-body="false"
          type="subModel"
          title="车型"
          size="mini"
          require
          placement="bottomLeft"
          style="width: 120px;"
          @save="handleSave"
          @change="handleChange2"
        >
          <span slot="desc" class="iw-favorite__desc">
            <abbr class="font-blue">■ 国产 </abbr>
            <abbr class="font-orange">■ 进口</abbr>
          </span>
        </iw-favorite>
      </div>
    </template>
    <script>
    import { data } from '../../data/get-favorite-submodel'
    import { data as submodel } from '../../data/get-submodel'
    export default {
      name: '',
      data() {
        return {
          value: '',
          value2: '',
          data: [],
          typeData: []
        }
      },
      mounted() {
        this.data = data
        this.typeData = submodel
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
          this.value = value
        },
        handleChange2(value) {
          console.log('value', value)
          this.value2 = value
        },
        handleSave(data) {
          this.data = data
        }
      }
    }
    </script>
    <script>
      export const data = [
        {
          'key': 1009,
          'value': '默认竞争圈',
          'selected': true,
          'disabledChildren': [
            {
              'key': 61,
              'value': 'A1'
            }
          ],
          'children': [
            {
              'key': 431,
              'value': '宝来',
              'remark': '国产'
            },
            {
              'key': 606,
              'value': '卡罗拉',
              'remark': '国产'
            },
            {
              'key': 748,
              'value': '奇骏',
              'remark': '国产'
            },
            {
              'key': 828,
              'value': '速腾',
              'remark': '国产'
            },
            {
              'key': 5431,
              'value': '朗逸Plus',
              'remark': '国产'
            },
            {
              'key': 837,
              'value': '思域',
              'remark': '国产'
            },
            {
              'key': 888,
              'value': '逍客',
              'remark': '国产'
            },
            {
              'key': 903,
              'value': '轩逸经典',
              'remark': '国产'
            },
            {
              'key': 925,
              'value': '英朗',
              'remark': '国产'
            },
            {
              'key': 830,
              'value': '桑塔纳',
              'remark': '国产'
            },
            {
              'key': 1144,
              'value': "CLK级",
              'remark': '进口'
            }
          ]
        }
      ]
    </script>
  </highlight-code>
</Common-code-format>
</ClientOnly>

<ClientOnly>
<Common-code-format>

  <div slot="description">
    <header class="iw-description-title">
      厂商品牌类型
    </header>
    <p class="iw-description-text">
      类型type为manfBrand时，表示收藏厂商品牌
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Favorite-demo2/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">['manfBrand', 'subModel', 'segment']</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-favorite
          v-model="value"
          :data="data"
          :type-data="typeData"
          :show-search="true"
          type="manfBrand"
          is-modal
          title="厂商品牌"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @save="handleSave"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理收藏厂商品牌</iw-button>
        </iw-favorite>
      </div>
    </template>
    <script>
    const data = [
      {
        "key":780,
        "value":"默认竞争圈",
        "selected":1,
        "children":[
          {
              "key":138,
              "value":"一汽丰田-丰田"
          },
          {
              "key":135,
              "value":"一汽-大众-大众"
          },
          {
              "key":115,
              "value":"上汽通用-别克"
          },
          {
              "key":109,
              "value":"上汽大众-大众"
          },
          {
              "key":80,
              "value":"吉利汽车-吉利"
          },
          {
              "key":61,
              "value":"广汽丰田-丰田"
          },
          {
              "key":58,
              "value":"广汽本田-本田"
          },
          {
              "key":41,
              "value":"东风日产"
          },
          {
              "key":35,
              "value":"东风本田-本田"
          },
          {
              "key":8,
              "value":"北京奔驰-奔驰"
          }
        ]
      }
    ]
    import { data as manfbrand } from '../../data/get-manfbrand'
    export default {
      name: '',
      data() {
        return {
          value: '',
          data: [],
          typeData: []
        }
      },
      mounted() {
        this.data = data
        this.typeData = manfbrand[1]
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
          this.value = value
        },
        handleSave(data) {
          this.data = data
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
      细分市场类型
    </header>
    <p class="iw-description-text">
      类型type为segment时，表示收藏细分市场
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Favorite-demo3/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">['manfBrand', 'subModel', 'segment']</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-favorite
          v-model="value"
          :data="data"
          :type-data="typeData"
          :show-search="true"
          type="segment"
          is-modal
          title="细分市场"
          size="mini"
          placement="bottomLeft"
          @save="handleSave"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理收藏细分市场</iw-button>
        </iw-favorite>
        <iw-favorite
          v-model="value"
          :data="data"
          :type-data="typeData"
          :show-search="true"
          type="segment"
          title="细分市场"
          size="mini"
          placement="bottomLeft"
          style="width: 128px;"
          @save="handleSave"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理收藏细分市场</iw-button>
        </iw-favorite>
      </div>
    </template>
    <script>
    import { data } from '../../data/get-favorite-segment'
    import { data as segment } from '../../data/get-segment'
    export default {
      name: '',
      data() {
        return {
          value: '',
          data: [],
          typeData: []
        }
      },
      mounted() {
        this.data = data
        this.typeData = segment
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
          this.value = value
        },
        handleSave(data) {
          this.data = data
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
      生产商类型
    </header>
    <p class="iw-description-text">
      类型type为 manfBrand 时，表示收藏生产商
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Favorite-demo4/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">['manfBrand', 'subModel', 'segment']</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-favorite
          v-model="value"
          :data="data"
          :type-data="typeData"
          :show-search="true"
          type="manfBrand"
          is-modal
          title="生产商"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @save="handleSave"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理收藏生产商</iw-button>
        </iw-favorite>
      </div>
    </template>
    <script>
    import { data as manfbrand } from '../../data/get-manfbrand'
    export default {
      name: '',
      data() {
        return {
          value: '',
          data: [],
          typeData: []
        }
      },
      mounted() {
        this.data = []
        this.typeData = manfbrand[0]
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
          this.value = value
        },
        handleSave(data) {
          this.data = data
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
      品牌类型
    </header>
    <p class="iw-description-text">
      类型type为 manfBrand 时，表示收藏品牌
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Favorite-demo5/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">['manfBrand', 'subModel', 'segment']</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-favorite
          v-model="value"
          :data="data"
          :type-data="typeData"
          :show-search="true"
          type="manfBrand"
          is-modal
          title="品牌"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @save="handleSave"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理收藏品牌</iw-button>
        </iw-favorite>
      </div>
    </template>
    <script>
    import { data as manfbrand } from '../../data/get-manfbrand'
    export default {
      name: '',
      data() {
        return {
          value: '',
          data: [],
          typeData: []
        }
      },
      mounted() {
        this.data = []
        this.typeData = manfbrand[2]
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
          this.value = value
        },
        handleSave(data) {
          this.data = data
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
      生产商集团类型
    </header>
    <p class="iw-description-text">
      类型type为 manfBrand 时，表示收藏生产商集团
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Favorite-demo6/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">['manfBrand', 'subModel', 'segment']</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-favorite
          v-model="value"
          :data="data"
          :type-data="typeData"
          :show-search="true"
          type="manfBrand"
          is-modal
          require
          title="生产商集团"
          size="mini"
          placement="bottomLeft"
          style="width: 180px;"
          @save="handleSave"
          @change="handleChange"
        >
          <iw-button slot="reference" type="primary" size="mini">管理</iw-button>
        </iw-favorite>
      </div>
    </template>
    <script>
    import { data as manfbrand } from '../../data/get-manfbrand'
    export default {
      name: '',
      data() {
        return {
          value: '',
          text: {},
          data: [],
          typeData: []
        }
      },
      mounted() {
        this.data = []
        this.typeData = manfbrand[3]
      },
      methods: {
        handleChange(value, text) {
          console.log('value', value, text)
          this.value = value
          this.text = text
        },
        handleSave(data) {
          this.data = data
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
          <td class="formBodyCol">title</td>
          <td class="formBodyCol">标题</td>
          <td class="formBodyCol">boolean / string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">type</td>
          <td class="formBodyCol">类型</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">manfBrand / subModel / segment</td>
          <td class="formBodyCol">subModel</td>
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