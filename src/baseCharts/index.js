import Vue from 'vue';
import App from './app';
import { Breadcrumb, BreadcrumbItem } from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Breadcrumb, { size: 'small' });
Vue.use(BreadcrumbItem, { size: 'small' });
Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
