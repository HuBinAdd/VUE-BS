import Vue from 'vue';
import App from './app';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Select,
  Option,
  Input,
  DatePicker,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Form,
  FormItem,
} from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Breadcrumb, { size: 'small' });
Vue.use(BreadcrumbItem, { size: 'small' });
Vue.use(Button, { size: 'small' });
Vue.use(Select, { size: 'small' });
Vue.use(Option, { size: 'small' });
Vue.use(Input, { size: 'small' });
Vue.use(DatePicker, { size: 'small' });
Vue.use(Table, { size: 'small' });
Vue.use(TableColumn, { size: 'small' });
Vue.use(Pagination, { size: 'small' });
Vue.use(Dialog, { size: 'small' });
Vue.use(Form, { size: 'small' });
Vue.use(FormItem, { size: 'small' });
Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
