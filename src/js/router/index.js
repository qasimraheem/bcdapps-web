import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/main';
import Careers from '../views/careers';
import ViewPortfolio from '../views/viewPortfolio';
import Home from '../components/home.vue'
// import Portfolio from '../components/portfolio.vue';
import about from '../components/about.vue';



Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/careers',
      name: 'Careers',
      component: Careers,
    },
    {
      path: '/view-portfolio',
      name: 'viewPortfolio',
      component: ViewPortfolio,
    },
    {
      path: '/home',
      name: 'Main',
      component: Main,
    },
   
    

  ],
});