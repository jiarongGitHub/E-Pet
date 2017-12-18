<template>
  <div>
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
    <div>
      <a class="all" href="https://wap.epet.com/brand.html?fw=0">
      全部
      </a>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['category'])
    },
    mounted(){
      this.$store.dispatch('reqCategroy')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
.all
  width: 40px;
  height: 40px;
  right: 6px;
  bottom: 65px;
  position: fixed;
  z-index: 10;
  background: rgba(0,0,0,.4);
  line-height: 40px;
  border-radius: 50%;
  font-size: 12px;
  color: #fff;
  text-align: center;
</style>
