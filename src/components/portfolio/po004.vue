<template>
  <!-- <div class="right-bar">
    <div class="title-hank-wrap">
      <h1 class="title-h1">
       A Digital
        <span>Creative Agency</span> 

      </h1>
      <p>Hello, my name is hank, this is my web project portfolio.</p>
      <button class="btn-style mb-4" ><a href="http://www.hank.url.tw/index-park259/index-park259.html" target="_blank" rel="noopener noreferrer">網站連結</a></button>
    </div>
    <div class="font-style-title">
      <h2>新美齊建案美學首頁-JEAN<span>-網頁設計/切版---使用工具 html/jquery/css/sketch</span></h2>
    </div>
    <div class="inner-page">
        <img src="http://www.hank.url.tw/img/kkdd.jpg" alt="">
    </div>
    
    <router-link to="/"  class="deleted-wrap">
      <p> < Back</p>
    </router-link>
  </div>-->
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
        webName: "新美齊建案美學首頁-JEAN",
        skill: "網頁設計/切版---使用工具 html/jquery/css/sketch",
        infor:
          "享受都市的寧靜 打造頂級生活---「無價窗景」框住天然成形的世界級風景，讓居住者無需透過多餘的 輝煌裝飾，就能以純淨自然的視角，放鬆自己同時欣賞世界。",
        pic: "./static/images/kkdd.jpg",
        link: "/webdeign.vue"
      }
    };
  }
};
</script>
<style>
</style>