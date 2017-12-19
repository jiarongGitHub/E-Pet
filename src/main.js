import Vue from 'vue'
import { Swipe, SwipeItem,IndexList, IndexSection} from 'mint-ui';
import App from './App'
import store from './store'
import router from './router'
import '../static/js/gVerify'

Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
});
