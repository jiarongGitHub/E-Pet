<template>
  <div>

    <div ref="mainBrand" style="height: 667px">
      <div class="mainBrands">
        <div class="brands" v-for="(brand,index) in category.brand" :key="index">
          <div class="title">
            <span>—— {{brand.title}} ——</span>
          </div>
          <div class="list">
            <ul>
              <li v-for="(det,index) in brand.list" :key="index">
                <a href="">
                  <div>
                    <img :src="det.logo" alt="">
                  </div>
                  <p class="name">{{det.name}}</p>
                  <p class="address">{{det.address}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="allDiv" v-show="isShow">
          <div class="wap-top-bar">
            <div class="head-top">
              <a class="aback" @click="hideAll"></a>
              <span class="all-title">全部品牌</span>
              <a href="" class="homeImg"></a>
            </div>
          </div>

          <mt-index-list class="content">
            <mt-index-section class="item" v-for="(content,index) in allBrand.brand" :index="content.order">
              <div v-for="(item,index) in content.list">
                <a href="" class="brandA">
                  <div class="brand-wrapper">
                    <div class="brand-img">
                      <img :src="item.logo" alt="">
                    </div>
                    <div class="brand-name">
                      <p class="first">{{item.name}}</p>
                      <p class="second">{{item.address}}</p>
                    </div>
                  </div>
                </a>
              </div>
            </mt-index-section>
          </mt-index-list>
        </div>
      </div>
    </div>
    <div class="allClick">
      <a class="all" @click="allClick">全部</a>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return {
        isShow: false,
      }
    },
    computed: {
      ...mapState(['category', 'allBrand'])
    },
    mounted(){
      this.$store.dispatch('reqCategroy')
      if (!this.category.brand) {
        return
      }
      this._initBetter();
    },
    watch: {
      category(){
        this._initBetter();
      }
    },
    methods: {
      allClick(){
        this.$store.dispatch('reqAllBrand')
        this.isShow = !this.isShow
      },
      hideAll(){
        this.isShow = !this.isShow
      },
      _initBetter(){
        //分类导航添加滚动
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.mainBrand, {
              click: true
            })
          }
          else {
            this.scroll.refresh()
          }
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .mainBrands
    .brands
      padding-top: 40px;
      margin-bottom: 10px;
      background: #fff;
      .title
        padding-top: 20px;
        font-size: 12px;
        color: #999;
        font-size: 12px;
        text-align: center;
      .list
        padding: 0 5px;
        li
          margin-top: 20px;
          width: 30%;
          padding: 0 5px;
          position: relative;
          float left
          div
            border: 1px solid #e2e2e2;
            text-align: center;
            padding: 50px 10px 10px;
            background: url(./default-epet2.jpg) no-repeat center center #fff;
            background-size: 120px auto
            height 100%
            img
              max-width: 90%;
              margin: 10px auto 0;
              height: 40px;
              right: 0;
              top: 0;
              left: 0;
              position: absolute;
              display: block;
          .name
            height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 13px;
            margin-top: 5px;
            text-align center
            color #000
          .address
            height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            color: #999;
            text-align: center;

  .allClick
    .all
      width: 40px;
      height: 40px;
      right: 6px;
      bottom: 65px;
      position: fixed;
      z-index: 2;
      background: rgba(0, 0, 0, .4);
      line-height: 40px;
      border-radius: 50%;
      font-size: 12px;
      color: #fff;
      text-align: center;

  .allDiv
    width 100%
    height 100%
    overflow hidden
    background #fff
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    .wap-top-bar
    .head-top
      width 100%
      height: 50px;
      line-height: 50px;
      padding: 0 0;
      border-bottom: 1px solid #f3f3f3;
      color: #333;
      background: #fff;
      .aback
        background: url(./back.png) no-repeat;
        height: 25px;
        width: 25px;
        position: absolute;
        margin-top: 10px;
        left: 10px;
      .all-title
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        display: block;
        margin: 0 auto;
        font-size: 16px;
        color #000
        text-align center
      .homeImg
        background: url(./home.png) no-repeat;
        height: 30px;
        width: 30px;
        position: absolute;
        top: 10px;
        right: 20px;
    .content
      background: #f3f4f5;
      padding: 45px 0 0;
      padding-top: 0;
      box-sizing: border-box;
      .item
        h2
          text-indent: 15px;
          line-height: 24px;
          font-size: 12px;
          color: #999;
          font-weight: 400;
        .brandA
          display: block;
          background: #fff;
          color: #333;
          .brand-wrapper
            padding: 15px;
            border-bottom: 1px solid #f3f4f5;
            margin-right: 10px;
            overflow hidden
            .brand-img
              text-align: center;
              background: url(./default-epet2.jpg) no-repeat center center #fff;
              background-size: 120px auto;
              width: 30%;
              max-width: 150px;
              border: 1px solid #f3f4f5;
              padding-top: 50px;
              position: relative;
              float left
              margin-top -2px
              margin-left -10px
              img
                max-width: 90%;
                height: 40px;
                margin: 5px auto;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                display: block;
                border: 0;
            .brand-name
              margin: 5px 0 5px 20px;
              float: left;
              .first
                font-size: 14px;
                margin-bottom 5px
              .second
                font-size: 12px;
                color: #999;
    .wrapper-1
      top 0;
      bottom 0;
      right 4px;
      width 10px;
      z-index 201;
      position fixed;
      text-align center;
      padding-top 155px
      .cell-1
        display: table-cell;
        height: 100%;
        vertical-align: middle;
        span
          display: block;
          height: 12px;
          margin-top: 2px;
          font-size: 12px;
        .current
          color: #fe3e3e;
          font-weight: 700;


</style>
