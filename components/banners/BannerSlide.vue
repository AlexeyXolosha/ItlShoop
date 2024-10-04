<script setup>
const { data: BannerSlide } = fetchBannerSlide()

const mainSwiper = ref(null);
const activeIndex = ref(0); // Отслеживаем активный индекс

const onSwiperInit = (swiperInstance) => {
    //console.log('Swiper initialized:', swiperInstance);
    mainSwiper.value = swiperInstance;

    // Отслеживаем изменение активного слайда
    swiperInstance.on('slideChange', () => {
        activeIndex.value = swiperInstance.activeIndex;
    });
};

const changeSlide = (index) => {
    if (mainSwiper.value && typeof mainSwiper.value.slideTo === 'function') {
        //   console.log('Switching to slide:', index);
        mainSwiper.value.slideTo(index);
        activeIndex.value = index; // Обновляем активный индекс при клике
    } else {
        console.error('Функции нет');
    }
};

const slidePrev = () => {
    if (mainSwiper.value && typeof mainSwiper.value.slidePrev === 'function') {
        mainSwiper.value.slidePrev();
    } else {
        console.error('Функции нет');
    }
};

const slideNext = () => {
    if (mainSwiper.value && typeof mainSwiper.value.slideNext === 'function') {
        mainSwiper.value.slideNext();
    } else {
        console.error('Функции нет');
    }
};
</script>

<template>
    <div class="banner">
        <div class="banner__container section--hidden-x container ">
            <div class="banner__inner">
                <Swiper class="banner__swiper" @swiper="onSwiperInit">
                    <SwiperSlide v-for="banner in BannerSlide?.data" :key="banner.id">
                        <div class="banner__slide">
                            <div class="banner__info-block">
                                <h1 class="banner__title h1-banner">
                                    {{ banner?.attributes.name }}
                                </h1>
                                <span class="banner__subtitle">{{ banner?.text?.text }}</span>
                                <div class="banner__pagination">
                                    <div v-for="(banner, index) in BannerSlide?.data" :key="index"
                                        :class="['banner__item-pg', { active: index === activeIndex }]"
                                        @click="changeSlide(index)"></div>
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
.active {
    width: 20px;
    border-radius: 4px;
    opacity: 1;
}
</style>