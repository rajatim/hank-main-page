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
        // url: "http://yaprecious.com/",
        webName: "Vendor Portal",
        skill: "UI/UX Design---使用工具 Sketch/invision",
        infor:
          "提高生產效率，增加收入是每個企業的追求將多渠道訂單、可視化庫存、交貨明細、客戶數據等業務相關信息匯集在一起，帶來的好處顯而易見，管理訂單系統可以有效幫助銷售團隊更好地工作。",
        pic: "./static/images/vendorportal.jpg",
        pic2: "./static/images/vendorportal2.jpg",
        pic3: "./static/images/vendorportal3.jpg",
        pic4: "./static/images/vendorportal4.jpg",
        link: "/webdeign"
      }
    };
  }
};
</script>
<style scoped>
</style>