<template>
  <div id="app">
    <router-view/>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabbar/MainTabBar.vue';

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data() {
    return {
      data: '你好'
    }
  }
}
</script>

<style scoped>
@import "assets/css/base.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";


</style>>
