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
        url: "https://www.gmclogistics.com/",
        webName: "航運首頁",
        skill: "-網頁設計/切版---使用工具 wordpress/sketch/ps",
        infor:
          "1986年成立以來，致力於提供專業的國際海運、空運物流運輸服務，並以美國線的海空運莊家聞名業界，是全台灣第一家通過美國海關貨物安檢(24-Hour AMS)的Automated NVOCC Carrier。目前除了在台北、桃園機場及台中設有辦公室，全球擁有多國代理，可提供各種航線專業化、高品質、可信賴的海、空運服務，以創造窩心的「GMC服務體驗」。",
        pic: "./static/images/009.jpg",
        link: "/webdeign.vue"
      }
    };
  }
};
</script>
<style>
</style>