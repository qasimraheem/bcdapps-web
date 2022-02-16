<template>
  <section class="portfolio-container" id="portfolio">
    <div class="nav-component new-class-bar">
      <div class="top-content container">
        <img src="../../assets/images/white-logo.png" class="logo folo-logo">
        <button class="home-btn btn-folo" @click="moveToHome">Home</button>
      </div>
    </div>
    <PortfolioNav :projects="projects" :select="selectProject" :selectedProject="selected" />
    <div>
      <div class="folio-col">
        <div class="portfolio-frst-col">
          <!-- <svg class="mouse-svg" xmlns="http://www.w3.org/2000/svg" width="33" height="55" viewBox="0 0 33 55">
                  <path id="Rounded_Rectangle_4" data-name="Rounded Rectangle 4" class="cls-1" d="M16.5,55A16.5,16.5,0,0,1,0,38.5v-22a16.5,16.5,0,1,1,33,0v22A16.5,16.5,0,0,1,16.5,55ZM31,17.5a14.5,14.5,0,0,0-29,0v20a14.5,14.5,0,0,0,29,0v-20ZM16.5,22A2.5,2.5,0,0,1,14,19.5v-6a2.5,2.5,0,0,1,5,0v6A2.5,2.5,0,0,1,16.5,22Z" />
                </svg> -->
          <figure class="animate-angle">
            <!-- <img src="../../assets/images/gander.png" class="gander-img animate-image animation-image1">
                  <img src="../../assets/images/Cliiimb1.png" class="gander-img animate-image animation-image2">
                  <img src="../../assets/images/DWS1.png" class="gander-img animate-image animation-image3">
                  <img src="../../assets/images/Tokenlab1.png" class="gander-img animate-image animation-image4"> -->
            <!-- <img v-for="(img,index) in selected.images " v-bind:key="index" :src="require('../../assets/images/'+img)"
                    class="gander-img animate-image" :class="'animation-image'+index"> -->
            <carousel :per-page="1" :autoplay="true" :speed="900" :loop="true" ease="ease" :autoplayHoverPause="true" :mouseDrag="true" :minSwipeDistance="8" :paginationEnabled="false">
              <slide v-for="(img,index) in selected.images " v-bind:key="index">
                <!-- Slide 1 Content -->
                <img class="gander-img" :src="'https://s3.ap-south-1.amazonaws.com/blockchaindapps/'+img" />
              </slide>
            </carousel>
          </figure>
        </div>
        <div class="second-column">
          <div class="white-border-one" v-for="(project,index) in projects" v-if="project == selected" v-bind:key="index">
            <figure class="img-1">
  
              <img class="img-1" :src="require('../../assets/images/'+project.image)" />
            </figure>
            <div class="text-1">
              <h3 id="gander2">{{project.bold}}</h3><br>
              <p v-html="project.description"></p>
              <ul class="text-list" v-if="project.bullets && project.bullets.length">
                <li v-for="(bullet,index) in project.bullets" v-bind:key="index"><span class="dot-list"></span>{{bullet}}</li>
              </ul>

              <div class="app-details" v-if="project.hasApp">
                <a :href="project.playStoreLink" target="_blank">
                <img src="../../assets/images/google-play-store-ic.png" alt="play store"></a>
              </div>
            </div>
            <div class="outer-border-svg">
              <div class="ring-svg">
                <a class="visit-gander" :href="project.link" target="_blank">Visit {{project.name}}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import * as $ from "jquery";
  import PortfolioNav from '../components/portfolio-nav';
  import _ from 'lodash';
  import {
    Carousel,
    Slide
  } from 'vue-carousel';
  
  export default {
    data() {
  
      return {
        // gander2:document.getElementById('gander2'),
        index: 0,
        gander2: false,
        selected: '',
        ExpanseLuna1: document.getElementById('ExpanseLuna1'),
        projects: [{
            name: 'Gander',
            bold: 'The Block Explorer for the Expanse Blockchain.',
            link: 'https://gander.tech/',
            image: 'gander-text.png',
            bullets: [],
            foo: "require('../../../assets/images/gander-text.png')",
            description: 'Gander is the Block Explorer for the Expanse Blockchain. A Block Explorer is basically a search engine that allows users to easily lookup, confirm and validate transactions that have taken place on the Expanse Blockchain.<br><br>',
            // images: ['tokenlab-final.png','Gander-img.jpg', 'gander2.png', 'gander3.png', 'gander4.png', 'gander5.png']
            images: ['g1.png', 'g2.png', 'g3.png', 'g4.png',
          
  
            ],
              hasApp: false,
          },
          {
            name: 'Tokenlab',
            bold: 'A laboratory for creating tokens',
            link: 'https://www.tokenlab.io/',
            image: 'tokenlablogo-white.png',
            bullets: [],
            foo: '../../assets/images/footer-logo.0c1aa2c.png',
            description: ' Tokenlab is just what it sounds like-a laboratory for creating tokens for crowd sales, tech projects-anything you can imagine.<br><br> It is also a super easy way for people to launch ERC 20 tokens on the Expanse.Tech™ platform with time-locked, integrated ICO contracts.<br><br> ',
            images: ['tokenlab-final.png', 't1.png', 't5.png', 't4.png' ],
              hasApp: false,
          },
          {
            name: 'Cliiimb',
            bold: 'Impacting Young People to Be the Best Version of Themselves',
            link: 'https://cliiimb.com/',
            image: 'cliiimb-logo.svg',
            bullets: [],
            description: 'Cliiimb is a next generation communication tool for mobile devices. It was created so that local professionals can collectively work together to connect and engage our young people on relevant issues that affect them. <br><br>',
            images: ['C1.png', 'C2.png', 'C3.png', 'C4.png'],
              hasApp: true,
              playStoreLink: 'https://play.google.com/store/apps/details?id=io.cliiimb.app'
          },
          {
            name: 'Luna Wallet',
            bold: 'The next generation of the Expanse Luna Wallet',
            link: 'https://github.com/expanse-org/luna-wallet',
            image: 'luna.png',
            bullets: ['- Generate a wallet', '- Import the wallet via private key /JSON Key Store File.',
              '- Generate and import BIP39 mnemonic codes to create the HD Wallets'
            ],
            description: 'The next generation of the Expanse Luna Wallet provides the following features.',
            images: ['L1.png', 'l2.png', 'l3.png', 'Lunawallet-small-img.jpg'],
              hasApp: false,
          },
          {
            name: 'DWS',
            bold: 'A Professional platform for Pilots and Customers',
            link: 'https://droneworkforcesolutions.com/',
            image: 'Dws-logo.svg',
            bullets: [],
            foo: '../../assets/images/Dws-logo.svg',
            description: 'Whether you are a drone pilot or you need a drone pilot for a project, DWS offers the resources you need to secure what you need from this industry.<br><br> It is developed in order to connect the right people with the right skills to the jobs that need them. <br><br>',
            images: ['D1.png', 'D2.png', 'D3.png', 'D6.png', 'D5.png', 'DWS-final.png'],
              hasApp: false,
          },
          {
            name: 'Syncfab',
            bold: 'Manufacture Easily & Securely on Blockchain',
            link: 'https://syncfab.com/',
            image: 'syncfabLogo.png',
            bullets: [],
            foo: '../../assets/images/Dws-logo.svg',
            description: 'Available capacity, transparent order tracking, and purchase order management secured by blockchain',
            images: ['S2.png', 'S3.png', 'S4.png', 'S5.png', 'S6.png'],
              hasApp: false,
          },
          {
            name: 'Nix Coin',
            bold: 'The world\'s first read smartphone mining game!',
            link: 'https://www.nixblock.io/',
            image: 'NixcoinLogo.png',
            bullets: [],
            foo: '../../assets/images/Dws-logo.svg',
            description: 'Coin Monster is a fun, thrilling and also a profitable smartphone mining game and expected in over 180 countries.<br><br>',
            images: ['N1.png', 'N2.png', 'N3.png', 'N4.png'],
              hasApp: false,
          },
          {
            name: 'Arawtoken',
            bold: 'The Decentralized Payment for E-Commerce Ecosystem.',
            link: 'https://arawtoken.io/',
            image: 'arawtokenLogo.png',
            bullets: [],
            foo: '../../assets/images/Dws-logo.svg',
            description: 'An end-to-end solutions for E-Commerce Marketplace, Touch & Pay Cryptocurrency Card, Online Cryptocurrency Payment, and Unified Reward System powered by the Ethereum Blockchain',
            images: ['Aw1.png', 'Aw2.png', 'Aw3.png', 'Aw4.png', ],
              hasApp: false,
          },
                    {
            name: 'EXPEX',
            bold: 'An expanse wallet and decentralized exchange .',
            link: 'http://beta.expex.io/',
            image: 'expex-logo.png',
            bullets: [],
            foo: '../../assets/images/Dws-logo.svg',
            description: 'EXPEX allows user to generate the wallet and access the already existing one through watch only, Metamask, Trezor, Ledger Wallet, Key store, Mnemonics and Private Key. <br><br> Moreover, we can send, receive and trade with the four main currencies EXP, LAB, PEX and WEXP.',
            images: ['expex1.png', 'expex2.png','expex3.png'],
              hasApp: false,
          },
        ]
      }
    },
    name: "viewPortfolio",
    components: {
      PortfolioNav,
      Carousel,
      Slide,
    },
  
  
    mounted() {
  
      var that = this;
      this.selected = this.projects[0];
      console.log("hereeeeee")

      //       window.onscroll = function(e) {
      //         console.log("FDSDF old",this.oldScroll);
      //         console.log("FDSDF y",this.scrollY);
              
      //   // print "false" if direction is down and "true" if up
      //   console.log(this.oldScroll > this.scrollY);
      //   this.oldScroll = this.scrollY;
      // }
      // $(window).scroll(_.throttle(function() {
  
      //   $('.inner-navbar a:first').removeClass('active-white-item')
      //   that.selected = that.projects[that.index++];
      //   //  console.log("jnknn",that.index);
      //   if (that.index == 8) {
      //     that.index = 0;
      //   }
  
  
  
  
      //   //  console.log(that.projects[that.a++]);
      //   //  var position = window.pageYOffset;
      //   // var target = $('#portfolio').offset().top;
      //   // if 
  
      //   // console.log("target" , target);
      //   // console.log("position" ,position);
      //   // if( position == 1 ){
      //   //   position = 0;
      //   //    $('html, body').animate({
      //   //   scrollTop: $('#portfolio').offset().top
      //   // }, 'slow');
      //   // }
      //   //  console.log("again target" , target);
      //   // console.log("again position" ,position);
  
  
      // }, 500));
      // var position = $(window).scrollTop();
      //   console.log(scroll);

  
      // should start at 0
  
      // $(window).scroll(function() {
      //   var scroll = $(window).scrollTop();
      //   console.log(scroll);
      //   $('.inner-navbar a:first').removeClass('active-white-item');
        
      //   if (scroll > position) {
      //     console.log("hereeee")
      //     $('.inner-navbar a:first').removeClass('active-white-item')

      //     that.selected = that.projects[that.index++];
      //     // if (that.index == 8) {
      //     //   that.index += 0;
      //     // }
  
      //   } else {
      //     // if (that.index == 0) {
      //     //   that.index -= 0;
      //     // }
      //     that.selected = that.projects[that.index--];
      //     // position = scroll;
      //   }
      //   console.log("Scerooll", scroll, position)
      //   // position = scroll;
      // });
      
    },
  
    methods: {
      selectProject(val) {
        this.selected = val;
      },
      moveToHome() {
        this.$router.push({
          path: '/'
        })
      }
    },
  }
</script>

<style scoped>
  
</style>
