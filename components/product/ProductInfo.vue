<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const props = defineProps({
    props: Object
})

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}

const mainSwiper = ref(null);
const activeIndex = ref(0); // Отслеживаем активный индекс

const onSwiperInit = (swiperInstance) => {
    console.log('Swiper initialized:', swiperInstance);
    mainSwiper.value = swiperInstance;

    // Отслеживаем изменение активного слайда
    swiperInstance.on('slideChange', () => {
        activeIndex.value = swiperInstance.activeIndex;
    });
};

const changeSlide = (index) => {
    if (mainSwiper.value && typeof mainSwiper.value.slideTo === 'function') {
        console.log('Switching to slide:', index);
        mainSwiper.value.slideTo(index);
        activeIndex.value = index; // Обновляем активный индекс при клике
    } else {
        console.error('Swiper instance not found or slideTo is not a function.');
    }
};

const slidePrev = () => {
    if (mainSwiper.value && typeof mainSwiper.value.slidePrev === 'function') {
        mainSwiper.value.slidePrev();
    } else {
        console.error('Swiper instance not found or slidePrev is not a function.');
    }
};

const slideNext = () => {
    if (mainSwiper.value && typeof mainSwiper.value.slideNext === 'function') {
        mainSwiper.value.slideNext();
    } else {
        console.error('Swiper instance not found or slideNext is not a function.');
    }
};
</script>

<template>
    <section class="section container">
        <div class="info-block">
            <div class="info-block__wrapper">
                <div class="info-block__slider">
                    <div class="info-block__slider-nav"  v-if="props.props.data.attributes?.images?.more?.length > 0" >
                        <ul class="info-block__list">
                            <div class="swiper-prev" @click="slidePrev">
                                <i class="fa-regular fa-angle-up"></i>
                            </div>
                            <Swiper class="swiper-nav" slides-per-view="5" direction="vertical" :space-between="90" @swiper="onSwiperInit">
                                <SwiperSlide class="swiper-slide-minuater" v-for="(image, index) in props.props.data.attributes.images.more" :key="index">
                                    <div class="info-block__item"  :class="{ 'active-nav': activeIndex === index }" @click="changeSlide(index)">
                                        <img :src="imageUpload(image)" width="60" height="60" class="info-block__image">
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div class="swiper-next" @click="slideNext">
                                <i class="fa-regular fa-angle-down"></i>
                            </div>
                        </ul>
                    </div>
                    <div class="info-block__swiper-main">
                        <Swiper class="swiper-main" @swiper="onSwiperInit">
                            <SwiperSlide v-for="(image, index) in props.props.data.attributes.images.more" :key="index">
                                <div class="swiper-main__slide">
                                    <img :src="imageUpload(image)" class="slide__image" alt="">
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div class="info-block__details">
                    <div class="info-block__character" v-for="(property, key) in props.props.data.attributes.properties"
                        :key="key">
                        <p class="info-block__title">{{ property.name }}</p>
                        <p v-if="property.value" class="info-block__subtitle">{{ property.value }}</p>
                    </div>
                </div>
            </div>
            <ProductTabs :tabs="props.props.data"></ProductTabs>
            <ProductTizers :tizers="props.props.data.attributes.tizers"></ProductTizers>
        </div>
        <ProductCart></ProductCart>
    </section>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
}

.swiper-nav{
    cursor: pointer;
    max-height: 480px;
    height: 100%
}

.swiper-prev,
.swiper-next {
    border: 1px solid var(--color-blue-transparent);
    border-radius: var(--border-radius-6px);
    text-align: center;
    padding: 4px 20px;
    color: var(--color-blue);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: var(--color-blue);
        color: var(--color-white)
    }
}


.swiper-main__slide{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.slide__image{
    width: 90%;
    height: 90%;
    object-fit: contain;
    object-position: center center;
}

.active-nav{
        border: 1px solid var(--color-blue);
        border-radius: var(--border-radius-6px);
    }
</style>