<template>
  <div id='home-swiper'>
    <Swiper class="home-swiper">
      <img slot="bg1" src="../../../assets/img/home.jpg" alt="" />
      <img slot="bg2" src="../../../assets/img/school.jpg" alt="" />
      <img slot="bg3" src="../../../assets/img/moon.jpg" alt="" />
    </Swiper>
  </div>
</template>
<script>
import Swiper from "components/common/swiper/Swiper.vue";

export default {
  name: 'HomeSwiper',
  components: {
    Swiper
  },
}
</script>

<style scoped>

</style>