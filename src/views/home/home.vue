<template>
  <div id="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <HomeSwiper class="home-swiper"/>
    <RecommendViews :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "./childHome/HomeSwiper.vue";
import RecommendViews from "./childHome/RecommendViews.vue"

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendViews
  },
  data() {
    return {
      banners: [],
      recommends: []
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

.home-swiper {
  margin: 0 auto;
}

</style>