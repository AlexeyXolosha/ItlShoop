<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const props = defineProps({
    exp: Object
})
</script>

<template>
    <section class="section container" v-if="props.exp && props.exp.data && props.exp.data.length">
        <div class="section__body">
            <div class="section__info">
                <h2 class="section__title">
                    <slot></slot>
                </h2>
            </div>
            <Swiper navigation
            :slides-per-view="6" 
            :space-between="24",
            :modules="[Navigation]">
                <SwiperSlide v-for="item in props.exp.data" :key="item.id">
                    <UICardItem  :product="item"></UICardItem>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>


