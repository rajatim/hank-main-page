<template>
  <div class="right-bar">
    <TitleTempInner v-bind:infors="infors" v-bind:lists="lists"></TitleTempInner>
    <ul class="banner-wrap display">
      <li v-for="(item, index) in lists">
        <img v-bind:src="item.pic" />
      </li>
    </ul>
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
        // urlName: "銷售家頁面切版",
        // url: "http://www.hank.url.tw/ui2/index.html",
        webName: "LINE@ 銷售網站",
        skill: "-網頁設計/切版---使用工具 html/css/jquery/sketch/ps",
        infor:
          "建設以台灣觀點與國際接軌，從領先思考出發，用心成為台灣建築銷售業的先鋒",
        pic: "./static/images/ggggg.jpg",
        link: "/appdesign"
      }
    };
  }
};
</script>
<style scoped>
</style>