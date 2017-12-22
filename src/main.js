import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import { Swipe, SwipeItem,IndexList, IndexSection} from 'mint-ui';
import App from './App'
import store from './store'
import router from './router'
import '../static/js/gVerify'
import './mock/mockServer'
import loading from '../static/img/loading.gif'
import './font/cart/style.css'
import './font/home/style.css'
import './font/type/style.css'
import './font/info/style.css'

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueLazyload, {
  loading: loading,
  lazyComponent: true
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
});
