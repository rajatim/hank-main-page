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
        urlName: "網站建置中",
        // url: "https://www.kerenna.com.tw/landing-page/",
        webName: "聖保羅烘焙花園-電商網站",
        skill: "網頁設計/切版---使用工具 css/sketch/wordpress/html/jquery",
        infor:
          "聖保羅Q餅』榮獲iTQi比利時國際風味暨品質評鑑所，評鑑為《世界級風味絕佳認證》，是台灣中式糕餅類，唯一獲得星級獎章榮耀！",
        pic: "./static/images/sainpaul01.jpg",
        pic2: "./static/images/sainpaul02.jpg",
        pic3: "./static/images/sainpaul03.jpg",
        link: "/webdeign"
      }
    };
  }
};
</script>
<style scoped>
</style>