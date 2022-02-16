<template>
    <section id="bcd-life" class="flex-display bcd-life yellow-bg section">
        <div class="bcd-life-left-container">
            <h1 class="white-circle main-heading">Life at Bcd</h1>
            <p>
                Professional developers, designers and marketers working together to provide finest blockchain solutions and marketing services at economical prices.
            </p>
        </div>
        <div class="bcd-life-right-container">
            <figure>

                <a :class="pic.className+' bcdlife-img'+parseInt(i+1)+'-container-a'" v-for="(pic, i) in images" v-bind:key="i" @click="index = i"><img :src="require('../../assets/images/'+pic.image)" /></a>
                <!-- <a class="bcdlife-img2-container-a full-size-container"><img src="../../assets/images/bcdlife2.png" /></a>
                    <a class="bcdlife-img3-container-a full-size-container"><img src="../../assets/images/bcdlife3.png" /></a>
                    <a class="bcdlife-img4-container-a small-size-container"><img src="../../assets/images/bcdlife4.png" /></a>
                    <a class="bcdlife-img5-container-a small-size-container"><img src="../../assets/images/bcdlife5.png" /></a>
                    <a class="bcdlife-img6-container-a small-size-container"><img src="../../assets/images/bcdlife6.png" /></a>
                    <a class="bcdlife-img7-container-a full-size-container"><img src="../../assets/images/bcdlife7.png" /></a>
                    <a class="bcdlife-img8-container-a full-size-container"><img src="../../assets/images/bcdlife8.png" /></a>
                    <a class="bcdlife-img9-container-a full-size-container"><img src="../../assets/images/bcdlife9.png" /></a>
                    <a class="bcdlife-img10-container-a full-size-container"><img src="../../assets/images/bcdlife10.png" /></a>
                    <a class="bcdlife-img11-container-a full-size-container"><img src="../../assets/images/bcdlife11.png" /></a>
                    <a class="bcdlife-img12-container-a small-size-container"><img src="../../assets/images/bcdlife12.png" /></a> -->
                <vue-gallery-slideshow :images="Slider" :index="index" @close="index = null"></vue-gallery-slideshow>

            </figure>

        </div>

    </section>
</template>

<script>
    import VueGallerySlideshow from 'vue-gallery-slideshow';


    export default {
        name: 'life-at-bcd',
        components: {
            VueGallerySlideshow
        },
        data() {
            return {
                images: [{
                        image: 'bcdlife1.png',
                        className: 'full-size-container'
                    },
                    {
                        image: 'bcdlife2.png',
                        className: 'full-size-container'
                    },
                    {
                        image: 'bcdlife3.png',
                        className: 'full-size-container'
                    },
                    {
                        image: 'bcdlife4.png',
                        className: 'small-size-container'
                    },
                    {
                        image: 'bcdlife5.png',
                        className: 'small-size-container'
                    },
                    {
                        image: 'bcdlife6.png',
                        className: 'small-size-container'
                    },
                    {
                        image: 'bcdlife7.png',
                        className: 'full-size-container'
                    },
                    {
                        image: 'bcdlife8.png',
                        className: 'full-size-container'
                    },
                    {
                        image: 'bcdlife9.png',
                        className: 'full-size-container'
                    },
                    {
                        image: 'bcdlife10.png',
                        className: 'full-size-container'
                    },
                    {
                        image: 'bcdlife11.png',
                        className: 'full-size-container'
                    },
                    {
                        image: 'bcdlife12.png',
                        className: 'small-size-container'
                    },
                ],
                Slider: ['https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife1.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife2.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife3.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife4.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife5.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife6.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife7.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife8.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife9.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife10.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife11.png', 'https://s3.ap-south-1.amazonaws.com/blockchaindapps/bcdlife12.png'],
                index: null
            }
        }
    }
</script>
