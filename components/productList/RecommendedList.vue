<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const {data: recom} = RecomendadeList()
const link = ref(''); 
const Recomendade = ref(null);

const linkItem = (selectedLink) => {
    link.value = selectedLink;
    console.log(link.value)
}

const fetchProduct = async (endpoint) => {
    try {
        const response = await $fetch(`${BASE_URL}${endpoint}`);
        return response;
    } catch (error) {
        //console.error('Ошибка при получении данных продукта:', error);
        throw error;
    }
}

watch(link, async (newLink, oldLink) => {
   // console.log('Ссылка изменена с', oldLink, 'на', newLink);
    if (newLink) {
        try {
            Recomendade.value = await fetchProduct(newLink);
        //    console.log('Полученные данные продукта:', Recomendade.value);
        } catch (error) {
         //   console.error('Ошибка при получении данных продукта:', error);
        }
    }
});
</script>

<template>
    <section class="section container">
        <div class="section__body">
            <div class="section__info">
                <h2 class="section__title">
                    <slot></slot>
                </h2>
                <UITabs :items="recom" @get-link="linkItem"></UITabs>
            </div>
            <Swiper 
            navigation
            :slides-per-view="6" 
            :space-between="24",
            :modules="[Navigation]"
            >
                <SwiperSlide v-for="Recomendade in Recomendade?.data">
                    <UICardItem 
                      :product="Recomendade"
                    ></UICardItem>
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


