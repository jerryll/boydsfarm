<template>
    <div>
    <section class="hero is-info">
        <div class="hero-body">
            <div class="container has-text-centered ">
            <h1 class="title is-size-2 ">
                Farm Supply
            </h1>
            </div>
        </div>
    </section>
    <div class="container">
        <div class="is-fluid tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification">
                            <p class="title">About Us</p>
                            <p class="subtitle">We have standard blends, as well as we can custom blend any analysis to suit your individual needs,
                                our fertilizer blends are available in bulk or bags. We have delivery trucks and pull type fertilizer spreaders to cover any needs you have.
                                We also custom apply your fertilizer for you with our AirFlow truck to save you valuable time.
                            </p>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification">
                            <p class="title">Airflow Spreader</p>
                            <p class="subtitle">Providing you with all your CORN, SOYBEANS, CEREALS, and forage seed requirements.</p>
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png">
                            </figure>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification">
                        <p class="title">Seed</p>
                        <p class="subtitle">We are dealers for Pioneer Brand Seeds including corn, soybeans, and wheat.
                           We also carry Speare Seeds, NK IP Soybean Seed, C&M Seeds, and all OAC brand Seeds.
                           Need crop spraying done on your farm?
                           We can look after your weed control with one of our 5 sprayer units.
                        </p>
                        <div class="content">
                            <figure class="image is-3by2">
                                <img src="https://bulma.io/images/placeholders/480x320.png">
                            </figure>
                        </div>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification">
                    <div class="content">
                        <p class="title">New Fertilizer Plant</p>
                        <p class="subtitle">New State of the art Fertilizer Plant</p>
                        <div class="content">
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png">
                            </figure>
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png">
                            </figure>
                            <figure class="image is-4by3">
                                <img src="https://bulma.io/images/placeholders/640x480.png">
                            </figure>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    export default { 
        name: 'Farmsupply',
        components: {
            Carousel,
            Slide
        }
    }
</script>
