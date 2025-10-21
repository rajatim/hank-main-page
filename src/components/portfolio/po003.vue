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
        // urlName: "網站建置中",
        webName: "新美齊集團首頁-JEAN",
        skill: "網頁設計/切版---使用工具 html/jquery/css/sketch",
        infor:
          "將夢想中的都市藍圖變成街景中真實的感動與幸福，為居住者打造貼心、安全、高品質的生活起居環境是我們所有思考、設計與施工的出發點；期許成為超出業界標準、紀律與品質的“建築美學推動者”，打造出一個『新、美、齊』境界的美好城市。",
        pic: "./static/images/jeam01.jpg",
        link: "/webdeign.vue"
      }
    };
  }
};
</script>
<style>
</style>