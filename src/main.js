import Vue from 'vue'
import { Swipe, SwipeItem} from 'mint-ui';
import App from './App'
import store from './store'
import router from './router'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router
});
