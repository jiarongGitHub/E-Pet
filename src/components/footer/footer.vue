<template>
  <div>
    <div class="footernav bottom_menu_bar bgfff bottomBox">
      <ul class="clearfix footernav_ul bgfff">
        <li class="index-a dogon">
          <a href="https://wap.epet.com/main.html?pet_type=dog" class="db">
            <span class="icon-home-outline"></span>
          </a>
        </li>
        <li class="type-a">
          <a href="https://wap.epet.com/category.html?pet_type=dog" class="db">
            <span class="icon-file-text2"></span>
          </a>
        </li>
        <li class="cart-a">
          <a href="https://wap.epet.com/cart/main.html" class="db">
            <span class="icon-shopping-cart"></span>
          </a>
        </li>
        <li class="myepet-a">
          <a href="https://wap.epet.com/user/UserCenter.html" class="db">
            <span class="icon-smile"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.footernav
  height 45px
  background 0 0
  li
    float left
    width 25%
    height 55px
    text-align center
    padding-top 5px
    span
      font-size 30px
.bgfff
  background #fff
  .footernav_ul
    height 45px
    line-height 45px
    position fixed
    bottom 0
    left 0
    width 100%
    z-index 103
    border-top 1px solid #e7e7e7
    .index-a
      span
        color lightgreen


</style>
