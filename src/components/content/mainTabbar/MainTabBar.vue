<template>
  <div class="main-tab-bar">
    <TabBar>
      <TabBarItem path="/home" activeColor="deeppink">
        <i class="fa-sharp fa-solid fa-house"></i>
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/classify" activeColor="deeppink">
        <i class="fa-solid fa-list"></i>
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="deeppink">
        <i class="fa-solid fa-cart-shopping"></i>
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="deeppink">
        <i class="fa-solid fa-user"></i>
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scoped>
.main-tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  background-color: #f6f6f6;
  z-index: 100;
}
</style>