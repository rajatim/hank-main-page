<template>
  <div class="right-bar">
    <TitleTemp v-bind:titles="titles3"></TitleTemp>
    <RecordList v-bind:lists="lists2"></RecordList>
  </div>
</template>
<script>
import $ from "jquery";
import ModalTemp from "./card/ModalTemp.vue";
import RecordList from "./card/RecordList.vue";
import TitleTemp from "./card/TitleTemp.vue";
export default {
  name: "images",

  data() {
    return {
      lists2: [
        {
          name: "Three Macao",
          name_2: "UI/UX Design",
          pic: "./static/images/threefu.png",
          link: "/po0016"
        },
        {
          name: "聖保羅烘焙花園",
          name_2: "UI/UX Design",
          pic: "./static/images/santpaulpage.jpg",
          link: "/po0014"
        },
        {
          name: "凱倫納牙齒美白",
          name_2: "凱倫納-切版",
          pic: "http://www.hank.url.tw/img/po03.jpg",
          link: "/po005"
        },
        {
          name: "AXIO",
          name_2: "AXIO-網頁視覺設計/切版",
          pic: "http://www.hank.url.tw/img/po13.jpg",
          link: "/axiopo"
        },
        // {
        //   name: "UDADA",
        //   name_2: "油大大-網頁切版及商品banner設計",
        //   pic: "http://www.hank.url.tw/img/G0W30.jpg",
        //   link: "/po009"
        // }
      ],
      titles3: {
        name: "A Digital",
        name_2: "Creative Agency",
        p: "Hello, this is my UI/UX project portfolio.",
        contect: "Contect me",
        big_title: "購物網站"
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