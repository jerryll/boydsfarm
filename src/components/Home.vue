<template>
  <div class="container">
    <div style="margin:10px auto;height:400px">
          <!-- 配置slider组件 -->
          <slider ref="slider" :pages="pages" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
              <!-- 设置loading,可自定义 -->
              <div slot="loading">loading...</div>
          </slider>
    </div>
    <section class="hero">
      <div class="hero-body">
          <h1 class="title has-text-centered is-size-1">
            About Us
          </h1>
          <h2>
            Boyd's Farm Supply was born in March of 1987, we started as a seed and fertilizer supplier to our local customers.
            In 1989 we built a new office and warehouse facility south of Fordwich.
            Since then we have constructed a state of the art fertilizer blending facility and have added Pioneer Brand Seeds to our strong line up of seed offerings.
            We also offer services such as professional herbicide and fertilizer application on field crops.
            If an off road toy is deried we are dealers for Suzuki ATV's and off road dirt bikes and carry the full line of STIHL power equipment along with a full service department for repairs.
            Call us at 519-335-3539.
          </h2>
      </div>
    </section>
    <div class="columns has-text-centered">
      <div class="column">
        <figure>
          <img src="https://bulma.io/images/placeholders/256x256.png">
          <figcaption>
            <strong>Farm Supply</strong>
            <p>Fertilizer, seed, chemicals, custom application.<br>We are dealers providing you with all your corn, soybeans, cereals and forage seed requirements.</p>
          </figcaption>
        </figure>
      </div>
      <div class="column">
        <figure>
          <img src="https://bulma.io/images/placeholders/256x256.png">
          <figcaption>
            <strong>Suzuki ATV's and Dirt Bikes</strong>
            <p>We offer Suzuki's full line of ATV's, starting with entry level LTZ50, all the way up to the largest 750 King Quad. 
              We have Suzuki's full line of offroad dirt bikes starting with entry level DRZ 70 up to the RMZ 450.</p>
          </figcaption>
        </figure>
      </div>
      <div class="column">
        <figure>
          <img src="https://bulma.io/images/placeholders/256x256.png">
          <figcaption>
            <strong>Power Equipment</strong>
            <p>We carry and service a full line of STIHL power equipment. 
              STIHL chainsaws and </p>
          </figcaption>
        </figure>
      </div>
    </div>
     <section class="hero">
      <div class="hero-body">
          <h1 class="title has-text-centered is-size-1">
            Our Partners
          </h1>
      </div>
    </section>

    <div class="columns has-text-centered">
      <div class="column">
          <img src="https://bulma.io/images/placeholders/256x256.png">
      </div>
      <div class="column">
          <img src="https://bulma.io/images/placeholders/256x256.png">
      </div>
      <div class="column">
        <img src="https://bulma.io/images/placeholders/256x256.png">
      </div>
      <div class="column">
        <img src="https://bulma.io/images/placeholders/256x256.png">
      </div>
    </div>
  </div>
</template>
<script>
import slider from 'vue-concise-slider'// import slider components
export default {
   data () {
      return {
        //Image list
        pages:[
          {
          html: '<div class="slider1">slider1</div>',
          style: {
            'background': '#1bbc9b'
            }
          },
          {
            html: '<div class="slider2">slider2</div>',
            style: {
              'background': '#4bbfc3'
            }
          },
          {
            html: '<div class="slider3">slider3</div>',
            style: {
              'background': '#7baabe'
            }
          }
        ],
        //Sliding configuration [obj]
        sliderinit: {
          currentPage: 0,
          thresholdDistance:500,
          thresholdTime:100,
          autoplay:1000,
          loop:true,
          direction:'horizontal',
          infinite:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          duration: 300
        }
      }
    },
    components: {
        slider
    },
    methods: {
      // Listener event
      slide (data) {
        console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        console.log(data)
      }
    }
}
</script>