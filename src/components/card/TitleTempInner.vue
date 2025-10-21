<template>
  <div>
    <div class="outwrap">
      <div class="wrap_inner">
        <div class="title-hank-wrap">
          <h1 class="title-h1">
            {{infors.title}}
            <span>{{infors.title2}}</span>
          </h1>
          <p>{{infors.p2}}</p>
        </div>
        <div class="font-style-title">
          <h2>
            {{infors.webName}}
            <span>{{infors.skill}}</span>
          </h2>
          <hr class="hr-style">
          <h2>Description</h2>
          <p class="about">{{infors.infor}}</p>
          <hr class="hr-style">
          <h2>Link</h2>
          <div class="mb-4 ml40">
              <a v-bind:href="infors.url" target="_blank" rel="noopener noreferrer">{{infors.urlName}}</a>
              <a v-bind:href="infors.url2" target="_blank" rel="noopener noreferrer">{{infors.urlName2}}</a>
          </div>
        </div>
      </div>
      <div class="inner-page">
        <img id="img001" v-bind:src="infors.pic" alt />
        <img id="img002" v-bind:src="infors.pic2" alt />
        <img id="img003" v-bind:src="infors.pic3" alt />
        <img id="img004" v-bind:src="infors.pic4" alt />
        <img id="img005" v-bind:src="infors.pic5" alt />
      </div>
      <!-- <div class="iframe-style">
        <iframe style="border: 0px;" v-bind:src="infors.iframeLink" alt></iframe>
      </div> -->
      
    </div>

    <!-- <router-link v-bind:to="infors.link" class="deleted-wrap" >
      < Back
    </router-link> -->
    <a onclick="history.back()" class="deleted-wrap" >
      < Back
    </a>
  </div>
</template>


<script>
import $ from "jquery";
export default {
  props: ["infors"],
  data() {
    return {};
  },
  mounted() {
    $(function() {
      $(window).scroll(function(evt) {
        if ($(window).scrollTop() > 200) $(".deleted-wrap").addClass("active");
        else $(".deleted-wrap").removeClass("active");
      });
    });
  }
};
</script>
<style scoped>
@keyframes fadeIn{
    0% { 
      opacity: 0; 
    }
    100% { 
      opacity: 1; 
    }
}
.iframe-style{
  width: calc(100% - 450px);
  margin-top: 0px;
}
.iframe-style iframe{
  width: 100%;
  height: 600px;
}
/* #img002,#img003,#img004,#img005{
  display: none;
} */
.ml40{
  margin-left:40px;
  color:#fff;
  margin-top: 40px;
  text-align: left!important;
}
.ml40 a{
  color:#fff;
  margin-right: 20px;
}
.hr-style{
  background-color:rgb(75, 75, 75);
  margin-left:40px;
  width:calc(100% - 40px);
  margin-right:40px;
  margin-top: 40px;
  margin-bottom: 40px;
}
@media screen and (max-width: 860px) {
  .hr-style{
    margin-left:0px;
    margin-right:0px;
    width:calc(100% - 0px);
  }
}
.title-hank-wrap {
  width: 100%;
  /* background-image: url(http://www.hank.url.tw/img/background.png); */
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: left center;
  /* padding-top: 0px; */
  padding: 40px;
  /* backdrop-filter: blur(600px)!important; */
}
.title-hank-wrap button.btn-style:hover {
  background-color: #fff;
  color: #000;
}
@keyframes fadeInRight{
    0% { 
      opacity: 0; 
    }
    100% { 
      opacity: 1; 
    }
}
.wrap_inner{
   max-width: 450px;
   width:100%;
   position: fixed;
   top: 0;
   right:0px;
   overflow-y: scroll;
   height: 100vh;
   padding-bottom: 100px;
   animation: fadeInRight 2s both;
   animation-delay: 1s;
}
@media screen and (max-width: 1500px) {
    .wrap_inner{
      max-width: 350px;
    }
  }
  @media screen and (max-width: 1300px) {
    .wrap_inner{
      max-width: 100%;
      width:auto;
      position: static;
      top: 0;
      right:0px;
      overflow-y: visible;
      height: 100vh;
    }
  }
@media screen and (max-width: 680px) {
  .title-hank-wrap {
    padding: 20px;
    padding-top: 80px;
    background-size: cover;
  }
}

.right-bar {
  padding: 80px;
  box-sizing: border-box;
}
.font-style-title {
  width: calc(100% - 40px);
}
.right-bar .font-style-title h2 {
  font-size: 32px;
  color: #fff;
  text-align: left;
  color: #fad54d;
  margin-left: 40px;
  font-weight: 900;
}
.font-style-title p.about {
  font-size: 16px;
  color: #fff;
  text-align: justify;
  margin-top: 30px;
  color: #fff;
  margin-left: 40px;
  font-size: 18px;
  line-height: 1.8em;
}
.right-bar .font-style-title h2 span {
  display: block;
  font-size: 18px;
  margin-top: 10px;
  line-height: 1.8em;
  margin-top: 30px;
  color: #fff;
  font-weight: normal;
}
@media screen and (max-width: 680px) {
  .font-style-title {
    width: 100%;
  }
  .right-bar .font-style-title h2 {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin-left: 0px;
  }
  .right-bar .font-style-title h2 span {
    display: block;
  }
  .font-style-title p.about {
    margin-left: 0px;
  }
}
.right-bar .title-h1 {
    color: #fff;
    font-weight: 900;
    text-align: left;
    font-size: 42px;
    line-height: 55px;
}
.right-bar .title-h1 span {
  display: block;
}
.title-hank-wrap p {
  color: #828282;
  font-size: 14px;
  text-align: left;
}
@media screen and (max-width: 680px) {
  .right-bar .title-hank-wrap h2 {
    text-align: center;
    margin-top: 50px;
  }
  .title-hank-wrap {
    background-size: contain;
  }
}
@media screen and (max-width: 680px) {
  .right-bar .title-h1 {
    text-align: center;
    font-size: 32px;
    line-height: 43px;
  }
  .title-hank-wrap p {
    text-align: center;
  }
}
.btn-style {
  width: 200px;
  border-radius: 50px;
  height: 45px;
  background-color: #fad54d;
  border: none;
  display: block;
  margin-top: 40px;
  font-size: 18px;
  letter-spacing: 2px;
}
@media screen and (max-width: 680px) {
  .btn-style {
    margin-left: auto;
    margin-right: auto;
  }
}
.inner-page {
  width: calc(100% - 450px);
  animation: fadeIn 5s both;
}
.inner-page img {
  width: 100%;
  margin-bottom: -4px;
}
@media screen and (max-width: 1500px) {
.inner-page {
  width: calc(100% - 350px);
  padding-bottom: 0px;
  padding:40px;
  padding-top: 0px;
}  
}
@media screen and (max-width: 1300px) {
.inner-page {
  width: calc(100% - 0px);
  margin-top: 00px;
  padding-bottom: 0px;
  padding:40px;
  padding-top: 0px;
}  
}
.deleted-wrap {
  position: fixed;
  bottom: -100px;
  background-color: #fad54d;
  right: 40px;
  width: 80px;
  overflow: hidden;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  transition: 1s;
  opacity: 0;
  width:370px;
}
.deleted-wrap.active {
  bottom: 0px;
  right: 40px;
  -webkit-transition: 1s;
  transition: 1s;
  opacity: 1;
  line-height: 40px;
  text-decoration: none;
  color: #000;
}
.deleted-wrap p {
  color: #000;
  height:60px;
  margin:0px;
}
@media screen and (max-width: 1500px) {
  .deleted-wrap {
    width:270px;
  }
}
@media screen and (max-width: 1300px) {
  .deleted-wrap {
    top:0px;
    right:0px;
    width:80px;
    height:80px;
  }
  .deleted-wrap.active {
    bottom: 0px;
    border: none;
    line-height: 80px;
    right:0px;
  }
}
@media screen and (max-width: 1150px) {
  .deleted-wrap.active {
    top: calc(100% - 80px);
    border: none;
    line-height: 60px;
  }
}
@media screen and (max-width: 680px) {
  .wrap_inner{
    height: 100%;
    margin-bottom: 0px;
  }
  .inner-page{
    padding-left:0px;
    padding-right: 0px;
  }
  .deleted-wrap {
    position: fixed;
    bottom: -100px !important;
    top: auto;
    background-color: #fad54d;
    right: 0px;
    width: 100%;
    overflow: hidden;
    height: 50px;
    cursor: pointer;
    transition: 1s;
  }
  .deleted-wrap.active {
    bottom: 0px !important;
    transition: 1s;
    top: auto;
    width: 100%;
    left: 0px;
    height: 80px;
  }
  .deleted-wrap p {
    color: #000;
    line-height: 60px;
  }
}

button a {
  text-decoration: none !important;
  color: #333 !important;
}
.slide-fade {
  position: absolute;
  left: 0;
  right: 0;
}
.slide-fade-enter-active {
  transition: all 1.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(2, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  left: 0;
  right: 0;
  transform: translateX(50px);
  opacity: 0;
}
.display {
  display: none;
}
</style>