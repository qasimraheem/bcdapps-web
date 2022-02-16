<template>
  <section id="technologies" class="flex-display technologies black-bg">
    <div class="tec-container container">
      <div class="technology">
        <h1 class="heading">Technologies</h1>
        <!-- <p>loreum ipsum has the industry loreum ipsum has the industry loreum ipsum has the industry  </p> -->
      </div>
      <div class="apps">
        <div class="app app1">
          <img class="back-rect" src="../../assets/images/RectangleWhite.svg"/>
          <img class="neg-mgn" src="../../assets/images/golang.svg"/>
          <figure class="vue">
            <figcaption>Golang</figcaption>
            <img src="../../assets/images/Rectangle.svg" alt="rect"/>
          </figure>
        </div>
        <div class="app app2">
          <img class="back-rect" src="../../assets/images/RectangleWhite.svg"/>
          <figure class="vue">
            <figcaption>React</figcaption>
            <img src="../../assets/images/Rectangle.svg" alt="rect"/>
          </figure>
          <img class="neg-mgn" src="../../assets/images/reactJs.svg"/>
        </div>
        <div class="app app3">
          <img class="back-rect" src="../../assets/images/RectangleWhite.svg"/>
          <img class="neg-mgn" src="../../assets/images/AngulaJs.svg"/>
          <figure class="vue">
            <figcaption>Angular</figcaption>
            <img src="../../assets/images/Rectangle.svg" alt="rect"/>
          </figure>
        </div>
        <div class="app app3 app6">
          <img class="back-rect" src="../../assets/images/RectangleWhite.svg"/>
          <img class="neg-mgn" style="width:75px;" src="../../assets/images/Android-robot.png"/>
          <figure class="vue">
            <figcaption>Android</figcaption>
            <img src="../../assets/images/Rectangle.svg" alt="rect"/>
          </figure>
        </div>
        <div class="app app3 app7">
          <img class="back-rect" src="../../assets/images/RectangleWhite.svg"/>
          <img class="neg-mgn" style="width:69px;" src="../../assets/images/ios.png"/>
          <figure class="vue">
            <figcaption>iOS</figcaption>
            <img src="../../assets/images/Rectangle.svg" alt="rect"/>
          </figure>
        </div>
        <div>
          <div class="app app4 rot-90">
            <img class="back-rect" src="../../assets/images/RectangleWhite.svg"/>
            <img class="reverse-rot neg-mgn" src="../../assets/images/vue.png"/>
            <figure class="vue reverse-rot">
              <figcaption>Vue.js</figcaption>
              <img src="../../assets/images/Rectangle.svg" alt="rect"/>
            </figure>
          </div>
          <div>
            <div class="app app5 rot-90">
              <img class="back-rect" src="../../assets/images/RectangleBlack.svg"/>
              <img class="reverse-rot neg-mgn" src="../../assets/images/ndeJS.svg"/>
              <figure class="vue reverse-rot">
                <figcaption>node.js</figcaption>
                <img src="../../assets/images/Rectangle.svg" alt="rect"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'technologies',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
