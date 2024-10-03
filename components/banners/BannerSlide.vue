<script setup>
const {data: BannerSlide} = fetchBannerSlide()
</script>

<template>
    <div class="banner">
        <div class="banner__container section--hidden-x container ">
            <div class="banner__inner">
                   <Swiper class="banner__swiper">
                    <SwiperSlide v-for="banner in BannerSlide?.data" :key="banner.id">
                        <div class="banner__slide">
                            <div class="banner__info-block">
                                <h1 class="banner__title h1-banner">
                                    {{ banner?.attributes.name }}
                                </h1>
                                <span class="banner__subtitle">{{banner?.text?.text}}</span>
                                <div class="banner__pagination ">
                                    <div class="banner__item-pg active"></div>
                                    <div class="banner__item-pg"></div>
                                    <div class="banner__item-pg "></div>
                                    <div class="banner__item-pg "></div>
                                </div>
                            </div>
                            <div class="banner__bg"></div>
                            <div class="banner__content-image">
                                <img src="../../public/baner.png" alt="" class="banner__image">
                            </div>
                        </div>
                    </SwiperSlide>
                   </Swiper>
                <UIProductDay></UIProductDay>
            </div>
            <UIBannerCard></UIBannerCard>
        </div>
    </div>
</template>

<style lang="scss">

    .active{
        width: 18px;
        border-radius: 4px;
        opacity: 1;
    }
</style>