import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import BootstrapVue  from 'bootstrap-vue'
import VueChatScroll from 'vue-chat-scroll'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/loading.css'
import './assets/loading-btn.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueChatScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
