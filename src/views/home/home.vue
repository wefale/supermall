<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <Swiper :banners="banners" />
    <RecommendViews :recommends="recommends" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Swiper from "components/common/swiper/Swiper.vue";
import RecommendViews from "./childHome/RecommendViews.vue";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    RecommendViews
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata()
      .then((res) => {
        console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>