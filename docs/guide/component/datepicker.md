---
title: Datepicker
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      DatePicker日历选择
    </header>
    <p class="component-text">
      高级组件，下拉选择日历。
    </p>
  </div>

  <div slot="description">
    <header class="iw-description-title">
      基础用法
    </header>
    <p class="iw-description-text">
      基础用法
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Datepicker-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">date</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-date-picker
          v-model="value1"
          type="date"
          size="mini"
          style="width: 130px;"
          align="right"
          placeholder="选择日期">
        </iw-date-picker>
      </div>
    </template>
    <script>
    export default {
      name: '',
      data() {
        return {
          value1: '',
          value: []
        }
      },
      mounted() {
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
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
      范围选择
    </header>
    <p class="iw-description-text">
      范围选择
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Datepicker-demo2/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">daterange</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-date-picker
          v-model="value"
          :editable="false"
          format="yyyy/MM/dd"
          value-format="yyyyMMdd"
          type="daterange"
          size="mini"
          style="width: 220px;"
          align="right"
          placeholder="选择日期"
          @change="handleChange">
        </iw-date-picker>
      </div>
    </template>
    <script>
    export default {
      name: '',
      data() {
        return {
          value: []
        }
      },
      mounted() {
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
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
      月份选择
    </header>
    <p class="iw-description-text">
      月份选择
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Datepicker-demo3/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">month</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-date-picker
          v-model="value1"
          :picker-options="pickerOptions"
          type="month"
          size="mini"
          style="width: 130px;"
          align="right"
          placeholder="选择月份"
          @change="handleChange"
        />
      </div>
    </template>
    <script>
    import moment from 'moment'
    export default {
      name: '',
      data() {
        return {
          value1: '',
          value: [],
          dataTime: [
            {
              key: 201910,
              selected: true,
              value: "201910"
            },
            {
              key: 201909,
              value: "201909"
            }
          ]
        }
      },
      computed: {
        pickerOptions() { // 日期选择控制
          const months = this.dataTime.map(item => {
            const date = (new Date(String(item.key).substr(0, 4), String(item.key).substr(4, 2) - 1))
            return [moment(date).valueOf(), moment(date).add(1, 'months').valueOf()]
          })
          return {
            disabledDate(time) {
              return !months.find(item => {
                return item[0] <= time.getTime() && time.getTime() < item[1]
              })
            }
          }
        }
      },
      mounted() {
      },
      methods: {
        handleChange(value) {
          setTimeout(() => {
            console.log('value', value)
          }, 5000)
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
      月份范围选择
    </header>
    <p class="iw-description-text">
      月份范围选择
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Datepicker-demo4/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">monthrange</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-date-picker
          v-model="value"
          :editable="false"
          format="yyyy/MM"
          value-format="yyyyMM"
          type="monthrange"
          size="mini"
          style="width: 180px;"
          align="right"
          placeholder="选择日期"
          @change="handleChange">
        </iw-date-picker>
      </div>
    </template>
    <script>
    export default {
      name: '',
      data() {
        return {
          value: []
        }
      },
      mounted() {
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
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
      年份选择
    </header>
    <p class="iw-description-text">
      年份选择
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Datepicker-demo5/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">year</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-date-picker
          v-model="value"
          :editable="false"
          format="yyyy/MM"
          value-format="yyyyMM"
          type="monthrange"
          size="mini"
          style="width: 180px;"
          align="right"
          placeholder="选择日期"
          @change="handleChange">
        </iw-date-picker>
      </div>
    </template>
    <script>
    export default {
      name: '',
      data() {
        return {
          value: []
        }
      },
      mounted() {
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
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
      周选择
    </header>
    <p class="iw-description-text">
      周选择
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Datepicker-demo6/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">week</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-date-picker
          v-model="value"
          :editable="false"
          type="week"
          size="mini"
          style="width: 120px;"
          align="right"
          placeholder="选择周"
          @change="handleChange">
        </iw-date-picker>
      </div>
    </template>
    <script>
    export default {
      name: '',
      data() {
        return {
          value: []
        }
      },
      mounted() {
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
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
      季度选择
    </header>
    <p class="iw-description-text">
      季度选择
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Datepicker-demo7/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">quarter</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-date-picker
          v-model="value1"
          :picker-options="pickerOptions"
          type="quarter"
          format="yyyy/Q"
          value-format="yyyyQ"
          size="mini"
          style="width: 130px;"
          align="right"
          placeholder="选择季度"
          @change="handleChange">
        </iw-date-picker>
      </div>
    </template>
    <script>
    export default {
      name: '',
      data() {
        return {
          value1: new Date(1522425599000),
          value: []
        }
      },
      computed: {
        pickerOptions() { // 日期选择控制
          const months = [new Date(1483200000000), new Date(1519833600000)].map(item => {
            return item.valueOf()
          })
          return {
            disabledDate(time) {
              console.log(months, time, time.getTime(), months[1] < time.getTime() || time.getTime() < months[0])
              return months[1] < time.getTime() || time.getTime() < months[0]
            }
          }
        }
      },
      mounted() {
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
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
      季度范围选择
    </header>
    <p class="iw-description-text">
      季度范围选择
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Datepicker-demo8/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">quarterrange</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-date-picker
          v-model="value1"
          type="quarterrange"
          value-format="yyyyQ"
          size="mini"
          style="width: 180px;"
          align="right"
          placeholder="选择季度"
          @change="handleChange">
        </iw-date-picker>
      </div>
    </template>
    <script>
    export default {
      name: '',
      data() {
        return {
          value1: ["2019Q2", "2020Q1"]
        }
      },
      mounted() {
      },
      methods: {
        handleChange(value) {
          console.log('value', value)
          this.value = value
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
          <td class="formBodyCol">value / v-model</td>
          <td class="formBodyCol">绑定值</td>
          <td class="formBodyCol">array / string / number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">readonly</td>
          <td class="formBodyCol">完全只读</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">disabled</td>
          <td class="formBodyCol">禁用</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">editable</td>
          <td class="formBodyCol">文本框可输入</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">clearable</td>
          <td class="formBodyCol">是否显示清除按钮</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
      </tr>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">type</td>
          <td class="formBodyCol">显示类型</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">year/month/quarter/ date/dates/week/datetime/ datetimerange/daterange/ monthrange/quarterrange</td>
          <td class="formBodyCol">date</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">format</td>
          <td class="formBodyCol">显示在输入框中的格式</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">yyyy-MM-dd</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">size</td>
          <td class="formBodyCol">尺寸</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">mini / small / medium / default</td>
          <td class="formBodyCol">—</td>
      </tr>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">value-format</td>
          <td class="formBodyCol">可选，绑定值的格式。不指定则绑定值为 Date 对象</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">见日期格式</td>
          <td class="formBodyCol">—</td>
      </tr>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">unlink-panels</td>
          <td class="formBodyCol">在范围选择器里取消两个日期面板之间的联动</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">true</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">placeholder</td>
          <td class="formBodyCol">空白填充</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
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