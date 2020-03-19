---
title: Popover
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Popover气泡卡片
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
    <Popover-demo1/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">status</span>属性值:<span class="iw-paraStyle">200</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <template>
      <div>
        <div class="box">
          <div class="top">
            <iw-popover placement="top-start" show-arrow :body-style="{padding: '10px'}" content="上左">
              <iw-button slot="reference">上左</iw-button>
            </iw-popover>
            <iw-popover placement="top" show-arrow :body-style="{padding: '10px'}" content="上左">
              <iw-button slot="reference">上边</iw-button>
            </iw-popover>
            <iw-popover placement="top-end" show-arrow :body-style="{padding: '10px'}" content="上左">
              <iw-button slot="reference">上右</iw-button>
            </iw-popover>
          </div>
          <div class="left">
            <iw-popover placement="left-start" show-arrow :body-style="{padding: '10px'}" content="左上">
              <iw-button slot="reference">左上</iw-button>
            </iw-popover>
            <iw-popover placement="left" show-arrow :body-style="{padding: '10px'}" content="左边">
              <iw-button slot="reference">左边</iw-button>
            </iw-popover>
            <iw-popover placement="left-end" show-arrow :body-style="{padding: '10px'}" content="左下">
              <iw-button slot="reference">左下</iw-button>
            </iw-popover>
          </div>
          <div class="right">
            <iw-popover placement="right-start" show-arrow :body-style="{padding: '10px'}" content="右上">
              <iw-button slot="reference">右上</iw-button>
            </iw-popover>
            <iw-popover placement="right" show-arrow :body-style="{padding: '10px'}" content="右边">
              <iw-button slot="reference">右边</iw-button>
            </iw-popover>
            <iw-popover placement="right-end" show-arrow :body-style="{padding: '10px'}" content="右下">
              <iw-button slot="reference">右下</iw-button>
            </iw-popover>
          </div>
          <div class="bottom">
            <iw-popover placement="bottom-start" show-arrow :body-style="{padding: '10px'}" content="下左">
              <iw-button slot="reference">下左</iw-button>
            </iw-popover>
            <iw-popover placement="bottom" show-arrow :body-style="{padding: '10px'}" content="下边">
              <iw-button slot="reference">下边</iw-button>
            </iw-popover>
            <iw-popover placement="bottom-end" show-arrow :body-style="{padding: '10px'}" content="下右">
              <iw-button slot="reference">下右</iw-button>
            </iw-popover>
          </div>
        </div>
      </div>
    </template>

    <style lang="scss" scoped>
    .box {
      width: 300px;
      .top {
        text-align: center;
      }
      .left {
        float: left;
        width: 60px;
        > div {
          margin-bottom: 4px;
        }
      }
      .right {
        float: right;
        width: 60px;
        > div {
          margin-bottom: 4px;
        }
      }
      .bottom {
        clear: both;
        text-align: center;
      }
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
          <td class="formBodyCol">status</td>
          <td class="formBodyCol">状态</td>
          <td class="formBodyCol">number</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">200</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">size</td>
          <td class="formBodyCol">尺寸</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">mini / small / medium / default</td>
          <td class="formBodyCol">default</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>
