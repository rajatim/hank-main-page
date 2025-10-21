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
        url: "https://www.jeanresidence.com/tw/index#page3",
        webName: "新美齊集團-酒店式管理Park259首頁",
        skill: "-網頁設計/切版---使用工具 html/css/jquery/sketch/ps",
        infor:
          "創新頂尖建築美學首座作品「新象山」獲建築雙金獎榮耀成立專業物業管理團隊，以黑卡精神專寵住戶獨一無二尊榮體驗，量身訂製專屬服務回到家，也同時奢華入住飯店滿足您在家就能實現全球奢華行旅的夢",
        pic: "./static/images/1920.jpg",
        link: "/webdeign.vue"
      }
    };
  }
};
</script>
<style>
</style>