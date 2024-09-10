<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

</script>

<template>
    <section class="section container">
        <div class="section__body">
            <div class="section__info">
                <h2 class="section__title">
                    <slot></slot>
                </h2>
                <UITabs></UITabs>
            </div>
            <Swiper 
            navigation
            :slides-per-view="6" 
            :space-between="24",
            :modules="[Navigation]"
            >
                <SwiperSlide>
                    <UICardItem></UICardItem>
                </SwiperSlide>
                <SwiperSlide>
                    <UICardItem></UICardItem>
                </SwiperSlide>
                <SwiperSlide>
                    <UICardItem></UICardItem>
                </SwiperSlide>
                <SwiperSlide>
                    <UICardItem></UICardItem>
                </SwiperSlide>
                <SwiperSlide>
                    <UICardItem></UICardItem>
                </SwiperSlide>
                <SwiperSlide>
                    <UICardItem></UICardItem>
                </SwiperSlide>
                <SwiperSlide>
                    <UICardItem></UICardItem>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style lang="scss">
.custom-button-next{
    background-color: var(--color-white);
    color: var(--color-blue);
}
</style>


