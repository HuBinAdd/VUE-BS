import Vue from 'vue';
import App from './app';
import { Form, FormItem, Input, Button } from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Form, { size: 'small' });
Vue.use(FormItem, { size: 'small' });
Vue.use(Input, { size: 'small' });
Vue.use(Button, { size: 'small' });
Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
