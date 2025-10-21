<template>
  <div class="right-bar">
    <TitleTempInner v-bind:infors="infors" v-bind:lists="lists"></TitleTempInner>
    <ul class="banner-wrap display">
      <li v-for="(item, index) in lists">
        <img v-bind:src="item.pic" />
      </li>
    </ul>
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
        url: "https://www.axio-official.com/",
        webName: "詳記實業-AXIO",
        skill: "-網頁設計/切版---使用工具 wordpress/sketch",
        infor:
          "AXIO是由美國加州哈洛設計團隊(HARODESIGN)於2008年所推出的專業功能性時尚精品品牌。品牌創建人為鮑伯 哈洛(Bob Haro) 他是極限運動BMX自由式單車賽之父，他領導並研發全系列AXIO包款商品AXIO 曾參與2008 年Kawasaki協助指導 MotoGP 賽事，結合賽車中層層的嚴密技術以及運用人體工學設計完全達到職業賽車手遠征全球各地的安全與需求，因此不論在職業賽或是特定族群中，您會看見AXIO產品因為它獨特的功能性及設計感而被廣泛的使用。在十多年後的今天，AXIO將以全新風貌與設計和消費者見面，AXIO將積極研發運動休閒袋、包、箱款式打造全民運動休閒品牌，共享商品價值與技術為消費著帶來更多樣性的選擇。",
        pic: "./static/images/page-axio.jpg",
        link: "/webdeign.vue"
      }
    };
  }
};
</script>
<style>
