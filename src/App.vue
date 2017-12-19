<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import appComponent from './pages/app/app.vue'
  export default {
    components: {
      appComponent
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  height 100%
</style>
