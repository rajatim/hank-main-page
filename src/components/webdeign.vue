




<template >
  <div class="right-bar">
    <TitleTemp v-bind:titles="titles2"></TitleTemp>
    <RecordList v-bind:lists="lists"></RecordList>
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
      lists: [
        {
          name: "Three Macao",
          name_2: "UI/UX Design",
          pic: "./static/images/threefu.png",
          link: "/po0016"
        },
        {
          name: "八方雲集形象官網",
          name_2: "八方雲集形象官網-UI/UX Design",
          pic: "./static/images/8way.jpg",
          link: "/po0015"
        },
        {
          name: "聖保羅烘焙花園",
          name_2: "UI/UX Design",
          pic: "./static/images/santpaulpage.jpg",
          link: "/po0014"
        },
        {
          name: "vendor portal",
          name_2: "vendor-portal dashbord design",
          pic: "./static/images/Vendorportal000.jpg",
          link: "/po0019"
        },
        {
          name: "SPA錏鉑斯身體美學官網/切版",
          name_2: "SPA錏鉑斯身體美學官網-UI/UX Design",
          pic: "./static/images/spa.jpg",
          link: "/po0017"
        },
        {
          name: "jimei",
          name_2: "建設首頁-網頁視覺設計/切版",
          pic: "./static/images/po11.jpg",
          link: "/po0012"
        },
        {
          name: "GMC",
          name_2: "航運首頁-網頁視覺設計/切版",
          pic: "./static/images/po12.jpg",
          link: "/po006"
        },
        {
          name: "Jean",
          name_2: "集團首頁-網頁視覺設計/切版",
          pic: "./static/images/po05.jpg",
          link: "/po003"
        },
        {
          name: "Jean",
          name_2: "物業管理首頁-網頁視覺設計/切版",
          pic: "./static/images/po06.jpg",
          link: "/po0011"
        },
        {
          name: "銷售家line＠",
          name_2: "銷售家line＠-網頁視覺設計/切版",
          pic: "./static/images/55555.jpg",
          link: "/po0013"
        },
        {
          name: "Jean",
          name_2: "物業管理內頁-網頁視覺設計/切版",
          pic: "./static/images/po07.jpg",
          link: "/po0010"
        },
        {
          name: "Jean",
          name_2: "酒店式公寓-網頁視覺設計/切版",
          pic: "./static/images/po08.jpg",
          link: "/po008"
        },
        {
          name: "Jean",
          name_2: "PARK259-網頁視覺設計/切版",
          pic: "./static/images/po09.jpg",
          link: "/po007"
        },
        {
          name: "Jean",
          name_2: "建案美學-網頁視覺設計/切版",
          pic: "./static/images/po10.jpg",
          link: "/po004"
        },
        {
          name: "AXIO",
          name_2: "AXIO-網頁視覺設計/切版",
          pic: "./static/images/po13.jpg",
          link: "/axiopo"
        },
        {
          name: "Teaking",
          name_2: "茶王舖-網頁視覺設計/切版",
          pic: "./static/images/po01.jpg",
          link: "/po001"
        }
      ],
      titles2: {
        name: "Focus on Design, ",
        name_2: "Crafting User Experiences with Heart",
        p: "Hello, this is my UI/UX project portfolio.",
        contect: "Contect me",
        big_title: "Web UI/UX 設計"
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // STEP 2：在 mounted 時初始化 tooltip
    $(function() {});
  },
  components: {
    RecordList: RecordList,
    TitleTemp: TitleTemp,
    ModalTemp: ModalTemp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>



