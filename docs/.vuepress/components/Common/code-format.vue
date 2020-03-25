<template>
  <div class="code-format">
    <div class="iw-all-wrapper">
      <div class="component-wrapper">

        <div class="iw-component-wrapper">
          <slot name="componentNameTitle"></slot>
        </div>

        <div class="iw-description-wrapper">
          <slot name="description"></slot>
        </div>

        <section class="iw-border-wrapper">

          <div class="iw-show-component-wrapper">
            <slot name="showComponents"></slot>
          </div>

          <div v-if="isShow" class="iw-code-description-wrapper">
            <div class="iw-show-code-wrapper">
              <slot name="paraDescription"></slot>
            </div>
            <div class="iw-code-wrapper">
              <slot name="showCode"></slot>
            </div>
          </div>

          <div class="vue-iw-button" @click="handleToggleShow">
            <div class="vue-iw-wrapper">
              <iw-icon class="vue-iw-icon" v-if="!isShow" iw-icon-name="unfold"></iw-icon>
              <iw-icon class="vue-iw-icon" v-if="isShow" iw-icon-name="fold"></iw-icon>
              <span class="vue-iw-buttonText">{{buttonText}}</span>
            </div>
          </div>

        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeFormat',
  data() {
    return {
      isShow: false,
      buttonText: '显示代码',
    }
  },
  methods: {
    handleToggleShow() {
      // console.log(!(this.$slots.codeText))
      this.isShow = !this.isShow
      this.buttonText = this.isShow ? '隐藏代码' : '显示代码'
    },
  },
}
</script>

<style lang="scss" scoped>
  *{
    padding: 0;
    margin:0;
    box-sizing: border-box;
  }
  
  .code-format{
    font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
    font-size:16px;
    color: #5e6d82;
    .iw-all-wrapper{
      .component-wrapper{
        .iw-component-wrapper{
          // border: 1px solid darkgreen;
          .component{
            // border: 1px solid dodgerblue;
            .component-name{
              font-size: 1.8em;
              color: #1f2f3d;
              font-weight: 400;
            }
            .component-text{
              font-size: 0.8em;
              margin-top: 10px;
            }
          }
        }
        .iw-description-wrapper{
          // border: 1px solid green;
          margin-top: 38px;  
          .iw-description-title{
            // border: 1px solid red;
            font-size: 1.2em;
            font-weight: 400;
            color: #1f2f3d;
            margin-bottom: 26px;
          }
          .iw-description-text{
            font-size: 14px;
            // border: 1px solid rebeccapurple;
            margin: 15px 0;
            line-height: 2em;
            .add-color{
              font-size: 14px;
              padding: 0.1em 0.2em;
              border: 1px solid #ebebeb;
              border-radius: 5px; 
              background: #f7f7f7;//#ebebeb
              border-radius: 5px; 
              margin: 0 0.2em;
            }
            .noteColor{
              color: #000;
              font-weight: 600;

            }
            a{
              text-decoration:none;
            }
          }
        }
        .iw-border-wrapper{
          margin-top: 40px;
          border: 1px solid #ebebeb;
          .iw-show-component-wrapper{
            border-bottom: 1px solid #ebebeb;
            // padding: 10px 0;
            padding: 0 12px;
            .iw-show-component{
              // border: 1px solid red;
              padding: 16px 0;
            }
          }
          .iw-code-description-wrapper{
            margin-top: 2px;
            .iw-show-code-wrapper{
              border: 1px solid #ebebeb;
              border-radius: 3px; 
              padding: 10px 0;
              padding-left: 0.8em; 
              margin: 10px 6px;
              font-size: 14px;
              font-weight: 400px;
              .iw-code-description{
                .iw-paraStyle-wrapper{
                  line-height: 2em;
                  .iw-paraStyle{
                    font-size: 14px;
                    padding: 0.1em 0.2em;
                    border: 1px solid #ebebeb;
                    border-radius: 5px; 
                    background: #f7f7f7;
                    border-radius: 5px; 
                    margin: 0 0.2em;
                  }
                }
              }
            }
            .iw-code-wrapper{
              // border: 1px solid red
              line-height: 6em;
              padding: 3px 6px;
              .codeStyle{
                // background: red;
                font-size: 18px;
                padding: 6px 0;
                padding-left: 12px;
                // line-height: 6em;
              }
            }
          }
          .vue-iw-button{
            // margin-top: 1px;
            border-top: 1px solid #ebebeb;
            border-radius: 3px;
            width: 100%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: top;
            .vue-iw-wrapper{
              display: inline-flex;
              align-items: center;
              justify-content: center;
              vertical-align: top;
              padding: 0.7em 0;
              .vue-iw-icon{
                width:1.2em;
                height:1.2em;
                fill:#ebebeb;
              }
              .vue-iw-buttonText{
                font-size: 14px;
                color: #ebebeb;
              } 
            }
            &:hover{
              background-color: #f7f7f7;
              .vue-iw-buttonText{
                color: #409eff;
              }
            }
            &:hover{
              .vue-iw-icon{
                fill:#409eff;
              }
            } 
          }
        }
      }
    }
  }

</style>

