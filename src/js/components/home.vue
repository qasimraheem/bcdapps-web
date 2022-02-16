<template>
  <section id="home" class="home white-bg flex-display">
    
    <div>
      <div class="container home-container">
        <div class="home-content black-txt">
          <h1 class="circle pad-all main-heading">Codifying</h1>
          <h1 class="main-heading"><span class="yellow-txt">into</span> Reality</h1>
          <p class="mt20 content-para">Providing you the best blockchain solutions</p>
          <p class="content-para">that fit your needs</p>
          <div class="hire-us-container">
            <a class="bcd-btn" @click="portfolio">View Portfolio</a>
            <button class="bcd-btn hire invisible-hire-btn2" id="hire" @click="down">Hire Us</button>
          </div>
  
  
        </div>
        <div class="logo-right">
          <img class="home-bg" src="../../assets/images/border.svg">
          <div class="ractangle">
            <img class="ractangle-img" src="../../assets/images/header-logo.png">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import * as $ from "jquery";
  // import checkView from 'vue-check-view'
  // Vue.use(checkView)
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        eTop: document.getElementsByClassName('bcd-btn')
      };
  
    },
    methods: {
  
      portfolio() {
        $('html, body').animate({
          scrollTop: $('#portfolio').offset().top
        }, 'slow');
      },
      moveToPage(id) {
        $('html, body').animate({
          scrollTop: $(id).offset().top
        }, 'slow');
      },
      down() {
        $('html, body').animate({
          scrollTop: $('#contact_us').offset().top
        }, 'slow');
      },
      // viewHandler(){
      //     $('.spans').css({"color": "#000000","visibility":"hidden"});
      //     $('.spans').eq(2).css({"color": "white","visibility":"visible"});
      //     $('.nav-items').removeClass("active-white-item");
      //     $('.nav-items').eq(2).addClass("active-white-item");
      // }
  
    },
    // mounted() {
    //   // $(window).scroll(function() {
    //   //   console.log('mm');
    //   // })
    // }
  
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
