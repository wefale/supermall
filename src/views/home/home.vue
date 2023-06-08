<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <Swiper class="home-swiper">
      <img slot="bg1" src="../../assets/img/home.jpg" alt="" />
      <img slot="bg2" src="../../assets/img/school.jpg" alt="" />
      <img slot="bg3" src="../../assets/img/moon.jpg" alt="" />
    </Swiper>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home";
import Swiper from "components/common/swiper/Swiper.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
  },
  data() {
    return {
      // result: null
      banners: [],
      recommends: []
    };
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata()
      .then((res) => {
        console.log(res);
        // this.result = res
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