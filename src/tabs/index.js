import Vue from 'vue';
import App from './app';
import { Breadcrumb, BreadcrumbItem, Tabs, TabPane, Table, TableColumn, Button } from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Breadcrumb, { size: 'small' });
Vue.use(BreadcrumbItem, { size: 'small' });
Vue.use(Tabs, { size: 'small' });
Vue.use(TabPane, { size: 'small' });
Vue.use(Table, { size: 'small' });
Vue.use(TableColumn, { size: 'small' });
Vue.use(Button, { size: 'small' });
Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
