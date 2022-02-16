<template>
  <div>
    <div class="nav-component">
      <div class="top-content container">
        <img class="logo" src="../../assets/images/bcd-logo.png" />
        <div class="nav-menu">
          <button class="bcd-btn hire invisible-hire-btn1" id="hire" @click="down">Hire Us</button>
          <img @click="click" class="menu-svg" src="../../assets/images/menu-icon.svg" />
          <ul class="menu">
            <li><a class="menu-items" href="#home" @click="moveToPage('#home')">Home</a></li>
            <li><a class="menu-items" href="#about" @click="moveToPage('#about')">About us</a></li>
            <li><a class="menu-items" href="#services" @click="moveToPage('#services')">Our Services</a></li>
            <li><a class="menu-items" href="#portfolio" @click="moveToPage('#portfolio')">Portfolio</a></li>
            <li><a class="menu-items" href="#technologies" @click="moveToPage('#technologies')">Technologies</a></li>
            <li><a class="menu-items" href="#partners" @click="moveToPage('#partners')">Partners</a></li>
             <!-- <li><a class="menu-items" href="#our_team" @click="moveToPage('#our_team')">Our Team</a></li> -->
            <li><a class="menu-items" href="#bcd-life" @click="moveToPage('#bcd-life')">Life At BCD</a></li>
            <li><a class="menu-items" href="#contact_us" @click="moveToPage('#contact_us')">Contact us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <NavBar />
    <button class="top-btn" @click="Up">
          <i class="fa fa-angle-double-up"></i>
          <p>Top</p>
        </button>
    <!-- <full-page> -->
    <Home class="section" />
    <About class="section" />
    <Services class="section" />
    <Portfolio class="section" />
    <Technologies class="section" />
    <products class="section"/>
    <Partners class="section" />
    <!-- <Team class="section" /> -->
    <LifeAtBcd class="section" />
    <Contact class="section" />
    <!-- <indexjs class="indexjs" :value='technology' /> -->
    <!-- </full-page> -->
  </div>
</template>

<script>
  import * as $ from "jquery";
  import Home from '../components/home';
  import About from '../components/about';
  import Services from '../components/services';
  import Portfolio from '../components/portfolio';
  import Technologies from '../components/technologies';
  import Partners from '../components/partners';
  import Team from '../components/team';
  import Contact from '../components/contact';
  import NavBar from '../components/navbar';
  import LifeAtBcd from '../components/life-at-bcd.vue';
  import Products from '../components/products';
  import _ from 'lodash';
  export default {
    name: 'main',
    components: {
      Home,
      About,
      Services,
      Portfolio,
      Technologies,
      Partners,
      Team,
      Contact,
      NavBar,
      LifeAtBcd,
      Products,
    },
    data() {
      return {
        id: '',
        show: false
      };
    },
    methods: {
      click() {
        $('.menu').fadeToggle("slow");
      },
      Up() {
        $('html, body').animate({
          scrollTop: $('#home').offset().top
        }, 'slow');
      },
      moveToPage(id) {
        $('html, body').animate({
          scrollTop: $(id).offset().top
        }, 'slow');
        this.show = false;
      },

      down() {
        $('html, body').animate({
          scrollTop: $('#contact_us').offset().top
        }, 'slow');
      },
    },
    mounted() {
      var that = this;
      var r;
      $('.top-btn').hide();
      $('.nav-items').css('color', 'white');
      $('.spans').css('visibility', 'hidden');
      $('.spans').eq(0).css({
        "color": "#000000",
        'visibility': 'visible'
      });

      /////////
      $(window).scroll(function() {
        var position = $(this).scrollTop;

        if ($(document).scrollTop() > 100) {
          $('.top-btn').fadeIn('slow');
        } else {
          $('.top-btn').fadeOut('slow');
        }
        if ($(document).scrollTop() < (window.innerHeight) * 0.6) {

          $('.spans').css('visibility', 'hidden');
          $('.spans').eq(0).css({
            "color": "#000000",
            'visibility': 'visible'
          });
          $('.nav-items').removeClass("active-white-item");
          // $('.nav-items').eq(2).removeClass("active-white-item");
          $('.nav-items').eq(0).addClass("active-white-item");

        }

        var position = window.pageYOffset;

        $('.section').each(function() {
          var target = $(this).offset().top;
          var id = $(this).attr('id');


          var navLinks = $('li a');

          if (position >= target - (window.innerHeight * 0.5)) {
            if (id == 'home' || id == 'services' || id == 'portfolio' || id == 'partners' || id == 'products' || id=='contact_us' || id=='bcd-life') {
              navLinks.removeClass('active-white-item');
              navLinks.removeClass('active-black-item');
              $('li a[href="#' + id + '"]').addClass('active-white-item');
            } else {
              navLinks.removeClass('active-white-item');
              navLinks.removeClass('active-black-item');
              $('li a[href="#' + id + '"]').addClass('active-black-item');
              // URL('uhuhuu');
            }


            if (id == 'home') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(0).css({
                "color": "black",
                'visibility': 'visible'
              });



              // that.$router.push('#home');
            }
            if (id == 'about') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(1).css({
                "color": "#FFCB05",
                'visibility': 'visible'
              });

            }
            if (id == 'services') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(2).css({
                "color": "black",
                'visibility': 'visible'
              });

            }
            if (id == 'portfolio') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(3).css({
                "color": "black",
                'visibility': 'visible'
              });
              // that.$router.push('#portfolio');
            }
            if (id == 'technologies') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(4).css({
                "color": "#0007700",
                'visibility': 'visible'
              });
              // that.$router.push('#technologies');
            }
            if (id == 'products') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(5).css({
                "color": "black",
                'visibility': 'visible'
              });
              // that.$router.push('#technologies');
            }
            if (id == 'partners') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(6).css({
                "color": "black",
                'visibility': 'visible'
              });
              // that.$router.push('#partners');
            }
            // if (id == 'our_team') {
            //   $('.spans').css('visibility', 'hidden');
            //   $('.spans').eq(7).css({
            //     "color": "#FFCB05",
            //     'visibility': 'visible'
            //   });
            // }
            if (id == 'bcd-life') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(7).css({
                "color": "#000",
                'visibility': 'visible'
              });
            }

            if (id == 'contact_us') {
              $('.spans').css('visibility', 'hidden');
              $('.spans').eq(8).css({
                "color": "#000",
                'visibility': 'visible'
              });
              // that.$router.push('#contact-us');
            }
          }
        });


      });

      $(window).scroll(_.throttle(function() {

        if ($('.spans').eq(0).css('visibility') === 'visible') {
          history.replaceState(null, null, '#home');
          return false;
        }
        if ($('.spans').eq(1).css('visibility') === 'visible') {
          history.replaceState(null, null, '#about_us');
          return false;
        }
        if ($('.spans').eq(2).css('visibility') === 'visible') {
          history.pushState(null, null, '#services');
          return false;
        }
        if ($('.spans').eq(3).css('visibility') === 'visible') {
          history.pushState(null, null, '#portfolio');
          return false;
        }
        if ($('.spans').eq(4).css('visibility') === 'visible') {
          history.pushState(null, null, '#technologies');
          return false;
        }
        if ($('.spans').eq(5).css('visibility') === 'visible') {
          history.pushState(null, null, '#partners');
          return false;
        }
        // if ($('.spans').eq(6).css('visibility') === 'visible') {
        //   history.pushState(null, null, '#our_team');
        //   return false;
        // }
        if ($('.spans').eq(6).css('visibility') === 'visible') {
          history.pushState(null, null, '#life_at_bcd');
          return false;
        }
        if ($('.spans').eq(7).css('visibility') === 'visible') {
          history.pushState(null, null, '#contact_us');
          return false;
        }
      }, 500));

      // ($('#yourElement').css('position') == 'absolute')
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
