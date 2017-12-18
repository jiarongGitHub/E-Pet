<template>
  <div class="currency_ad">
    <!--E宠物-->
    <div class="divboximg flex" v-if="ePetArr[0]">
      <a :href="ePetArr[0].content_images[0][0].target.param">
        <img :src="ePetArr[0].content_images[0][0].image" alt="">
      </a>
    </div>
    <xline/>
    <div class="currency-adcon" v-if="ePetArrR[0]">
      <div class="divimg1">
        <a :href="ePetArrR[0].content_images[0][0].target.param">
          <img :src="ePetArrR[0].content_images[0][0].image" alt="">
        </a>
      </div>
      <div class="divimg2">
        <a :href="ePetArrR[0].content_images[1][0].target.param">
          <img :src="ePetArrR[0].content_images[1][0].image" alt="">
        </a>
        <a :href="ePetArrR[0].content_images[1][1].target.param">
          <img :src="ePetArrR[0].content_images[1][1].image" alt="">
        </a>
      </div>

    </div>
    <xline/>
    <!--潮品视频-->
    <div class="custom_tite">
      <div class="leftimg">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/c07935b6d02b84cf457c3eaa40f95677.jpg" alt="">
      </div>
      <more/>
    </div>
    <div class="fashion">
      <ul class="cmVideoList cmVideoListIndex">
        <li v-if="chaoArr[0]">
          <a :href="chaoArr[0].value[0].share_target.param.url">
            <div class="relative imgBox overflow">
              <img :src="chaoArr[0].value[0].share_target.param.image" alt="">
              <span class="cmallPlayIco"></span>
            </div>
            <div class="ft12 c999 pad10 ftc">
              <div class="textover">{{chaoArr[0].value[0].share_target.param.title}}</div>
              <div>
                <span class="cmallViewIco"></span>
                <i>{{chaoArr[0].value[0].visit}}</i>
                <span class="ml10 mr10">|</span>
                {{chaoArr[0].value[0].video_size}}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <xline/>

    <!--特卖-->
    <div class="custom_tite">
      <div class="leftimg">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg" alt="">
      </div>
      <more/>
    </div>

    <div v-for="(item,index) in temaiArr" :key="index">
      <div class="divboximg flex">
        <a :href="item.content_images[0][0].target.param">
          <img :src="item.content_images[0][0].image" alt="">
        </a>
      </div>
      <xline/>
    </div>

   <!-- 体验馆-->
    <div class="custom_tite">
      <div class="leftimg">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/14/41be554ac711057efbb82403f8618b72.jpg" alt="">
      </div>
      <more/>
    </div>
    <div class="banner-item">
      <mt-swipe :auto="3000">
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/15/16/e7004aedc8f094a73f29f1bc42cc1891.jpg@!water" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/15/16/a4768d80f136d3bed55135bb6adb8d9d.jpg@!water" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/15/19/bab0838cce74c67badf3dfa91bc1af01.png@!water" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="https://img2.epetbar.com/nowater/2017-12/15/16/e12bb476ec0110db6b25a6bbe0c3a410.jpg@!water" alt="">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div style="height: 160px"></div>
    <xline/>

    <!--萌宠说-->
    <div class="custom_tite">
      <div class="leftimg">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/14/77c0017136e51145788b7607a3a0914c.jpg" alt="">
      </div>
      <more/>
    </div>
    <div class="fashion">
      <ul class="cmVideoList cmVideoListIndex">
        <li>
          <a href="https://wap.epet.com/article/video/View.html?vid=19&fw=0">
            <div class="relative imgBox overflow">
              <img src="https://img1.epetbar.com/2017-12/13/13/a2ed53eb150b5145f9d493c55fd925e5.jpg@!500w0h" alt="">
              <span class="cmallPlayIco"></span>
            </div>

            <div class="ft12 c999 pad10 ftc">
              <div class="textover">第1期-狗为什么会互相闻菊花?</div>
              <div>
                <span class="cmallViewIco"></span>
                <i>7955</i>
                <span class="ml10 mr10">|</span>
                02:15
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <xline/>
    <!--小剧场-->
    <div class="custom_tite">
      <div class="leftimg">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/13/e747ca83834dbd4d1f9663f11f7bf146.jpg" alt="">
      </div>
      <more/>
    </div>
    <div class="fashion">
      <ul class="cmVideoList cmVideoListIndex">
        <li>
          <a href="https://wap.epet.com/article/video/View.html?vid=19&fw=0">
            <div class="relative imgBox overflow">
              <img src="https://img1.epetbar.com/2017-10/31/11/3752ba61defcd853a74df15452349218.jpg@!500w0h" alt="">
              <span class="cmallPlayIco"></span>
            </div>

            <div class="ft12 c999 pad10 ftc">
              <div class="textover">吐槽！E宠！首部自黑视频</div>
              <div>
                <span class="cmallViewIco"></span>
                <i>4805</i>
                <span class="ml10 mr10">|</span>
                02:15
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>


    <div class="dibimg15">
      <div class="divimg">
        <a href="">
          <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water" alt="">
        </a>
      </div>

    </div>


    <!--介绍-->
    <div class="wap-footer-bar hide">
      <div class="footer">
        <div class="ft">
          <span class="bt">触屏版</span>
          <span>
            <a href="https://wap.epet.com/app.html">手机客户端</a>
          </span>
          <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
          <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
        </div>
        <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
      </div>
    </div>
  </div>
</template>
<script>
  import xline from '../line/line.vue'
  import more from '../more/more.vue'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        ePetArr:[],
        ePetArrR:[],
        chaoArr:[],
        temaiArr:[],
      }
    },
    computed:{
      ...mapState(['dogInfo'])
    },
    mounted(){
      if(this.dogInfo.datas){
        this.ePetArr=this.dogInfo.datas.filter(data=>data.type==='13'&&data.index==='2936')
        this.ePetArrR=this.dogInfo.datas.filter(data=>data.type==='13'&&data.index==='2938')
        this.chaoArr=this.dogInfo.datas.filter(data=>data.type==='104'&&data.index==='2117')
        this.temaiArr=this.dogInfo.datas.filter((data,index)=>data.type==='13'&&data.index!=='3010')
        this.temaiArr.splice(0,2);
        this.temaiArr.splice(this.temaiArr.length-1,1);
      }

    },
    watch: {
      dogInfo () {
        if(this.dogInfo.datas){
          this.ePetArr=this.dogInfo.datas.filter(data=>data.type==='13'&&data.index==='2936')
          this.ePetArrR=this.dogInfo.datas.filter(data=>data.type==='13'&&data.index==='2938')
          this.chaoArr=this.dogInfo.datas.filter(data=>data.type==='104'&&data.index==='2117')
          this.temaiArr=this.dogInfo.datas.filter((data,index)=>data.type==='13'&&data.index!=='3010')
          this.temaiArr.splice(0,2);
          this.temaiArr.splice(this.temaiArr.length-1,1);
        }
      }
    },
    components:{
      xline,
      more
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.currency_ad
  position relative
  width 100%
  .divboximg
    display box
    a
     display block
     color #333
     img
       width 100%
  .currency-adcon
    overflow hidden
    .divimg1
      width 50.13%
      float left
      a
        display block
        color #333
        img
          width 100%
    .divimg2
      width 49.87%
      float left
      a
        display block
        color #333
        img
          width 100%
  .custom_tite
    overflow hidden
    padding-top 10px
    position relative
    .leftimg
      padding-bottom 5px
      padding-left 5px
      img
        width 188px
  .fashion
    li
      padding 0
      width 100%
      float none
      a
        display block
        color #333
        .relative
          position relative
        img
          width 100%
        .cmallPlayIco
          background: url(./play.png) 0 0 no-repeat;
          background-size: contain;
          width: 20px;
          height: 20px;
          position: absolute;
          left: 50%;
          top: 50%;
          margin-left: -10px;
          margin-top: -10px;
        .ft12
          font-size 12px
        .c999
          color #999
        .pad10
          padding 10px
        .ftc
          text-align center
          .textover
            color #333
            margin-bottom 5px
          .cmallViewIco
            display: inline-block;
            width: 10px;
            height: 9px;
            background: url(./view-black.png) 0 0 no-repeat;
            background-size: contain;
            margin-right 3px
          i
            font-style normal
          .ml10
            margin-left 10px
          .mr10
            margin-right 10px
  .banner-item
    height 160px
    overflow hidden
  .dibimg15
    position relative
    overflow hidden
    .divimg
      width 100%
      a
        height 30px
        img
          width 100%
  .wap-footer-bar
    .footer
      padding-bottom 0
      margin 1em 0 0
      background #fff
      clear both
      div
        font-size 14px
      .ft
        padding 15px 0 5px
        text-align: center
        span
          padding-right 10px
        .bt
          color red


</style>
