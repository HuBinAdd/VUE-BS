import Vue from 'vue';
import App from './app';
import { Tooltip, Dropdown, DropdownItem, DropdownMenu, Menu, MenuItem, Submenu, Tabs, TabPane } from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Tooltip, { size: 'small' });
Vue.use(Dropdown, { size: 'small' });
Vue.use(DropdownItem, { size: 'small' });
Vue.use(DropdownMenu, { size: 'small' });
Vue.use(Menu, { size: 'small' });
Vue.use(MenuItem, { size: 'small' });
Vue.use(Submenu, { size: 'small' });
Vue.use(Tabs, { size: 'small' });
Vue.use(TabPane, { size: 'small' });
Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
