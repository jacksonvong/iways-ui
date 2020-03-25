---
title: Scrollbar
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Scrollbar滚动条
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
      适用广泛的空值显示
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Scrollbar-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">status</span>属性值:<span class="iw-paraStyle">200</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <iw-scrollbar :wrap-style="'height:'+(height+16)+'px;'" keep-show @scroll="scroll">
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div class="relative">
            <iw-popover placement="top-end" show-arrow :body-style="{padding: '10px'}" content="上左" :append-to-body="false">
              <span slot="reference">上左</span>
            </iw-popover>
          </div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div class="relative">
            <iw-popover placement="bottom-start" show-arrow :body-style="{padding: '10px'}" content="下左" :append-to-body="false">
              <span slot="reference">下左</span>
            </iw-popover>
          </div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
          <div>1234</div>
        </iw-scrollbar>
      </div>
    </template>

    <script>
    export default {
      data() {
        return {
          height: 200
        }
      },
      methods: {
        scroll(value) {
          console.log(value)
        }
      }
    }
    </script>

    <style>
    .relative {
      position: relative;
      cursor: pointer;
    }
    </style>

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