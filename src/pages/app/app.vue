<template>
  <div class="app">
    <headComponent/>
    <carousel/>
    <footerComponent/>
  </div>
</template>

<script>
  import headComponent from '../../components/header/header.vue'
  import carousel from '../../components/carousel/carousel.vue'
  import footerComponent from '../../components/footer/footer.vue'
  export default {
    components: {
      headComponent,
      carousel,
      footerComponent
    },
    mounted(){
      sessionStorage.removeItem('toggleSate')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  height 100%
</style>
