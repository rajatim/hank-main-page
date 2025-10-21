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
        urlName: "App建置中",
        // url: "http://yaprecious.com/",
        webName: "超商 Event Page",
        skill: "UI/UX Design---使用工具 Illustrator/Figma",
        infor:
          "為了提升APP 開啟率/下載量，推廣品牌/商品/服務 營造趣味性活化會員點數，重新規劃任務牆新頁面，利用遊戲化的設計，讓使用者增加興趣及點擊率。",
        pic: "./static/images/EventPageinner.jpg",
        link: "/appdesign"
      }
    };
  }
};
</script>
<style scoped>
</style>