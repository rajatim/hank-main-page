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
        // url: "#",
        webName: "Benz小程序設計",
        skill: "UI/UX Design---使用工具 Illustrator/Figma",
        infor:
          "The Scope of Work for me Club Platform Enhancement and Operations (“SOW”) is an integral part of the Purchase Contract (“Main Contract”) entered into between and by Mercedes-Benz (China) Ltd. and is effective as of 1st June 2019, with all the rights and obligations to be fully fulfilled and satisfied unless expired or earlier terminated by the Parties pursuant to the terms of this contract.  If there is any conflict between the Main Contract and this SOW, the Main Contract shall prevail. All IT services should be delivered to the following Legal Entities: Daimler Greater China Ltd., Mercedes-Benz (China) Ltd and Beijing Mercedes-Benz Sales Service Co. Ltd or any other Daimler associate legal entities.",
        pic: "./static/images/ben01.jpg",
        pic2: "./static/images/ben02.jpg",
        link: "/appdesign"
      }
    };
  }
};
</script>
<style scoped>
</style>