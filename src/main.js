import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import { Swipe, SwipeItem,IndexList, IndexSection} from 'mint-ui';
import App from './App'
import store from './store'
import router from './router'
import '../static/js/gVerify'
import loading from '../static/img/loading.gif'

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
