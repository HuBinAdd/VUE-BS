import Vue from 'vue';
import App from './app';
import { Breadcrumb, BreadcrumbItem, Upload, Dialog, Button } from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Breadcrumb, { size: 'small' });
Vue.use(BreadcrumbItem, { size: 'small' });
Vue.use(Upload, { size: 'small' });
Vue.use(Dialog, { size: 'small' });
Vue.use(Button, { size: 'small' });
Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
