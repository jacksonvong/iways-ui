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
</script>

<style>
.relative {
  position: relative;
  cursor: pointer;
}
</style>