<template>
  <div class="main">
    <div class="pt5 pl10 pr10 pb5">
      <div class="epet-search">
        <div class="fl rela ft14 location">
          <a href="https://wap.epet.com/place.html?pet_type=dog&fw=0">
            <span class="c89">狗狗站</span>
            <span class="c89">|</span>
            <span class="myposition c89 ft13">北京</span>
          </a>
          <i></i>
        </div>
        <p class="search-text">
          <a href="https://wap.epet.com/search.html?pet_type=dog&fw=0">
            <input type="search" placeholder="搜索商品和品牌" disabled>
            <span class="serach-ico"></span>
          </a>
        </p>
        <div v-if="!user">
          <router-link to="/login/login1">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png" alt="">
          </router-link>
        </div>
        <div v-if="user">
          <img src="./images/icon1.jpg" alt="">
        </div>

      </div>
    </div>

    <div class="find_nav">
      <div class="find_nav_left dscroll" ref="nav">
        <div class="find_nav_list dscroll-div">
          <ul class="dscroll-ul">
            <li v-for="(menu,index) in dogInfo.menus" :key="index" class="dscroll-li" :class="{on:index===0}">
              <a :href="menu.menu_target">
                <span class="rela">
                  <span>{{menu.menu_name}}</span>
                  <i></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        user: {}
      }
    },
    computed:{
      ...mapState(['dogInfo'])
    },
    mounted(){
      this.$store.dispatch('getDogInfo')
      //导航添加横向滚动
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll= new BScroll(this.$refs.nav,{
            click:true,
            scrollX: true
          })
        }
      })

      this.user = JSON.parse(sessionStorage.getItem('user'))
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .main
    max-width 640px
    margin auto
    position fixed
    height 86px
    z-index 50
    top 0
    left 0
    right 0
    background #fff
    .pl10
    &.p1
      padding-left 10px
    .pb5
      padding-bottom 5px
    .pr10
    &.pr
      padding-right 10px
    .pt5
      padding-top 5px
      .epet-search
        padding 8px 0
        text-align center
        display -webkit-box
        -webkit-box-align center
        width 100%
        input
         width 100%
         border 0
         height 25px
         background #e9e9e9
         border-radius 4px
         color #bcbcbc
         text-indent 10px
         font-size 13px
         outline 0
        .serach-ico
          width 11px
          height 11px
          position absolute
          right 5px
          top 0
          bottom 0
          margin auto 0
          background-position 0 0
          background url(./images/search.png) no-repeat
          background-size 11px auto
        p
         position relative
         -webkit-box-flex 1
         a
          color #333
          -webkit-tap-highlight-color rgba(0,0,0,0)
        img
          width 25px
          margin-left 10px
          border 0
          vertical-align middle
        .location
          margin-right 20px
          position relative
          i
           position absolute
           top 8px
           right -11px
           border-width 4px
           font-size 0
           line-height 0
           border-style solid solid dotted
           border-color #898989 transparent transparent
          .rela
            position relative
          .ft14
            font-size 14px
          .fl
            float left
            .c89
              color #898989
          span
            font-size 14px
    .find_nav
      width 100%
      height 35px
      min-width 320px
      .dscroll
        overflow hidden
        height 53px
        .dscroll-div
          width 140%
          .dscroll-ul
            white-space nowrap
            display flex
            .dscroll-li
              width 25%
              float left
              display list-item
              text-align -webkit-match-parent
              a
                font-family Georgia
                display block
                width 100%
                height 100%
                line-height 36px
                font-size 14px
                text-align center
                color #666
                .rela
                  position relative
        .find_nav_list
           ul
             .on
              i
                position absolute
                bottom -8px
                left -10%
                width 120%
                height 2px
                background #459d36
              span
                color #459d36
</style>
