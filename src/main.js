import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import HeadingFunctional from './plugins/heading';

Vue.config.productionTip = false
// 事件总线
Vue.prototype.$bus = new Vue();
Vue.use(ElementUI);
Vue.use(HeadingFunctional);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
