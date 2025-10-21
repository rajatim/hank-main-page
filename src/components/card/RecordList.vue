<template>
  <div class="portfolio-wrap">
    <div class="transition-style" v-for="(item, rid) in lists">
      <router-link v-bind:to="item.link">
        <div class="card-pofolio-wrap">
          <div class="top">
            <!-- :style="{backgroundImage:`url(${item.pic})`}" -->
            <img class="newsphoto" v-bind:src="item.pic" alt />
          </div>
          <div class="right-txt bottom">
            <div class="en-title">{{ item.name }}</div>
            <p>{{ item.name_2 }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["lists"],
  data() {
    return {};
  }
};
</script>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.portfolio-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 95%;
  margin-right: auto;
}
@media screen and (max-width: 950px) {
  .portfolio-wrap {
    width: 100%;
  }
}
.portfolio-wrap > div:nth-child(even) {
  margin-top: 120px;
  margin-bottom: -100px;
}
.swiper-slide {
  overflow: visible !important;
}
.swiper-button-next.swiper-button-black,
.swiper-button-prev.swiper-button-black {
  --swiper-navigation-color: #fff;
}
.swiper-container-flip {
  overflow: visible;
  height: 400px;
}
.transition-style {
  width: 48%;
  animation: fadeIn 2s both;
  animation-delay: 1.2s;
}
.card-pofolio-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 840px) {
  .transition-style {
    width: 80%;
  }
  .portfolio-wrap {
    justify-content: center;
  }
  .portfolio-wrap > div:nth-child(even) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
}
@media screen and (max-width: 500px) {
  .transition-style {
    width: 100%;
  }
}

.top {
  -webkit-box-shadow: -34px 28px 36px rgba(0, 0, 0, 0.15);
  box-shadow: -34px 28px 36px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: auto;
}
.top img {
  width: 100%;
  object-fit: cover;
  border-radius: 0px;
  overflow: hidden;
}

.card-pofolio-wrap .left-img img {
  width: 100%;
}
.card-pofolio-wrap .right-txt {
  color: #fff;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  border-radius: 0px 0px 20px 20px;
}

.poforlio-wrap {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: row;
  -ms-flex-direction: column;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.poforlio-wrap li {
  background-color: rgba(14, 14, 14, 0.3);
  border-radius: 5px;
  height: 190px;
  width: 40%;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  /* filter: blur(20px); */
  backdrop-filter: blur(70px);
}
.poforlio-wrap li .poforlio-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.poforlio-wrap li .poforlio-box .left-img {
  max-width: 300px;
  width: 100%;
}
.poforlio-wrap li .poforlio-box .left-img img {
  width: 100%;
  transform: translate(-120px, 30px) scale(1.9);
}
.right-txt {
  text-align: left;
  color: #fff;
}
.right-txt .en-title {
  font-size: 32px;
  font-weight: 1000;
  transition: 1s;
  line-height: 42px;
}
.right-txt p {
  font-size: 15px;
  transition: 1s;
  margin-top: 12px;
}
.transition-style {
  transition: 1.5s;
}
.transition-style a {
  text-decoration: none;
}
.transition-style:hover {
  transform: translateY(-30px);
  transition: 1s;
}
.transition-style:hover .top {
  filter: grayscale(0);
}
.transition-style:hover .en-title {
  transition: 1s;
  letter-spacing: 1px;
}
.transition-style:hover .right-txt p {
  transform: translateY(-1px);
  transition: 1s;
  letter-spacing: 1px;
}
.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateX(50px);
  opacity: 0;
}
</style>
