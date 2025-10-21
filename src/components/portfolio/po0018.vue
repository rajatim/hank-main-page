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
        webName: "Naturally Plus APP",
        skill: "UI/UX Design---使用工具 photoshop/Figma/invision",
        infor:
          "環貫綠佳利以提供高品質可信頼的保健產品為宗旨，將健康促進之相關產品，以會員制的方式，直接向對產品益處感同身受者銷售。自主創業家們透過對產品的親身體驗，將產品的魅力，以面對面的方式傳達給他人。並以此超越國籍、性別與種族的隔閡，為更多人的健康作貢獻。這是環貫綠佳利的願望，也是環貫綠佳利發展的源泉與動力。",
        pic: "./static/images/green01.jpg",
        pic2: "./static/images/green02.jpg",
        pic3: "./static/images/green03.jpg",
        pic4: "./static/images/green04.jpg",
        pic5: "./static/images/green05.jpg",
        link: "/appdesign"
      }
    };
  }
};
</script>
<style scoped>
</style>