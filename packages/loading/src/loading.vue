<template>
  <transition name="iw-loading-fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      :style="{ backgroundColor: background || '' }"
      :class="[customClass, { 'is-fullscreen': fullscreen }]"
      class="iw-loading-mask">
      <div class="iw-loading-spinner">
        <i v-if="!spinner" class="iw-icon-loading" />
        <i v-else :class="spinner" />
        <p v-if="text" class="iw-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    }
  },

  methods: {
    handleAfterLeave() {
      this.$emit('after-leave')
    },
    setText(text) {
      this.text = text
    }
  }
}
</script>
