<template>
  <section id="portfolio" class="portfolio flex-display white-bg">
    <div>
      <div class="portfolio-grid container">
        <h1 class="main-heading white-circle circle">Portfolio</h1>
        <div class="verticle-slider">
          <a>
            <span class="movement back" @click="subtract()" v-bind:class="{'disabledBtn':full.indexOf(selectedPorfolio) == 0}">
                   <i class="fa fa-angle-up ft30"></i>
                  </span>
          </a>
          <div class="slide-show">
            <vue-load-image class="bcd-graylogo-container">
              <img class="slides" slot="image" :src="'https://s3.ap-south-1.amazonaws.com/blockchaindapps/'+selectedPorfolio.sheet" alt="">
              <img slot="preloader" class="preloader-img" src="../../assets/images/bcd-logo.png" alt=""/>
            </vue-load-image>
  
          </div>
          <div class="border-black">
            <ul class="slide-dots">
              <li v-for="(bullets,index) in full" v-bind:key='index' @click="selectPortfolio(bullets)">
                <a v-bind:class="{'dot-active': bullets == selectedPorfolio}"></a>
              </li>
  
            </ul>
            <div class="next-div">
              <h4>{{selectedPorfolio.sheettxt}}</h4>
              <a>
                <span class="movement forwardBtn" v-bind:class="{'disabledBtn':full.indexOf(selectedPorfolio) == full.length-1}" @click="add()">
                           <i class="fa fa-angle-down ft30"></i>
                         </span>
              </a>
            </div>
  
          </div>
          <a class="bcd-btn" @click="goToPorfolio">View Full Portfolio</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VueLoadImage from 'vue-load-image'
  export default {
    name: 'portfolio',
    components: {
      'vue-load-image': VueLoadImage
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        full: [{
            sheet: 'Tokenlab-img.jpg',
            sheettxt: 'Tokenlab',
          },
          {
            sheet: 'LunaWallet-img.jpg',
            sheettxt: 'Luna Wallet',
          },
          {
            sheet: 'Cliiimb-img.jpg',
            sheettxt: 'Cliiimb',
          },
          {
            sheet: 'DWS-img.jpg',
            sheettxt: 'DWS',
          },
          {
            sheet: 'Gander-img.jpg',
            sheettxt: 'Gander',
          }
        ],
        selectedPorfolio: '',
        isZeroIndex: false,
        isIndexOutOfRange: false
  
      };
    },
  
    created() {
      this.selectedPorfolio = this.full[0];
    },
    methods: {
      selectPortfolio(val) {
        this.selectedPorfolio = val;
      },
      add() {
        var aa = this.full.indexOf(this.selectedPorfolio);
  
        this.selectedPorfolio = this.full[aa + 1];
  
      },
      subtract() {
        var bb = this.full.indexOf(this.selectedPorfolio);
        console.log("DDDDD", bb)
        this.selectedPorfolio = this.full[bb - 1];
  
  
  
  
      },
      goToPorfolio() {
        this.$router.push({
          path: 'view-portfolio'
        })
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
