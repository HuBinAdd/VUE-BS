import Vue from 'vue';
import App from './app';
import { Row, Col, Card, Progress, Button, Table, Checkbox, TableColumn } from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Row, { size: 'small' });
Vue.use(Col, { size: 'small' });
Vue.use(Card, { size: 'small' });
Vue.use(Progress, { size: 'small' });
Vue.use(Button, { size: 'small' });
Vue.use(Table, { size: 'small' });
Vue.use(Checkbox, { size: 'small' });
Vue.use(TableColumn, { size: 'small' });
Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
