<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <Swiper class="home-swiper">
      <div slot="bg" v-for="(item, index) in imgURL" :key=index>
        <img :src=item alt="" />
      </div>
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
      recommends: [],
      imgURL: [
        "assets/img/home.jpg",
        "assets/img/school.jpg",
        "assets/img/moon.jpg",
      ],
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