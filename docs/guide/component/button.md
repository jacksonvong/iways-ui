---
title: button
pageClass: custom-page-class
---
<ClientOnly>
<Common-code-format>

  <div slot="componentNameTitle" class="component">
    <header class="component-name">
      Button按钮
    </header>
    <p class="component-text">
      基础组件，开发中比较常用的按钮。
    </p>
  </div>

  <div slot="description">
    <header class="iw-description-title">
      基础用法
    </header>
    <p class="iw-description-text">
      按钮类型有：默认按钮、主要按钮、成功按钮、信息按钮、警告按钮、危险按钮。通过设置<span class="add-color">type</span>属性值为<span class="add-color">primary</span>、<span class="add-color">success</span>、<span class="add-color">info</span>、<span class="add-color">warning</span>、<span class="add-color">danger</span>创建不同样式的按钮。
    </p>
  </div>

  <div slot="showComponents" class="iw-show-component">
    <Button-iw-button/>
  </div>

  <section slot="paraDescription" class="iw-code-description">
    <p class="iw-paraStyle-wrapper">
        属性:<span class="iw-paraStyle">type</span>属性值:<span class="iw-paraStyle">primary</span>、<span class="iw-paraStyle">success</span>、<span class="iw-paraStyle">info</span>、<span class="iw-paraStyle">warning</span>、<span class="iw-paraStyle">danger</span>
    </p>
  </section>

  <highlight-code class="codeStyle" slot="showCode" lang="vue">
    <iw-button>默认按钮</iw-button>
    <iw-button type="primary">主要按钮</iw-button>
    <iw-button type="success" size="default">成功按钮</iw-button>
    <iw-button type="info" size="medium">信息按钮</iw-button>
    <iw-button type="warning" size="small">警告按钮</iw-button>
    <iw-button type="danger" size="mini">危险按钮</iw-button>
  </highlight-code>
</Common-code-format>
</ClientOnly>

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
          <td class="formBodyCol">type</td>
          <td class="formBodyCol">类型</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">primary / success / info / warning / danger</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">name</td>
          <td class="formBodyCol">类名</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">按约定取值</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">size</td>
          <td class="formBodyCol">尺寸</td>
          <td class="formBodyCol">string</td>
          <td class="formBodyCol">mini / small / medium / default</td>
          <td class="formBodyCol">—</td>
      </tr>
      <tr class="formBodyRow">
          <td class="formBodyCol">disabled</td>
          <td class="formBodyCol">是否禁用状态</td>
          <td class="formBodyCol">boolean</td>
          <td class="formBodyCol">—</td>
          <td class="formBodyCol">—</td>
      </tr>
  </tbody>
</Common-create-form>
</ClientOnly>
