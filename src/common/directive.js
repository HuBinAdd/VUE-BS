import Vue from 'vue';
// 使用 Event Bus
let bus = new Vue();

if (window.top && window.top.bus) {
  bus = window.top.bus;
}

window.bus = bus;

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted(el) {
    // 聚焦元素
    el.focus();
  },
});
