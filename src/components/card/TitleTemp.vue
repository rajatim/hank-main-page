<template>
  <div class="title-hank-wrap">
    <!-- <div class="bg-txt">HANK</div> -->

    <!-- <p>{{titles.p}}</p> -->
    
    <!-- Modal -->
    <h2>{{titles.big_title}}</h2>
  <h1 class="title-h1">
      {{titles.name}}
      <span>{{titles.name_2}}</span>
    </h1>
    <!-- <button
      class="btn-style mb-4"
      data-toggle="modal"
      data-target="#exampleModalCenter"
    >{{titles.contect}}</button> -->
  </div>
</template>

<script>
export default {
  props: ["titles"],
  data() {
    return {};
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
.title-hank-wrap {
  width: 100%;
  padding: 60px;
  padding-left:10px;
  padding-bottom: 85px;
  position: relative;
  animation: fadeIn 2s both;
  animation-delay: .5s;
}
.title-hank-wrap .bg-txt{
 color:transparent;
 -webkit-text-stroke: 1px rgba(255, 255, 255, 0.144);
 font-size:400px;
 text-align: left;
 display: block;
 position: absolute;
 font-weight: 900;
 top:-40px;
}
.title-hank-wrap button.btn-style:hover {
  background-color: #fff;
  transition: 0.5s;
  color: #000;
}
@media screen and (max-width: 680px) {
  .title-hank-wrap {
    padding: 20px;
    padding-top: 80px;
  }
}

.right-bar {
  padding: 80px;
  box-sizing: border-box;
}
.right-bar .title-hank-wrap h2 {
  font-size: 54px;
  color: #fff;
  text-align: left;
  margin-top: 20px;
  color: #fad54d;
  font-weight: 900;
}
.right-bar .title-h1 {
  color: #fff;
  font-weight: 900;
  text-align: left;
  font-size: 16px;
  margin-top: 12px;
  line-height: 24px;
}
.right-bar .title-h1 span {
  color: #fff;
  font-weight: 900;
  text-align: left;
  font-size: 16px;
}
.title-hank-wrap p {
  color: #fff;
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
  .right-bar .title-h1 span {
    color: #fff;
    font-weight: 900;
    text-align: center;
    font-size: 16px;
}
}
@media screen and (max-width: 680px) {
  .right-bar .title-h1 {
    text-align: center;
    font-size: 32px;
    line-height: 43px;
    text-align: center;
  }
  .title-hank-wrap p {
    text-align: center;
  }
}
.btn-style {
  width: 200px;
  border-radius: 50px;
  height: 60px;
  background-color: #fad54d;
  border: none;
  display: block;
  margin-top: 40px;
  font-size: 18px;
}
@media screen and (max-width: 680px) {
  .btn-style {
    margin-left: auto;
    margin-right: auto;
  }
}
.portfolio-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 95%;
  margin-right: auto;
}
@media screen and (max-width: 950px) {
  .portfolio-wrap {
    width: 100%;
  }
}
.portfolio-wrap > div:nth-child(even) {
  margin-top: 120px;
  margin-bottom: -100px;
}
.swiper-slide {
  overflow: visible !important;
}
.swiper-button-next.swiper-button-black,
.swiper-button-prev.swiper-button-black {
  --swiper-navigation-color: #fff;
}
.swiper-container-flip {
  overflow: visible;
  height: 400px;
}
.transition-style {
  width: 48%;
}
.card-pofolio-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
}
@media screen and (max-width: 840px) {
  .transition-style {
    width: 80%;
  }
  .portfolio-wrap {
    justify-content: center;
  }
  .portfolio-wrap > div:nth-child(even) {
    margin-bottom: 0px;
    margin-top: 0px;
  }
}
@media screen and (max-width: 500px) {
  .transition-style {
    width: 100%;
  }
}

.top {
  height: 400px;
  -webkit-box-shadow: -34px 28px 36px rgba(0, 0, 0, 0.35);
  box-shadow: -34px 28px 36px rgba(0, 0, 0, 0.35);
  width: 100%;
  background-image: url(http://www.hank.url.tw/img/po01.jpg);
  background-size: cover;
  filter: grayscale(0.3);
  background-position: center center;
}
@media screen and (max-width: 1360px) {
  .top {
    height: 300px;
  }
}
.card-pofolio-wrap .left-img img {
  width: 100%;
}
.card-pofolio-wrap .right-txt {
  color: #fff;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  border-radius: 0px 0px 20px 20px;
}

.poforlio-wrap {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: row;
  -ms-flex-direction: column;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between4;
}
.poforlio-wrap li {
  background-color: rgba(14, 14, 14, 0.3);
  border-radius: 5px;
  height: 190px;
  width: 40%;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  /* filter: blur(20px); */
}
.poforlio-wrap li .poforlio-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.poforlio-wrap li .poforlio-box .left-img {
  max-width: 300px;
  width: 100%;
}
.poforlio-wrap li .poforlio-box .left-img img {
  width: 100%;
  transform: translate(-120px, 30px) scale(1.9);
}
.right-txt {
  text-align: left;
  color: #fff;
}
.right-txt .en-title {
  font-size: 18px;
  font-weight: 900;
  transition: 1s;
  line-height: 36px;
}
.right-txt p {
  font-size: 15px;
  transition: 1s;
}
.transition-style {
  transition: 1.5s;
}
.transition-style a {
  text-decoration: none;
}
.transition-style:hover {
  transform: translateY(-30px);
  transition: 1s;
}
.transition-style:hover .top {
  filter: grayscale(0);
}
.transition-style:hover .en-title {
  transition: 1s;
  font-size: 20px;
  letter-spacing: 5px;
}
.transition-style:hover .right-txt p {
  transform: translateY(-5px);
  transition: 1s;
  letter-spacing: 5px;
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
</style>
