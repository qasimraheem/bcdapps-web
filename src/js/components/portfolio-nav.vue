<template>
  <nav class="bcd-nav" id="portfolio-nav">
    <ul>
      <!--<li>-->
        <!--<a class="nav-items" href="#">-->
          <!--<div><span class="item">About us</span></div>-->
          <!--<div class="nav-circle"></div>-->
        <!--</a>-->
      <!--</li>-->

      <li v-for="(project,index) in projects" v-bind:key="index" class="inner-navbar">
        <a id="gander" class="nav-items"  v-bind:class="{ ' active-black-item': selectedProject == project }" @click="select(project)">
          <div><span >{{project.name}}</span></div>
          <div class="nav-circle"></div>
        </a>
      </li>
      <!--<li>-->
        <!--<a id="expanse Luna Wallet" class="nav-items" href="#">-->
          <!--<div><span class="item">Our Services</span></div>-->
          <!--<div class="nav-circle"></div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a id="Tokenlab" class="nav-items" href="#">-->
          <!--<div><span class="item">Portfolio</span></div>-->
          <!--<div class="nav-circle"></div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a id="technologies" class="nav-items" href="#">-->
          <!--<div><span class="item">Technologies</span></div>-->
          <!--<div class="nav-circle"></div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a id="cliiimb" class="nav-items" href="#">-->
          <!--<div><span class="item">Cliimb</span></div>-->
          <!--<div class="nav-circle"></div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a id="dws" class="nav-items" href="#">-->
          <!--<div><span class="item">DWS</span></div>-->
          <!--<div class="nav-circle"></div>-->
        <!--</a>-->
      <!--</li>-->
      <!--<li>-->
        <!--<a id="contact_us" class="nav-items" href="#">-->
          <!--<div><span class="item">Contact us</span></div>-->
          <!--<div class="nav-circle"></div>-->
        <!--</a>-->
      <!--</li>-->
    </ul>
  </nav>
</template>

<script>

  export default {
    name: 'portfolio-nav',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    props: {
      projects: Array,
      select: Function,
      selectedProject: ''
    },

    mounted() {

    },

    methods: {
      selectNav(val) {
        // this.selectedProject = val;
        // this.$emit('select', val)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
