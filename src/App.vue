<template>
  <div id="app">
    {{ data }}
  </div>
</template>

<script>
import { request } from './network/request';

export default {
  name: 'App',
  components: {
    
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
@import "./assets/css/base.css";


</style>>
