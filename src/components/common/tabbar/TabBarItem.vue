<template>
  <div class="tabbaritem" @click="itemClick()">
    <div :style="activeStyle">
      <slot></slot>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isClick: true
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      if(this.isClick){
        this.isClick = false;
        this.$router.push(this.path);

        // 也可设置计时器，一定时间后再使用
        setTimeout(() => {
          this.isClick = true
        }, 1000)
      }
    }
  }
};
</script>

<style scoped>
.tabbaritem {
  flex: 1;
  color: #555;
  text-align: center;
  padding-top: 10px;
  font-size: 12px;
}

.tabbaritem i {
  font-size: 20px;
}
</style>