<template>
  <div>
    <div class="left" ref="leftScroll">
      <ul>
        <li :class="{on:num===index}" v-for="(type,index) in dogType.categorys" :key="index" @click="getDet(type.cateid,index)">
          {{type.name}}
        </li>
      </ul>
    </div>
    <div ref="rightScroll" style="height: 667px">
      <div class="right">
        <div class="content" v-for="(det,index) in dogTypeDet.cate_list" :key="index">
          <a href="">{{det.title}}
            <img class="cimg" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
          </a>
          <ul>
            <li v-if="" v-for="(detPic,index) in det.list" :key="index">
              <!-- 判断如果是有detPic.photo就显示detPic.photo-->
              <a href="" class="db" v-if="detPic.photo">
                <div>
                  <img class="image" :src="detPic.photo" alt="">
                </div>
                <p>{{detPic.name}}</p>
              </a>

              <!--判断如果是有detPic.photo就显示detPic.logo-->
              <a href="" class="da" v-if="detPic.logo">
                <div>
                  <img class="img" :src="detPic.logo" alt="">
                </div>
                <p>{{detPic.name}}</p>
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
        newArr:[], //添加左边分类对应的右边的商品
        num:0  //保存当前左右两边的下标
      }
    },
    computed: {
      ...mapState(['dogType', 'dogTypeDet'])
    },
    mounted(){
      if (!this.dogType.categorys) {
        //在当前路由刷新的话需要重新获取数据
        this.$store.dispatch('reqDogType')
        //默认显示热门分类
        this.$store.dispatch('reqDogTypeDet', 88888)
      }
      //解决better-scroll 路由间跳转数据渲染慢不能滑动问题
      if(!this.dogType.categorys){
        return
      }
      this._initBetter()
    },
    watch: {
      dogType(){
        this._initBetter()
      },
      dogTypeDet(){
        this._initBetter()
      }
    },
    methods: {
      getDet(typeId,num){
        this.$store.dispatch('reqDogTypeDet', typeId)
        this.newArr[num]=this.dogTypeDet
        this.num=this.newArr.findIndex((arr,index)=>index===num)
      },
      _initBetter(){
        //分类导航添加滚动
        this.$nextTick(() => {
          if (!this.leftScroll) {
            this.leftScroll = new BScroll(this.$refs.leftScroll, {
              click: true
            })
          }
          if(!this.rightScroll){
            this.rightScroll = new BScroll(this.$refs.rightScroll, {
              click: true
            })
          }else{
            this.leftScroll.refresh()
            this.rightScroll.refresh()
          }
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .left
    position fixed;
    top 40px;
    left 0;
    bottom 0;
    padding-bottom 45px;
    background #fff;
    li
      padding 5px 0;
      border-bottom 1px solid #f3f4f5;
      width 70px;
      height 50px;
      font-size 13px;
      text-overflow ellipsis;
      white-space nowrap;
      text-align center;
      line-height 50px
    .on
      background #f3f4f5;
      color #ed4044;

  .right
    margin-left 72px;
    margin-top 40px
    .content
      padding 30px 5px 20px;
      ul
        overflow hidden
      a
        font-size 12px;
        .cimg
          float right
          height 10px;
          margin-top 5px;
      li
        width 28%;
        padding 0 5px;
        margin-top 10px;
        float left
        .db
          display block
          .image
            top 0;
            left 0;
            width 100%;
        .da
          display block
          width 100%
          div
            border 1px solid #f3f4f5;
            padding 55px 10px 10px;
            background url(./default-epet2.jpg) no-repeat center center #fff;
            background-size 120px auto;
            position relative
            width 100%
            .img
              position absolute
              width 89px
              height 45px
              left 0
              top 0
              right 0
              bottom 0
              margin auto
        p
          text-align center
          margin-top 10px
          color #000
          overflow hidden;
          text-overflow ellipsis;
          white-space nowrap;
          height 20px;
          line-height 20px
</style>
