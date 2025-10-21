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
        // url: "#",
        webName: "新美齊物業管理內頁",
        skill: "-網頁設計/切版---使用工具 html/css/jquery/sketch/ps",
        infor:
          "追求完美是一種態度--我們的老闆要求卓越,要求完美是一種內化的企業文化進來成為新美齊的一份子自然感受得到",
        pic: "./static/images/apple02.jpg",
        link: "/webdeign"
      }
    };
  }
};
</script>
<style scoped>
</style>