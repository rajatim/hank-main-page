<template>
  <div id="app">
    <div class="left-bar">
      <router-link to="/"  class="txt-style">
        <div class="logotitle"><span>R</span>esume</div>
      </router-link>
      <div class="title">
        <h2>ECPERIENCE</h2>
      </div>
      <ul class="menu-wrap">
        <li><router-link to="/"  >CV</router-link></li>
      </ul>
      <div class="title">
        <h2>PORTFOLIO</h2>
      </div>
      <ul class="menu-wrap">
        <li><router-link to="/appdesign" >App Design</router-link></li>
        <li><router-link to="/webdeign"  >Web Design</router-link></li>
        <!-- <li><router-link to="/pages03" >功能型介面設計</router-link></li> -->
      </ul>
      
    </div>
    <div class="mobile-meni-btn">
      <router-link to="/"  >
        <div class="logotitle mologo-t"><span>R</span>esume</div>
      </router-link>
        <div class="menu-btn"><img src="../static/images/menu.svg" alt=""></div>
    </div>
    <transition name="page" mode="out-in">
        <router-view :key="$route.path"></router-view>
    </transition>
    <div class="app-menu-cover">
        <ul class="menu-wrap-mo">
          <li><router-link to="/">個人履歷</router-link></li>
          <li><router-link to="/appdesign" >App Design</router-link></li>
          <li><router-link to="/webdeign">Web Design</router-link></li>
        </ul>
        <div class="back-btn">
          <p>back</p>
        </div>
    </div>
    </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'App',
    data () {
      return {
          
      }
  }
  ,mounted() {
            // STEP 2：在 mounted 時初始化 tooltip
      $(function() {
        $(".menu-btn,.menu-wrap-mo li").click(function(event) {
              $(".app-menu-cover").addClass("active")
              $('.right-bar').addClass("active")
              $('.mobile-meni-btn').addClass('active')
          });
          $(".back-btn,.menu-wrap-mo li").click(function(event) {
             $(".app-menu-cover").removeClass("active")
             $('.right-bar').removeClass("active")
              $('.mobile-meni-btn').removeClass('active')
          });
        });
        
      }

}

</script>

<style>
@import "../src/css/index.css";
.txt-style{
  text-decoration: none;
}

.left-bar ul li a{
  position: relative;
}
.left-bar ul li a::before{
    content: '';
    display: block;
    width: 0px;
    height:1px;
    background-color: #FAD54D;
    position: absolute;
    top: 10px;
    left:-155px;
}
.left-bar ul li a:hover {
  color:#FAD54D;
}
  .left-bar ul li a.router-link-exact-active{
    color:#FAD54D; 
    font-weight: 900;
    position: relative;
  }
  .left-bar ul li a.router-link-exact-active:before{
    content: '';
    display: block;
    width: 150px;
    height:1px;
    background-color: #FAD54D;
    position: absolute;
    left: -155px;
    top: 10px;
    transition: 3.5s;
  }
.title li{
  list-style: none;
}

.app-menu-cover{
  position: fixed;
  top:0px;
  left:0px;
  overflow:hidden;
  width: 100%;
  height: 100vh;
  background-color: rgba(0%, 0%, 0%, 0.45);
  opacity: 0;
  pointer-events: none;
  padding: 0px;
  transition: 1.5s;
  transform: scale(1.2);
}
.app-menu-cover.active{
  opacity: 1;
  transition: 1.5s;
  pointer-events: fill;
  transform: scale(1);
}
.menu-wrap-mo{
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.menu-wrap-mo li{
  width:100%;
}
.menu-wrap-mo li a{ 
  text-emphasis: none;
  color:#fff;
  font-size: 16px;
  line-height: 80px;
  letter-spacing: 3px;
  width:100%;
  height: 100%;
  display: block;
}
.menu-wrap-mo li:hover a{
  background-color: #FAD54D;
  color:#000;
  transition: .5s;
}
.back-btn {
  width:100%;
  height:50px;
  position: absolute;
  bottom:0px;
  left:0px;
  line-height: 50px;
  color:#000;
  background-color: #FAD54D
}
.page-enter-active,.page-leave-active{
  transition: 2s;
}
.page-enter,.page-leave-to{
  opacity: 0;
  transition: 1s;
}
</style>
