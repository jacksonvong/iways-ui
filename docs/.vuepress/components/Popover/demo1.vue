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