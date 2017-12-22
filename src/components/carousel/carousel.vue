<template>
  <div class="wrap">
    <div class="banner-item">
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/13/21/d759481b1b57f7e6fd35fa2fcbcc62f2.jpg@!water" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://img1.epetbar.com/2017-12/15/18/6e28948a2c99969f22f7e96fa2e08aee.jpg@!water" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/14/11/641c5beda848ec03c35c529624829c2a.jpg@!water" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/14/11/137ca4b2b792cf3f679d72114f4841f9.jpg@!water" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/13/14/4650cb729b55eb5ce6a93fea946dbb82.jpg@!water" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/13/23/8d634aa26184b4f5d118ac571d8c4f56.png@!water" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="columnnavdiv">
      <div v-if="dogInfo.datas">
        <ul class="clearfix hottype pt10 pb10" v-if="newArr[0]">
          <li v-for="(menu,index) in newArr[0].menus" class="fl" :key="index">
            <a href="">
              <img :src="menu.image" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="surprise">
      <div class="surprise-tit clearfix pad10 rela overflow">
        <div class="titimg">
          <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png" alt="">
        </div>
        <div class="ft13">距离下一场</div>
        <div class="surprise-time hide"></div>
        <div class="time">
          <div class="dib">
            <span class="time1-1">00</span>
            <span class="time-zi">:</span>
            <span class="time1-1">00</span>
            <span class="time-zi">:</span>
            <span class="time1-1">00</span>
          </div>
        </div>
       <more/>
      </div>
    </div>


    <div ref="surprise" class="surprise-wrap">
      <div class="surprise-pro" >
        <div class="item">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&fw=0">
              <div class="loadimg-nofixed">
                <img src="https://img1.epetbar.com/2016-06/27/10/37a48860ca996f7f2ee33b817fc3764c.jpg@!300w-b" alt="">
              </div>
              <div class="cred">
                <span>¥</span>
                <span>1.15</span>
              </div>
              <p class="c999">省￥10.35</p>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&fw=0">
              <div class="loadimg-nofixed">
                <img src="https://img1.epetbar.com/2017-05/24/10/7629f92cceba166c6a417d4f51b271e2.jpg@!300w-b" alt="">
              </div>
              <div class="cred">
                <span>¥</span>
                <span>1.15</span>
              </div>
              <p class="c999">省￥10.35</p>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&fw=0">
              <div class="loadimg-nofixed">
                <img src="https://img1.epetbar.com/2017-09/27/13/45e26264d235f450deefe32ff4600d8e.jpg@!300w-b" alt="">
              </div>
              <div class="cred">
                <span>¥</span>
                <span>1.15</span>
              </div>
              <p class="c999">省￥10.35</p>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&fw=0">
              <div class="loadimg-nofixed">
                <img src="https://img1.epetbar.com/2015-12/24/10/42b888a6c2456579159b9a7afa3751da.jpg@!300w-b" alt="">
              </div>
              <div class="cred">
                <span>¥</span>
                <span>1.15</span>
              </div>
              <p class="c999">省￥10.35</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <xline/>
    <epet/>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import more from '../more/more.vue'
  import xline from '../line/line.vue'
  import epet from '../epet/epet.vue'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        newArr:[]
      }
    },
    computed:{
      ...mapState(['dogInfo'])
    },
    mounted(){
      this.$nextTick(()=>{
        if(!this.scroll){
          this.scroll= new BScroll(this.$refs.surprise,{
            click:true,
            scrollX: true
          })
        }
      })
      if(this.dogInfo.datas){
        this.newArr=this.dogInfo.datas.filter(data=>data.type==='3'&&data.index==='3047')
      }
    },
    watch: {
      dogInfo () {
        if(this.dogInfo.datas){
          this.newArr=this.dogInfo.datas.filter(data=>data.type==='3'&&data.index==='3047')
        }
      }
    },
    components:{
      more,
      xline,
      epet
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.wrap
  width 100%
  position relative
  margin-top 86px
  .banner-item
    position absolute
    height 160px
    width 100%
    img
      width 375px
  .columnnavdiv
    padding-top 160px
  .hottype
    padding 0
    overflow hidden
  .pb10
    padding-bottom 10px
  .pt10
    padding-top 10px
    .fl
      float left
      width 20%
      img
        width 100%
  .surprise-tit
    overflow hidden
    position relative
    .titimg
      float left
      img
        height 24px
    .ft13
      font-size 13px
      float left
      margin-left 10px
    .time
      margin-left 5px
      float left
      text-align center
      .dib
        display inline-block
        font-size 12px
        .time1-1
          border 1px solid #ddd
          padding 1px 1px
          font-size 13px
        .time-zi
          margin 0 3px
          font-weight 700px
  .surprise-wrap
    overflow hidden
    .surprise-pro
      padding-left 5px
      margin-bottom 10px
      height 100%
      width 100%
      margin 10px auto
      position relative
      z-index 1
      display flex
      box-sizing content-box
      .item
        width 98px
        margin-right 10px
        .pro-block
          margin 0 .5em
          a
            display block
            color #333
            .loadimg-nofixed
              background url(./default-epet.png) no-repeat center center #f4f4f4
              background-size 120px auto
              position relative
              padding-top 100%
              width 84px
              img
                top 0
                left 0
                position absolute
                width 84px
                height 84px
            .cred
              color red
              text-align center
              margin-top 10px
              font-size 12px
            .c999
              color #999
              text-align center
              font-size 12px
              margin-top 10px
</style>
