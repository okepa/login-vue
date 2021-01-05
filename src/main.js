// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VueCookie from 'vue-cookie'
import VeeValidate from 'vee-validate';
import 'vuetify/dist/vuetify.min.css'
import Navmenu from './components/Navmenu/Navmenu.vue'
import LoginStatus from './components/Login/LoginStatus.vue'

export const EventBus = new Vue();

Vue.use(VeeValidate);
Vue.use(Vuetify)
Vue.use(VueCookie)

Vue.component('navmenu', Navmenu)
Vue.component('loginstatus', LoginStatus)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
