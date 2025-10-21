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
        url: "http://yuancai-culture-work.com/",
        webName: "逸臻雅集",
        skill: "網頁設計/切版---使用工具 wordpress / sketch / ps",
        infor:
          "收藏是件賞心樂事，無論是書畫、器物或雜項，都必需先靜觀其形、體察其象、明其格律、通其流變，才能識其真趣、辨其況味、究其殊異、品其韻致，終至於得其宗旨、悟其意涵，始見雅翫之情性。而「逸臻雅集」即是由一群喜 好收藏的朋友們相互切磋、交流，凝聚而成，這種「以物會友」的情感融匯，三五成群，不定期促膝聚首，的確吸引了許多志同道合的朋友們加入，各具所藏，增長見識，是以有雅集之會。",
        pic: "http://www.hank.url.tw/img/po02-innerpage.jpg",
        link: "/"
      }
    };
  }
};
</script>
