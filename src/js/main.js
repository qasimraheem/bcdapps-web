// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueFullPage from 'vue-fullpage.js'
import vSelect from 'vue-select'
import VueCarousel from 'vue-carousel';
import VModal from 'vue-js-modal'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(VModal)
Vue.use(VueCarousel);
Vue.component('v-select', vSelect)

Vue.use(VueFullPage);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
