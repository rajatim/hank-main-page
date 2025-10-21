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
        urlName: "UI/UX Design Proposal",
        // url: "http://yaprecious.com/",
        webName: "News STUDIO A App",
        skill: "UI/UX Design---使用工具 Illustrator/Figma",
        infor:
          "重新規劃舊有APP得設計，利用眾多的問券訪談，讓使用者更佳有貼切感，以使用者為中心思想的去做更多的創新思考及設計。全新改版提案，將原先動線不明，活動銷售太過複雜...等，重新介面升級，並以會員導向為目標的去規劃及設計，增強使用會員的黏著度。",
        pic: "./static/images/STUDIARedesigninner.jpg",
        link: "/appdesign"
      }
    };
  }
};
</script>
<style scoped>
</style>