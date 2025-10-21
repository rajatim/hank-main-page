<template>
  <div class="right-bar">
    <TitleTemp v-bind:titles="titles"></TitleTemp>
    <RecordList v-bind:lists="lists2"></RecordList>
  </div>
</template>
<script>
import $ from "jquery";
import RecordList from "./card/RecordList.vue";
import TitleTemp from "./card/TitleTemp.vue";
import ModalTemp from "./card/ModalTemp.vue";
export default {
  name: "images",

  data() {
    return {
      lists2: [
        {
          name: "vendor portal",
          name_2: "vendor-portal dashbord design",
          pic: "./static/images/Vendorportal000.jpg",
          link: "/po0019"
        },
      ],
      titles: {
        name: "A Digital",
        name_2: "Creative Agency",
        p2: "Hello, this is my UI/UX project portfolio.",
        contect: "Contect me",
        big_title: "功能型網站"
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