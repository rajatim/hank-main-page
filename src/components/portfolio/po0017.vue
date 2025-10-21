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
        url: "http://yaprecious.com/",
        urlName2: "Behance",
        url2: "https://www.behance.net/gallery/122377115/spa-ui-designweb-design/modules/695885319",
        webName: "Second Life 形象官網",
        skill: "UI/UX Design---使用工具 photoshop/Figma/invision/wordpress",
        infor:
          "「做一家有使命的企業：普及美麗，守護健康，奉獻愛心！」為錏鉑斯的經營核心，錏鉑斯spa創辦人，擁有美容24年開spa店的資歷！用專業承載健康和傳播美麗，將中醫的博大精深文化和理念全方位融入到錏鉑斯品牌和產品中，這裡的美容師秉持專業與細膩的服務態度替您服務，給您最頂級的呵護！您的美麗心願，就讓錏鉑斯spa來替您完成！",
        pic: "./static/images/spa01.jpg",
        pic2: "./static/images/spa02.jpg",
        pic3: "./static/images/spa03.jpg",
        link: "/webdeign"
      }
    };
  }
};
</script>
<style scoped>
</style>