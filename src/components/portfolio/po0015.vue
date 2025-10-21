<template>
  <div class="right-bar">
    <TitleTempInner v-bind:infors="infors"></TitleTempInner>
  </div>
</template>
<script>
import Vue from "vue";
import $ from "jquery";
import TitleTempInner from "../card/TitleTempInner.vue";
export default {
  name: "images",
  components: {
    TitleTempInner: TitleTempInner
  },
  data() {
    return {
      infors: {
        title: "A Digital",
        title2: "Creative Agency",
        p2: "Hello, this is my UI/UX project portfolio.",
        urlName: "網站連結",
        url: "https://www.8way.com.tw/#/",
        webName: "八方雲集形象網站",
        skill: "UI/UX Design---使用工具 photoshop/sketch/invision",
        infor:
          "八方雲集從創立至今一直秉持著「利他、分享、公益」的精神，協助肯努力的弱勢工作者開創生機，也讓這些弱勢者得以溫飽、改善生活，應證了「只要肯努力，水餃也能變元寶」的理念。同時我們也提供了消費者安全、 新鮮、美味、平價的餐點及安心飲食的用餐環境，消費者用銅板價就能享用的庶民飲食。",
        pic: "./static/images/8way01.jpg",
        pic2: "./static/images/8way02.jpg",
        pic3: "./static/images/8way03.jpg",
        link: "/webdeign"
      }
    };
  }
};
</script>
<style scoped>
</style>