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

        webName: "SimpleMart 補貨APP",
        skill: "UI/UX Design---使用工具 Illustrator/Figma",
        infor:
          "Do something and get something when you attempt to complete a particular action. ",
        pic: "./static/images/TheNewsReplenishmentApp.jpg",
        link: "/appdesign"
      }
    };
  }
};
</script>
<style scoped>
</style>