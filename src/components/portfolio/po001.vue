<template>
  <div class="right-bar">
    <TitleTempInner v-bind:infors="infors"></TitleTempInner>
  </div>
</template>
<script>
import $ from "jquery";
import TitleTempInner from "../card/TitleTempInner.vue";
export default {
  name: "images",
  data() {
    return {
      infors: {
        title: "A Digital",
        title2: "Creative Agency",
        p2: "Hello, this is my UI/UX project portfolio.",
        urlName: "網站連結",
        url: "http://teakingshop.com/",
        webName: "茶王舖-Teaking",
        skill: "網頁設計/切版---使用工具 wordpress / sketch / ps",
        infor:
          "「茶王舖」以創新的經營理念，融合與大地共榮的樸實精神，並與東方的禪意理念結合，成為獨特的茶禪精神。茶職人追求極致完美，茶道已成為台灣文化意涵。走進「茶王舖」，百年文化的豐富底藴，在古色古香的店家空間裡，體驗茗茶文化與人文藝術的交揉。這個是專屬於愛茶人的空間裡，店家展示許多珍藏的古茶餅，配合圖片介紹，可以自由玩味或由專業人員服務，挑選適合您品味的茶。茶王舖所挑選的茶葉，不只是有大家所熟悉的加工而已，甚至還有經過家傳第三代老師傅的傳統手工炭焙，因此沖泡起來有獨特的香氣，入喉則有你未曾有的甘甜。",
        pic: "./static/images/po01-innerpage.jpg",
        link: "/webdeign.vue"
      }
    };
  },
  components: {
    TitleTempInner: TitleTempInner
  }
};
</script>
<style scoped>
</style>