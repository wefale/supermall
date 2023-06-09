<template>
  <div class="swiper">
    <ul class="images">
      <li class="item">
        <slot name="bg1"></slot>
      </li>
      <li class="item">
        <slot name="bg2"></slot>
      </li>
      <li class="item">
        <slot name="bg3"></slot>
      </li>
    </ul>
    <span class="icon left-icon">
      <i @click="leftClick()" class="fa-solid fa-chevron-left"></i>
    </span>
    <span class="icon right-icon">
      <i @click="rightClick()" class="fa-solid fa-chevron-right"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  data(){
    return {
      mark: null
    } 
  },
  methods: {
    leftClick() {
      let lists = document.querySelectorAll(".item");
      let images = document.querySelector(".images");
      images.prepend(lists[lists.length - 1]);
    },
    rightClick() {
      let lists = document.querySelectorAll(".item");
      let images = document.querySelector(".images");
      images.appendChild(lists[0]);
    },
  }
};
</script> 

<style scoped>
.swiper {
  width: 100%;
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
}

.images {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 305%;
}

.item {
  width: 33%;
  list-style: none;
  display: inline-block;
}

.item img {
  width: 100%;
  aspect-ratio: 16/9;
}

.icon {
  width: 35px;
  height: 100%;
  background-color: rgba(240, 233, 233, 0.473);
}

.left-icon {
  position: absolute;
  left: 0;
  top: 0;
}

.right-icon {
  position: absolute;
  right: 0;
  top: 0;
}

.icon i {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(230, 234, 238);
  font-size: 20px;
}

</style>