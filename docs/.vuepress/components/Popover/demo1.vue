<template>
  <div>
    <iw-popover
      trigger="click"
      placement="right-start"
      :bodyStyle="{padding: '0 10px'}"
      :offset="{top: -10}" :showArrow="true"
    >
      <div slot="reference">
        <iw-button>button</iw-button>
      </div>
      <div>
        <div>content</div>
        <div>content</div>
        <div>content</div>
        <div>content</div>
        <div>content</div>
        <div>content</div>
      </div>
    </iw-popover>
  </div>
</template>