<template>
  <div id="app">
    <MainTabBar/>
  </div>
</template>

<script>
import { request } from 'network/request';
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue';

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  data() {
    return {
      data: '你好傻逼'
    }
  },
  created() {
    request({
      url: '/home/multidata'
    })
      .then(res => {
        console.log(res);
        this.data = res
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>

<style scoped>
@import "assets/css/base.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";


</style>>
