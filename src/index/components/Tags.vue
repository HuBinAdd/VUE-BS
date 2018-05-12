<template>
  <div class="tags" v-if="showTags">
    <el-tabs v-model="showTags" type="border-card" @tab-remove="closeTags">
      <el-tab-pane
        v-for="(item, index) in tagsList"
        :key="item.index"
        :label="item.title"
        :name="item.index"
        :closable="!item.disabled"
      >
        <iframe :src="item.src" frameborder="0"></iframe>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tagsList: [],
        activeTag: '',
      };
    },
    methods: {
      // 关闭单个标签
      closeTags(index = this.activeTag) {
        const arr = this.tagsList.filter(item => item.index !== index);
        this.tagsList = arr;
      },
      // 设置标签
      setTags(route) {
        const isExist = this.tagsList.some(item => item.index === route.index);
        if (!isExist) {
          this.tagsList.push({
            ...route,
          });
        }
        this.activeTag = route.index;
      },
      setSidebar() {
        bus.$emit('resetWindow', {
          index: this.showTags,
        });
      },
      handleTags(command) {
        command === 'other' ? this.closeOther() : this.closeAll();
      },
    },
    computed: {
      showTags: {
        get: function () {
          if (this.tagsList.some(item => item.index === this.activeTag)) {
            return this.activeTag;
          }
          if (this.tagsList.length > 0) {
            return this.tagsList[this.tagsList.length - 1].index;
          }
          return this.activeTag;
        },
        set: function (v) {
          this.activeTag = v
        }
      },
    },
    beforeUpdate() {
      this.setSidebar();
    },
    created() {
      // this.setTags(this.$route);
      bus.$on('pushWindow', msg => {
        this.setTags(msg);
      });
      bus.$on('closeWindow', msg => {
        this.closeTags(msg);
      });
    },
  };
</script>


<style>
  .tags {
    position: relative;
    overflow: hidden;
    background: #fff;
    height: 100%;
  }

  .el-tabs {
    height: 100%;
  }

  .el-tabs--border-card>.el-tabs__header{
    z-index: 2;
  }

  .el-tabs__item.is-active {
    border-top: 3px solid #409EFF;
  }

  .el-tabs--border-card>.el-tabs__content {
    position: absolute;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
  }

  .el-tab-pane {
    height: 100%;
    iframe{
      width: 100%;
      height: 100%;
    }
  }
</style>
