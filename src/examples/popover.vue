<template>
  <div style="height: 2000px; text-align:center;">
    <iw-popover
      :append-to-body="true"
      placement="left"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <button slot="reference">click left</button>
    </iw-popover>
    <iw-popover
      :append-to-body="true"
      placement="right"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <button slot="reference">click right</button>
    </iw-popover>
    <iw-popover
      :append-to-body="true"
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <button slot="reference">click bottom</button>
    </iw-popover>
    <iw-popover
      :append-to-body="true"
      placement="top"
      title="标题"
      width="200"
      trigger="click"
      size="small"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <button slot="reference">click top</button>
    </iw-popover>
  </div>
</template>

<script>

export default {
  name: 'Index'
}
</script>

<style>
</style>
