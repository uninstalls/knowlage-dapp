<template>
  <div id="app">
    <router-view name="navbar"></router-view>
    <router-view class="mb-1"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
