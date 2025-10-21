<template>
  <div class="right-bar">
    <TitleTempInner v-bind:infors="infors" v-bind:lists="lists"></TitleTempInner>
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
        url: "https://www.jimei.com.tw/",
        webName: "建設公司首頁形象網站",
        skill: "-網頁設計/切版---使用工具 html/css/jquery/sketch/ps",
        infor:
          "建設以台灣觀點與國際接軌，從領先思考出發，用心成為台灣建築界的先鋒",
        pic: "./static/images/build.jpg",
        pic2: "http://www.hank.url.tw/img/001-2.jpg",
        link: "/webdeign"
      }
    };
  }
};
</script>
<style scoped>
</style>
