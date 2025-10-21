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
        urlName: "官網",
        url: "https://www.three.com.mo/index",
        urlName2: "Behance",
        url2: "https://www.behance.net/gallery/122377877/telecommunications-uiux-design/modules/695890851",
        webName: "Three Macau ",
        skill: "UI/UX Design---使用工具 photoshop/Figma/invision",
        infor:
          "和記電話（澳門）有限公司（澳門和記電話）是一家領先的流動電訊服務營辦商，透過覆蓋廣泛的 4G LTE和3G網絡，以「3」品牌為客戶提供高質素的話音及數據服務、具創意及多元化的流動通訊內容、國際長途電話及漫遊服務。澳門和記電話持續擴展網絡，其國際漫遊服務，遍及逾 280 個國家及地區，覆蓋範圍廣泛。澳門和記電話是和記電訊香港控股有限公司（香港聯合交易所股份代號︰215）的附屬公司，和記電訊香港控股為長江和記實業（香港聯合交易所股份代號：1）集團成員。",
        pic: "./static/images/three01.jpg",
        pic2: "./static/images/three02.jpg",
        pic3: "./static/images/three03.jpg",
        pic4: "./static/images/three04.jpg",
        pic5: "./static/images/three05.jpg",
        link: "/webdeign"
      }
    };
  }
};
</script>
<style scoped>
</style>