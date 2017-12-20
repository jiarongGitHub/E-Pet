<template>
  <div class="bgfff">
    <div class="mformBox">
      <ul class="mform">
        <li>
          <span class="mNameIco"></span>
          <input type="text" placeholder="已注册手机号" v-model="phone">
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input ref="code_input" type="text" placeholder="请输入图片内容" v-model="photo">
          <div id="v_container"></div>
        </li>
        <li>
          <span class="mpasswordIco"></span>
          <input type="text" placeholder="验证码" v-model="code">
          <button @click="sendCode">发送验证码</button>
        </li>
      </ul>

      <div class="loginbtn">
        <a @click="login">登录</a>
      </div>

     <!-- <img src="http://demo.open.renren.io/renren-fast/captcha.jpg" alt="">-->

      <div class="others">
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
  import { Toast } from 'mint-ui';
  export default {
    data(){
      return{
        phone: '',
        photo:'',
        code: '',
        verifyCode:''
      }
    },
    mounted(){
      this.verifyCode = new GVerify("v_container");
    },
    methods: {
      sendCode() {
        const url = `/api/sendcode?phone=${this.phone}`
        axios.get(url).then(response => {
          console.log('sendcode result ', response.data)
        })
      },

      login() {
        let res = this.verifyCode.validate(this.$refs.code_input.value);
        if(res){
          console.log('success');
        }else{
          Toast({
            message: '验证码错误',
            position: 'bottom',
            duration: 2000
          });
          return
        }
        axios.post('/api/login', {phone: this.phone, code: this.code}).then(response => {
          console.log('login result ', response.data)
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            Toast({
              message: '登陆成功',
              position: 'bottom',
              duration: 2000
            });
            //跳回主路由
            this.$router.push({path: '/app'})
            sessionStorage.setItem('user', JSON.stringify({user: user.phone}))
          } else {
            Toast({
              message: '登陆失败, 请输入正确的手机号和验证码',
              position: 'bottom',
              duration: 5000
            });
          }
        })
      }
    }
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
          position relative;
          button
            background #fff;
            color #ff4259;
            border 1px solid #eb4c33;
            position absolute;
            right 0;
            top 0.5em;
            border-radius 3px;
            width 100px;
            text-align center;
            padding 0.3em 0;
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
            float left;
            display inline-block;
            width 30px
            height 20px
            background url(./icon3.jpg) no-repeat;
            background-size contain;
            padding-top 10px
          .mpasswordIco
            float left;
            display inline;
            width 30px
            height 20px
            padding-top 10px
            background url(./icon2.jpg) no-repeat;
            background-size contain;
          #v_container
            width 100px
            height 40px
            position absolute
            right 0
            bottom 0
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
      .others
        width 100%
        height 200px
        text-align center
        margin-top 80px
        p
          color #666
</style>
