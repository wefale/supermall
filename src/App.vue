<template>
  <div id="app">
    {{ data }}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      data: '你好傻逼'
    }
  }
}
</script>

<style>

</style>
