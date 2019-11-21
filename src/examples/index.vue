<template>
  <div id="app">
    <router-link to="manfbrand">厂商</router-link>
    <router-link to="submodel">车型</router-link>
    <router-link to="region">区域</router-link>
    <router-link to="segment">细分市场</router-link>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {}
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
