<template>
  <div id='tabbar'>
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  name: 'TabBar'
}
</script>

<style scoped>
#tabbar {
  display: flex;
  height: 55px;

  box-shadow: 0 -1px 8px rgba(181, 179, 179, 0.897);
}

</style>