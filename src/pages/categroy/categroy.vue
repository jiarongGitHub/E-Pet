<template>
  <div class="categroyMain">
    <div class="top">
      <div class="sort common" >
        <router-link to="/categroy/sort">
          <span :class="{on:isSort}" @click="toggle(true)">分类</span>
        </router-link>
      </div>
      <div class="brand common">
        <router-link to="/categroy/brand">
          <span :class="{on:isBrand}" @click="toggle(false)">品牌</span>
        </router-link>
      </div>
      <a href="https://wap.epet.com/search.html?pet_type=dog&fw=0">
        <img src="//static.epetbar.com/static_web/wap/src/images/background/search-ico.png" alt="" class="search">
      </a>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <footerCompontent/>
  </div>
</template>
<script>
  import footerCompontent from '../../components/footer/footer.vue'
  export default {
    data(){
      return{
        isSort:true,
        isBrand:false
      }
    },
    components:{
      footerCompontent
    },
    methods:{
      toggle(isSort){
        if(isSort){
          this.isSort=true
          this.isBrand=false
        }else{
          this.isBrand=true
          this.isSort=false
        }

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .categroyMain
   height 100%
   overflow hidden
  .top
    padding 0 15px;
    border-bottom 1px solid #cbcbcb;
    position fixed;
    left 0;
    right 0;
    top 0;
    height 40px;
    z-index 11;
    background #fff;
    .sort
      text-align right;
      padding-right 5%;
    .brand
      padding-left 5%;
    .common
      width 40%;
      height 40px;
      line-height 40px;
      font-size 13px;
      float left
      font-weight 700;
      a
        display block
        width 100%
      .on
        color #ed4044;
        display inline-block
        border-bottom 2px solid #ed4044;

    .search
      top 13px;
      right 20px
      width 14px;
      height 14px;
      position absolute;


</style>
