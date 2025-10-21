<template>
  <div class="right-bar">
    <TitleTemp v-bind:titles="titles4"></TitleTemp>
    <RecordList v-bind:lists="lists2"></RecordList>
  </div>
</template>
<script>
import $ from "jquery";
import RecordList from "./card/RecordList.vue";
import ModalTemp from "./card/ModalTemp.vue";
import TitleTemp from "./card/TitleTemp.vue";
export default {
  name: "images",

  data() {
    return {
      lists2: [
        {
          name: "Studio A",
          name_2: "App UI/UX Design",
          pic: "./static/images/STUDIOA.jpg",
          link: "/po0027"
        },
        {
          name: "SimpleMart",
          name_2: "App UI/UX Design",
          pic: "./static/images/simplesmart001.jpg",
          link: "/po0024"
        },
        {
          name: "The News Replenishment",
          name_2: "App UI/UX Design",
          pic: "./static/images/Replenishment.jpg",
          link: "/po0023"
        },
        {
          name: "Naturally Plus APP",
          name_2: "UI/UX APP",
          pic: "./static/images/Naturally-Plus.jpg",
          link: "/po0018"
        },
        {
          name: "超商 Event Page",
          name_2: "UI/UX Design",
          pic: "./static/images/EventPage.jpg",
          link: "/po0025"
        },
        {
          name: "STUDIO A App Proposal",
          name_2: "UI/UX App design",
          pic: "./static/images/STUDIOAAppRedesign.jpg",
          link: "/po0026"
        },
        {
          name: "Travel APP",
          name_2: "UI/UX design",
          pic: "./static/images/travel.jpg",
          link: "/po0020"
        },
        {
          name: "Benz Mercedes Me 小程序設計",
          name_2: "UI/UX design",
          pic: "./static/images/ben.jpg",
          link: "/po0021"
        },
        {
          name: "銷售家line＠",
          name_2: "網頁視覺設計/切版",
          pic: "./static/images/55555.jpg",
          link: "/po0013"
        },
      ],
      titles4: {
        name: "Focus on Design, ",
        name_2: "Crafting User Experiences with Heart",
        p: "Hello, this is my UI/UX project portfolio.",
        contect: "Contect me",
        big_title: "APP UI/UX 設計"
      }
    };
  },
  components: {
    RecordList: RecordList,
    TitleTemp: TitleTemp,
    ModalTemp: ModalTemp
  }
};
</script>
<style scoped>

</style>