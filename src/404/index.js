import Vue from 'vue';
import App from './app';
import { Button } from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Button, { size: 'small' });
Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
