const fs = require('fs');
const path = require('path');
const page = [ 'images',
  'js',
  'css',
  'comments' ];
const getHumpName = component => component.replace(/(?!^)([A-Z])/g, '-$1').toLowerCase();

const obj = {};

function fileDisplay(fileName) {
  const file = path.resolve(__dirname, '../src/' + fileName);
  const routers = fs.readdirSync(file);
  routers.map((value, index) => {
    const filedir = path.join(file, value);
    const stats = fs.statSync(filedir);
    const isFile = stats.isFile(); // 是文件
    const isDir = stats.isDirectory(); // 是文件夹
    const name = getHumpName(value)
    if (isFile && name === 'index.js') {
      obj[ fileName.substr(1) ] = {
        entry: './src' + fileName,
        html: {
          class: fileName.substr(1) === 'index' ? 'index' : '',
          title: '',
          desc: '',
        },
      };
    }
    if (isDir && page.every(v => v != name)) {
      fileDisplay(fileName + '/' + value);
    }
  });
}

fileDisplay('');

module.exports = obj;
