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
        webName: "STUDIO A App Proposal",
        skill: "UI/UX Design---使用工具 Illustrator/Figma",
        infor:
          "提案並重新規劃舊有APP得設計。打造一個全新的電商App",
        pic: "./static/images/STUDIOAAppRedesigninner.jpg",
        link: "/appdesign"
      }
    };
  }
};
</script>
<style scoped>
</style>