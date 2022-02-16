<template>
  <section class="careers black-bg flex-display" id="careers">
    <div class="nav-component">
      <div class="top-content container">
        <img src="../../assets/images/white-logo.png" class="logo">
        <a @click="moveToHome" class="home-btn">Home</a>
      </div>
    </div>
    <div>
      <div class="container  make-center">
        <h1 class="main-heading white-circle circle white-txt">Careers</h1>
        <div class="cv-section">
          <div class="post-cv">
            <h2 class="main-heading1" style="padding-bottom :26px;">Post Your CV For Future Openings.</h2>
            <v-select class="custom-select" :options="options" v-model="jobName">
              <template slot="option" slot-scope="option">
                {{ option.label }}
              </template>

            </v-select>
          </div>
          <div class="horizontal-line"></div>
          <div class="upload-cv">
            <h2 class="main-heading1">Upload your CV</h2>
            <div class="resume-content mt20">
              <input type="file" name="file" id="file" class="inputfile" />
              <label class="custom-input-file" for="file">Upload Resume</label>
              <img class="cv-icon" src="../../assets/images/cv.svg" alt="cv">
              <!-- <p class="m15">file name</p>
              <img class="cross-icon m15" src="../../assets/images/cross.png" alt="cancle"> -->
            </div>
          </div>
        </div>
        <div class="job-section">
          <div class="job-content">
            <h2 class="main-heading1 mb15">Senior Software Engineer<span class="notify">3</span></h2>
            <div class="flex-container">
              <p>Job type:</p>
              <p>Permanent</p>
            </div>
            <div class="flex-container">
              <p>Minimum Experience</p>
              <p>3-5 years</p>
            </div>
            <div class="interested">
              <div class="intersested-inner" @click="openJobModal">
                Interested
              </div>
            </div>
          </div>
          <div class="job-content">
            <h2 class="main-heading1 mb15">Senior Software Engineer<span class="notify">3</span></h2>
            <div class="flex-container">
              <p>Job type:</p>
              <p>Permanent</p>
            </div>
            <div class="flex-container">
              <p>Minimum Experience</p>
              <p>3-5 years</p>
            </div>
            <div class="interested">
              <div class="intersested-inner">
                Interested
              </div>
            </div>
          </div>

          <div class="job-content">
            <h2 class="main-heading1 mb15">Senior Software Engineer<span class="notify">3</span></h2>
            <div class="flex-container">
              <p>Job type:</p>
              <p>Permanent</p>
            </div>
            <div class="flex-container">
              <p>Minimum Experience</p>
              <p>3-5 years</p>
            </div>
            <div class="interested">
              <div class="intersested-inner">
                Interested
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <JobApplication />
  </section>
</template>

<script>
  import JobApplication from '../components/job-application.vue'
  import * as $ from "jquery";
  export default {
    name: 'careers',
    components: {
      JobApplication
      // Multiselect
    },

    data() {
      return {
        jobName: '',
        jobModal: false,
        // value: [],
        options: ['Graphic Designer', 'UI/UX Engineer', ' JavaScript Engineer', 'Software Engineer',
          'Front-End Developer', 'Back-End Developer', ' Full Stack Developer', ' Android Developer',
          'Content Writer', 'Business Development Manager', ' System Analyst',
        ]
      };
    },

    methods: {
      moveToHome() {
        this.$router.push({
          path: '/'
        })
      },

      openJobModal() {
        // this.openModal = true;
        this.$modal.show('job-application');
        // this.jobModal= true;
      }
    }
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
