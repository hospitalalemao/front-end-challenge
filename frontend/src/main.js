import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';

import { routes } from './routes';

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

const router = new VueRouter({
  routes
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
