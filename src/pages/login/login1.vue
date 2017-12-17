<template>
  <div class="bgfff">
    <div class="mformBox">
      <ul class="mform">
        <li>
          <span class="mNameIco"></span>
          <input type="text" placeholder="手机号/邮箱/用户名" class="text" name="username" id="username">
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input type="password" placeholder="输入密码" class="text" name="password" id="password">
        </li>
      </ul>

      <div class="loginbtn">
        <a href="">登录</a>
      </div>

      <div class="other">
        <p>合作网站登录</p>
        <a href="">
          <img src="./zhifubao.jpg" alt="">
        </a>
        <a href="">
          <img src="./tengxun.jpg" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.bgfff
  background #fff
  .mformBox
    background #fff;
    border-radius 0.5em;
    margin 0em 4% 1em 4%;
    padding 0 1.6%;
    .mform
      padding 12px 0 12px 30px;
      position relative;
      li
        border-bottom #e2e2e2 solid 1px;
        input
          display block;
          height 40px;
          width 80%;
          font-size 15px;
          border none;
          color #666;
          font-family "Microsoft Yahei",tahoma,arial;
          outline none;
          padding-left 10px
        .mNameIco
          float: left;
          display: inline-block;
          width: 30px
          height 20px
          background: url(./icon1.jpg) no-repeat;
          background-size: contain;
          padding-top 10px
        .mpasswordIco
          float left;
          display inline;
          width: 30px
          height 20px
          padding-top 10px
          background url(./icon2.jpg) no-repeat;
          background-size contain;
    .loginbtn
      padding-top 0.5em;
      text-align center;
      a
        display block;
        letter-spacing 5px;
        margin 0 10%;
        border-radius 5px;
        background #2ec975;
        font-size 15px;
        padding .6em 0;
        text-align center;
        color #fff
        width 100%
        margin-left 8px
    .other
      width 100%
      height 200px
      text-align center
      margin-top 100px
      p
        color #666
</style>
