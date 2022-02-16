<template>
  <nav class="bcd-nav bcd-nav2">
    <ul>
      <li @click="selectNav(link)" v-for="(link,index) in links" v-bind:key="index">
        <a class="nav-items " v-bind:class="{'active-white-item':link == selectedNav, 'makeBlack active-black-item': link.color=='black' && link == selectedNav}" :href="link.link">
          <div><span class="spans">{{link.name}}</span></div>
          <div class="nav-circle"></div>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import * as $ from "jquery";
  export default {
    name: "navbar",
  props: ['selectedID', 'idType'],
    data() {
      return {
        links: [{
            name: "Home",
            link: "#home",
            color: ''
          },
          {
            name: "About us",
            link: "#about",
            color: 'black'
          },
          {
            name: "Our Services",
            link: "#services",
            color: ''
          },
          {
            name: "Portfolio",
            link: "#portfolio",
            color: ''
          },
          {
            name: "Technologies",
            link: "#technologies",
            color: 'black'
          },
          {
            name: "Our Products",
            link: "#products",
            color: ''
          },
          {
            name: "Partners",
            link: "#partners",
            color: ''
          },
          // {
          //   name: 'Our Team',
          //   link: "#our_team",
          //   color: ''
          // },
           {
            name: 'Life At BCD',
            link: "#bcd-life",
            color: ''
          },
          {
            name: "Contact us",
            link: "#contact_us",
            color: ''
          }
        ],
        selectedNav: ''
      };
    },

    methods: {
      selectNav(val) {
        this.selectedNav = val;
                $('html, body').animate({
          scrollTop: $(val.link).offset().top
        }, 'slow');
      },
    },

    mounted() {
      // console.log('dsfsdfsd', this.idType);
      //  console.log('asdasd',this.selectedID)
      var currentLocation = document.URL;
      var fields = currentLocation.split('#');
      if (fields[1]) {

        var urlName = '#' + fields[1];
        this.selectedNav = this.links.filter(val => val.link == urlName)[0];
        $('html, body').animate({
          scrollTop: $(urlName).offset().top
        }, 'slow');
      } else {
        this.selectedNav = this.links[0]
      }
    },

    created() {
      // console.log('dsfsdfsd', this.idType);

        // console.log('asdasd',this.selectedID)
    },

    updated() {

    }

  }
</script>

<style scoped>

</style>
