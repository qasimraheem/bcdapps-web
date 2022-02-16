<template>
  <!-- <section> -->
    <modal name="job-application" height="auto" width="560px" style="background: rgba(0, 0, 0, 0.7);overflow:visible;" class="job" >
      <form class="contact-form">
        <!-- <div class="form-loader">
                                    <div class="lds-ripple">
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <p>Loading . . .</p>
                                </div> -->
        <input class="inputs gray-txt" type="text" name="name" placeholder="Name" />
        <input class="inputs gray-txt" type="email" name="email" placeholder="Email" />
        <input class="inputs gray-txt" type="number" name="phone_no" placeholder="Phone#" />
        <div class="post-cv">
          <v-select class="custom-select2" :options="options" v-model="currentsalary">
            <template slot="option" slot-scope="option" class="custom-template">
              {{ option.label }}
            </template>
          </v-select>
        </div>
        <div class="post-cv">
          <v-select class="custom-select2" :options="options" v-model="expectedsalary">
            <template slot="option" slot-scope="option" class="custom-template">
              {{ option.label }}
            </template>
          </v-select>
        </div>
        <div class="resume-content mt20">
                <input type="file" name="file" id="file" class="inputfile"/>
                <label class="custom-input-file" for="file">Upload Resume</label>
                <img class="cv-icon" src="../../assets/images/cv.svg" alt="cv">
                <!-- <p class="m15">file name</p> -->
                <!-- <img class="cross-icon m15" src="../../assets/images/cross.png" alt="cancle"> -->
              </div>
        <!-- <div class="inputs gray-txt" placeholder="Message"></div> -->
        <a class="send-btn">Apply</a>
      </form>
    </modal>
  <!-- </section> -->
</template>

<script>
  export default {
    name: 'job-application',
    data() {
      return {
        jobName: 'Current salary',
        currentsalary: 'Current Salary',
        expectedsalary: ' Expected Salary',
        // value: [],
        options: ['1000$-5000$', '5000$-10000$', ' 10000$-20000$', '20000$-30000$', '5000$-10000$', ' 10000$-20000$', '20000$-30000$',
        ],
       
      };
    },
  };

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // .contact-form {
  //     padding: 50px 45px;
  //     background-color: #383838;
  //     max-width: 570px;
  //     position: relative;
  //     .inputs {
  //         background-color: #2F2F2F;
  //         outline: none;
  //         font-size: 14px;
  //         padding: 20px 10px;
  //         display: block;
  //         margin: 0 0 10px 0;
  //         width: 100%;
  //         border: 1px solid #686868;
  //     }
  //     textarea {
  //         resize: none;
  //         height: 100px;
  //     }
  //     .inputs::-webkit-inner-spin-button,
  //     .inputs::-webkit-outer-spin-button {
  //         -webkit-appearance: none;
  //     }
  //     .send-btn {
  //         padding: 15px 0;
  //         width: 100%;
  //         border: 2px solid #ffcb05;
  //         display: flex;
  //         align-self: center;
  //         justify-content: center;
  //         background-color: #282827;
  //         color: #ffcb05;
  //         font-size: 18px;
  //         font-weight: bold;
  //         cursor: pointer;
  //     }
  // }
  // .custom-select {
  //     padding: 5px 8px;
  //     font-size: 14px;
  //     width: 100%;
  //     border: none;
  //     box-shadow: none;
  //     background: transparent;
  //     background-image: none;
  //     -webkit-appearance: none;
  //     outline: none;
  //     .multiselect__input {
  //         width: 100% !important;
  //     }
  //     .multiselect__content-wrapper {
  //         .multiselect__content {
  //             width: 200px !important;
  //         }
  //     }
  // }
  // .custom-select {
  //     background: white;
  //     margin-bottom: 10px;
  // }
  // .v-select.searchable {
  //     .dropdown-toggle {
  //         border: none !important;
  //         background: gray !important;
  //     }
  // }
  // .multiselect__tags {
  //     width: 100%;
  //     padding: 10px;
  //     height: 39px;
  //     input {
  //         width: 100%!important;
  //         position: initial!important;
  //         padding: 0px 5px 0px 0px !important;
  //         border: none!important;
  //         border-radius: 6px!important;
  //     }
  // }
  // .dropdown-menu {
  //     max-height: 400px;
  //     overflow-y: scroll;
  //     height: 282px;
  //     li {
  //         margin: 0 5px 0 0;
  //         a {
  //             padding: 6px 0 6px 17px;
  //             &:hover {
  //                 background-color: #d6aa01;
  //             }
  //         }
  //     }
  //     .highlight {
  //         a {
  //             background: #d6aa01;
  //         }
  //     }
  // }
  // // .v-select .dropdown-toggle
  // // .dropdown{
  // //      background: white;   
  // //      border-radius: 6px; 
  // //      max-width: 593px;
  // //      .dropdown-toggle{
  // //       height: 47px;
  // //       .selected-tag{
  // //         margin: 6px 2px 0;
  // //       }
  // //      } 
  // //      .dropdown-menu{
  // //       max-height: 400px;
  // //       overflow-y: scroll;
  // //       height: 282px;
  // //        li{
  // //          margin: 0 5px 0 0;
  // //          a{
  // //           padding: 6px 0 6px 17px;
  // //           &:hover{
  // //             background-color: #d6aa01;
  // //           }
  // //          }
  // //        }
  // //        .highlight{
  // //          a{
  // //            background:#d6aa01;
  // //          }
  // //        }
  // //      }
  // //     } 
  // //     .upload-cv {
  // //       .resume-content {
  // //         display: flex;
  // //         color: #e9bb08;
  // //         .inputfile {
  // //           width: 0.1px;
  // //           height: 0.1px;
  // //           opacity: 0;
  // //           overflow: hidden;
  // //           z-index: -1;
  // //         }
  // //         .custom-input-file {
  // //           border-radius: 10px;
  // //           padding: 14px 10px;
  // //           color: #000;
  // //           background-color: rgb(255, 203, 5);
  // //           width: 135px;
  // //           height: 47px;
  // //         }
  // //         .cv-icon {
  // //           margin: 0px 3px 0px 25px;
  // //         }
  // //         .cross-icon {
  // //           width: 19px;
  // //           height: 19px;
  // //         }
  // //       }
  // //     }
  //         div.post-cv {
  //             div.custom-select {
  //                 margin: 0;
  //                     div.dropdown-toggle{
  //                         border: none !important;
  //                     }
  //             }
  //         }

</style>
