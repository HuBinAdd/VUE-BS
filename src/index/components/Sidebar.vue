<template>
  <div class="sidebar">
    <el-menu class="sidebar-el-menu" :default-active="activeRoutes" :collapse="collapse" background-color="#324157"
             text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened @select="onOpen">
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
            </template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
              {{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        collapse: false,
        activeRoutes: '',
        items: [
          {
            icon: 'el-icon-setting',
            index: 'dashboard',
            title: '系统首页',
            disabled: true,
            src: './dashboard.html',
          },
          {
            icon: 'el-icon-tickets',
            index: 'table',
            title: '基础表格',
            src: './baseTable.html',
          },
          {
            icon: 'el-icon-message',
            index: 'tabs',
            title: 'tab选项卡',
            src: './tabs.html',
          },
          {
            icon: 'el-icon-date',
            index: '3',
            title: '表单相关',
            subs: [
              {
                index: 'form',
                title: '基本表单',
                src: './baseForm.html',
              },
              {
                index: 'editor',
                title: '富文本编辑器',
                src: './vueEditor.html',
              },
              {
                index: 'markdown',
                title: 'markdown编辑器',
                src: './markdown.html',
              },
              {
                index: 'upload',
                title: '文件上传',
                src: './upload.html',
              },
            ],
          },
          {
            icon: 'el-icon-star-on',
            index: 'charts',
            title: 'schart图表',
            src: './baseCharts.html',
          },
          {
            icon: 'el-icon-rank',
            index: 'drag',
            title: '拖拽列表',
            src: './dragList.html',
          },
          {
            icon: 'el-icon-warning',
            index: 'permission',
            title: '权限测试',
            src: './permission.html',
          },
          {
            icon: 'el-icon-error',
            index: '404',
            title: '404页面',
            src: './404.html',
          },
        ],
      };
    },
    methods: {
      getItem(item, items = this.items) {
        let obj = {};
        for (let i = 0; i < items.length; i++) {
          const value = items[i];
          if (value.index === item) {
            obj = value;
            break;
          }
          if (value.subs) {
            obj = this.getItem(item, value.subs);
          }
        }
        return obj;
      },
      onOpen(item) {
        const obj = this.getItem(item);
        bus.$emit('pushWindow', {
          icon: obj.icon,
          disabled: obj.disabled,
          index: obj.index,
          title: obj.title,
          src: obj.src,
        });
      },
    },
    created() {
      // 通过 Event Bus 进行组件间通信，来折叠侧边栏
      bus.$on('collapse', msg => {
        this.collapse = msg;
      });
      bus.$on('resetWindow', msg => {
        this.activeRoutes = msg.index;
      });
    },
  };
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
  }

  .sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
  }

  .sidebar > ul {
    height: 100%;
    overflow: auto;
  }
</style>
