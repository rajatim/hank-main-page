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
        url: "https://www.kerenna.com.tw/landing-page/",
        webName: "凱倫娜牙齒美白專科-KERENNA",
        skill: "網頁設計/切版---使用工具 css/sketch/wordpress/html/jquery",
        infor:
          "打造令人矚目的潔白笑容，其實可以更簡單！凱倫娜摒棄過去繁瑣的美白流程，研發出更簡單有效的牙齒美白系列，只需連續7天、每次30分鐘，就能給您超有感的牙齒亮白感受！",
        pic: "http://www.hank.url.tw/img/ggggggg.jpg",
        link: "/pages02"
      }
    };
  }
};
</script>
<style>
</style>