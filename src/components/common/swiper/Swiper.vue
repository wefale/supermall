<template>
  <div class="swiper">
    <ul class="images">
      <li class="item">
        <slot name="bg"></slot>
      </li>
    </ul>
    <span class="left-icon">
      <i @click="leftClick()" class="fa-solid fa-chevron-left"></i>
    </span>
    <span class="right-icon">
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
      document.querySelector(".images").prepend(lists[lists.length - 1]);
    },
    rightClick() {
      let lists = document.querySelectorAll(".item");
      document.querySelector(".images").appendChild(lists[0]);
    },
  },
  mounted() {
    this.mark = setInterval(() => {
      this.rightClick()
    }, 3000)
  }, 
  destroyed() {
    clearInterval(this.mark)
  }
};
</script> 

<style scoped>
.swiper {
  width: 97%;
  height: 211px;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

.images {
  position: absolute;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 400%;
}

.images .item {
  display: inline-block;
  list-style: none;
  transition: 0.5s;
}

.swiper img {
  width: 365px;
  height: 211px;
}

span {
  width: 35px;
  height: 211px;
  background-color: rgba(240, 233, 233, 0.473);
}

span i {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(230, 234, 238);
  font-size: 20px;
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
</style>