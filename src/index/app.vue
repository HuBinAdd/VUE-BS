<template>
  <div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <v-tags></v-tags>
    </div>
  </div>
</template>

<script>
  import vHead from './components/Header';
  import vSidebar from './components/Sidebar';
  import vTags from './components/Tags';

  export default {
    data() {
      return {
        collapse: false,
      };
    },
    components: {
      vHead, vSidebar, vTags,
    },
    created() {
      bus.$on('collapse', msg => {
        this.collapse = msg;
      });
      this.$axios.post('http://g.cn', {
        page: this.cur_page,
      }).then(() => {
        // 输出mockData
      });
    },
  };
</script>

<style>
  .content-box {
    overflow: hidden;
  }
</style>
