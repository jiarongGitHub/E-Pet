<template>
  <div>
    <div class="login">
      <div class="login_bg">
        <div class="head-top">
          <router-link to="/app">
            <img src="./back.jpg" alt="">
          </router-link>
          <div class="zfont">
            <a href="https://wap.epet.com/register.html" class="afff">注册</a>
          </div>
          <div class="logo">
            <img src="//static.epetbar.com/mpet/images/login/logo.png" alt="">
          </div>

          <div class="es_por4">
            <ul>
              <li>
                <router-link to="/login/login1">普通登录</router-link>
                <i></i>
              </li>
              <li>
                <router-link to="/login/login2">手机动态密码登录</router-link>
                <i></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.login
  width 100%
  .login_bg
    width 100%
    height 180px
    background url(./2ac7b0a4f0ab1e4a63819e0668d1cb39.png) no-repeat
    background-size 100% 100%
    .head-top
      width 100%
      height 50px;
      line-height 50px;
      position relative;
      border-bottom 0;
      position relative
      text-align center
      a
        display block;
        position absolute;
        margin-top 10px;
      .zfont
        position absolute;
        width 32px
        right 15px
        font-size 16px;
        .afff
          color #fff
      .logo
        padding 60px 0 2em 0;
        img
          display block
          margin auto
          width 20%
      .es_por4
        background-color rgba(255,255,255,0.3)
        ul
          overflow hidden
          li
            float left;
            width 50%;
            height 44px;
            line-height 44px;
            position relative;
            a
              font-size 15px;
              color #fff;
              display block;
              width 100%
              margin-top 2px
            i
              display: block;
              width: 0px;
              height: 0px;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
</style>
