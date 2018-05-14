import Vue from 'vue';
import App from './app';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Select,
  Option,
  Radio,
  RadioGroup,
  CheckboxGroup,
  Checkbox,
  Input,
  DatePicker,
  TimePicker,
  Cascader,
  Switch,
  Form,
  FormItem,
  Col,
} from 'element-ui';
import axios from 'axios';
import 'babel-polyfill';

Vue.use(Breadcrumb, { size: 'small' });
Vue.use(BreadcrumbItem, { size: 'small' });
Vue.use(Button, { size: 'small' });
Vue.use(Select, { size: 'small' });
Vue.use(Option, { size: 'small' });
Vue.use(Radio, { size: 'small' });
Vue.use(RadioGroup, { size: 'small' });
Vue.use(Checkbox, { size: 'small' });
Vue.use(CheckboxGroup, { size: 'small' });
Vue.use(Input, { size: 'small' });
Vue.use(DatePicker, { size: 'small' });
Vue.use(TimePicker, { size: 'small' });
Vue.use(Cascader, { size: 'small' });
Vue.use(Switch, { size: 'small' });
Vue.use(Form, { size: 'small' });
Vue.use(FormItem, { size: 'small' });
Vue.use(Col, { size: 'small' });

Vue.prototype.$axios = axios;

const vm = new Vue({
  render: h => h(App),
}).$mount();
document.body.appendChild(vm.$el);
