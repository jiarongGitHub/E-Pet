<template>
  <div>
    <div class="footernav bottom_menu_bar bgfff bottomBox">
      <ul class="clearfix footernav_ul bgfff">
        <li class="index-a dogon">
          <router-link to="/app">
            <span class="icon-home-outline"></span>
          </router-link>
        </li>
        <li class="type-a" @click="dogTypeCli">
          <router-link to="/categroy/sort">
             <span class="icon-file-text2"></span>
          </router-link>
        </li>
        <li class="cart-a">
          <a href="https://wap.epet.com/cart/main.html" class="db">
            <span class="icon-shopping-cart"></span>
          </a>
        </li>
        <li class="myepet-a" v-if="!user">
          <router-link to="/login/login1">
            <span class="icon-smile"></span>
          </router-link>
        </li>

        <li class="myepet-a" v-if="user" @click="userInfo">
          <img src="./icon1.jpg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        user:{}
      }
    },
    methods:{
      dogTypeCli(){
        this.$store.dispatch('reqDogType')
      },
      userInfo(){
        alert('用户中心')
      }
    },
    mounted(){
      this.user = JSON.parse(sessionStorage.getItem('user'))
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footernav
  height 45px
  background 0 0
  li
    float left
    width 25%
    height 55px
    text-align center
    padding-top 5px
    span
      font-size 30px
.bgfff
  background #fff
  .footernav_ul
    height 45px
    line-height 45px
    position fixed
    bottom 0
    left 0
    width 100%
    z-index 103
    border-top 1px solid #e7e7e7
    .index-a
      span
        color lightgreen


</style>
