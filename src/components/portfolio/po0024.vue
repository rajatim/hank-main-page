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
        urlName: "App建置中002",
        // url: "http://yaprecious.com/",
        webName: "零售電子支付APP",
        skill: "UI/UX Design---使用工具 Figma",
        infor:
          "2020 年受到疫情影響，民眾為降低接觸傳染風險並維持安全社交距離，選擇不需任何實體媒介即可完成交易的行動支付比例大幅提高，加上數位金融技術成熟度提高，帶動 2020 年台灣行動支付與電子支付普及與應用速度顯著攀升。此次專案我們將整理眾多使用者意見及想法，利用設計思維流程(Design thinking)，統整篩選出最有利使用者及客戶的資訊，搭配團購、Scan&Go、預購等功能，重新打造一個全新的電子支付APP。",
        pic: "./static/images/simplesmart.jpg",
        link: "/appdesign",
        iframeLink:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Ft9sEHNkEmFLN2yIdlCpXj1%2F%255BNaturallyPlus-App-%252F-%25E7%25B6%25A0%25E4%25BD%25B3%25E5%2588%25A9-App%255D-2023.01.11-(Internal)%3Fpage-id%3D872%253A120470%26node-id%3D872-123060%26viewport%3D-472%252C283%252C0.18%26t%3DD2s7ggXHc2H36g3r-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D2642%253A322392%26show-proto-sidebar%3D1"
      }
    };
  }
};
</script>
<style scoped>
</style>