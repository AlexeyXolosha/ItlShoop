<script setup>
const props = defineProps({
    props: Object
})

console.log(props.props.data)

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
    <div class="info-block">
        <div class="info-block__wrapper">
            <div class="info-block__slider">
                <div class="info-block__slider-nav">
                    <ul class="info-block__list">
                        <div class="swiper-prev">
                            <i class="fa-regular fa-angle-up"></i>
                        </div>
                        <li class="info-block__item" v-for="(image, index) in props.props.data.attributes.images.more"
                            :key="index">
                            <img :src="imageUpload(image)" alt="" class="info-block__image">
                        </li>
                        <div class="swiper-next">
                            <i class="fa-regular fa-angle-down"></i>
                        </div>
                    </ul>
                </div>
                <div class="info-block__swiper-main">
                    <Swiper class="swiper-main">
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
    </div>
</template>