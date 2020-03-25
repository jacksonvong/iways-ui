---
title: Table
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Table表格
    </header>
    <p class="component-text">
      高级组件。
    </p>
  </div>

  <div slot="description">
    <header class="iw-description-title">
      基础用法
    </header>
    <p class="iw-description-text">
      表格
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Table-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">status</span>属性值:<span class="iw-paraStyle">200</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-table
          :data="tableData"
          style="width: 100%">
          <iw-table-column
            prop="date"
            label="日期"
            width="180">
          </iw-table-column>
          <iw-table-column
            prop="name"
            label="姓名"
            width="180">
          </iw-table-column>
          <iw-table-column
            prop="address"
            label="地址">
          </iw-table-column>
        </iw-table>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
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
      固定列和表头
    </header>
    <p class="iw-description-text">
      横纵内容过多时，可选择固定列和表头。
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Table-demo2/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">status</span>属性值:<span class="iw-paraStyle">200</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <iw-table
        :data="tableData"
        style="width: 100%"
        border
        height="250">
        <iw-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </iw-table-column>
        <iw-table-column
          prop="name"
          label="姓名"
          width="120">
        </iw-table-column>
        <iw-table-column
          prop="province"
          label="省份"
          width="120">
        </iw-table-column>
        <iw-table-column
          prop="city"
          label="市区"
          width="120">
        </iw-table-column>
        <iw-table-column
          prop="address"
          label="地址"
          width="300">
        </iw-table-column>
        <iw-table-column
          prop="zip"
          label="邮编"
          width="120">
        </iw-table-column>
      </iw-table>
    </template>
    <script>
      export default {
        data() {
          return {
            tableData: [{
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-08',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-06',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-07',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }]
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
      树形数据与懒加载
    </header>
    <p class="iw-description-text">
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Table-demo3/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">status</span>属性值:<span class="iw-paraStyle">200</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-table
          :data="tableData"
          style="width: 100%;margin-bottom: 20px;"
          row-key="id"
          border
          default-expand-all
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <iw-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
          </iw-table-column>
          <iw-table-column
            prop="name"
            label="姓名"
            sortable
            width="180">
          </iw-table-column>
          <iw-table-column
            prop="address"
            label="地址">
          </iw-table-column>
        </iw-table>
        <iw-table
          :data="tableData1"
          style="width: 100%"
          row-key="id"
          border
          lazy
          :load="load"
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
          <iw-table-column
            prop="date"
            label="日期"
            width="180">
          </iw-table-column>
          <iw-table-column
            prop="name"
            label="姓名"
            width="180">
          </iw-table-column>
          <iw-table-column
            prop="address"
            label="地址">
          </iw-table-column>
        </iw-table>
      </div>
      </template>
      <script>
        export default {
          data() {
            return {
              tableData: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                children: [{
                    id: 31,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                  }, {
                    id: 32,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }]
              }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }],
              tableData1: [{
                id: 1,
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                id: 2,
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
              }, {
                id: 3,
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄',
                hasChildren: true
              }, {
                id: 4,
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
              }]
            }
          },
          methods: {
            load(tree, treeNode, resolve) {
              setTimeout(() => {
                resolve([
                  {
                    id: 31,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                  }, {
                    id: 32,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                  }
                ])
              }, 1000)
            }
          },
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
          <td class="formBodyCol">keepShow</td>
          <td class="formBodyCol">一直显示</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">false</td>
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
        <td class="formBodyCol">scroll</td>
        <td class="formBodyCol">滚动时触发</td>
        <td class="formBodyCol">-</td>
    </tr>
  </tbody>
</Common-create-form>
</ClientOnly>
