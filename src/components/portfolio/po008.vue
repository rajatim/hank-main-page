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
        url: "https://www.jeanresidence.com/tw/index#page2",
        webName: "新美齊集團-酒店式管理首頁",
        skill: "-網頁設計/切版---使用工具 html/css/jquery/sketch/ps",
        infor:
          "豪宅藝術的思維---紐約中央公園旁億萬富豪俱樂部One57倫敦海德公園旁全球最貴公寓One Hyde Park真豪宅，永遠聚焦都會大公園第一環台北核心綠肺大安森林公園旁，首座超規格精品酒店寓所不只限量稀有，更是絕無僅有",
        pic: "./static/images/1920-2.jpg",
        link: "/webdeign.vue"
      }
    };
  }
};
</script>
<style>
</style>