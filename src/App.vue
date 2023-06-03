<template>
  <div id="app">
    {{ data }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Request } from './network/request';

export default {
  name: 'App',
  components: {
    HelloWorld
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

<style>

</style>
