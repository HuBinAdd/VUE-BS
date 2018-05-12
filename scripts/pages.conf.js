/**
 * For each entry, `key` is the chunk name,
 * `value.entry` is the webpack entry,
 * `value.html` is the options object passed to HtmlWebpackPlugin.
 */

module.exports = {
  'index': {
    entry: './src/index',
    html: {
      class: 'index',
      title: 'Vue demo',
      desc: '',
    },
  },
  'login': {
    entry: './src/login',
    html: {
      class: 'index',
      title: 'Vue demo',
      desc: '',
    },
  },
  'dashboard': {
    entry: './src/dashboard',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  '403': {
    entry: './src/403',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  '404': {
    entry: './src/404',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'baseCharts': {
    entry: './src/baseCharts',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'baseForm': {
    entry: './src/baseForm',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'baseTable': {
    entry: './src/baseTable',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'dragList': {
    entry: './src/dragList',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'markdown': {
    entry: './src/markdown',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'permission': {
    entry: './src/permission',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'tabs': {
    entry: './src/tabs',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'upload': {
    entry: './src/upload',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
  'vueEditor': {
    entry: './src/vueEditor',
    html: {
      class: '',
      title: '',
      desc: '',
    },
  },
};
