import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import appComponent from '../pages/app/app.vue'
import loginComponent from '../pages/login/login.vue'
import login1Component from '../pages/login/login1.vue'
import login2Component from '../pages/login/login2.vue'

export default new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {
      path:'/',
      redirect:'/app'
    },
    {
      path:'/app',
      component:appComponent
    },
    {
      path:'/login',
      component:loginComponent,
      children:[
        {
          path: 'login1',
          component: login1Component
        },
        {
          path: 'login2',
          component: login2Component
        }

      ]
    }
  ]
})
