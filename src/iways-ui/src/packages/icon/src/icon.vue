<template>
  <i :class="'iw-icon-' + name"/>
</template>

<script>
export default {
  name: 'IwIcon',

  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
