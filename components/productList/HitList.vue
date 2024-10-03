<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';


const link = ref(''); 
const hitProduct = ref(null);

const loading = ref(false);


const {data: hitList} = fetchHit()

const linkItem = (selectedLink) => {
    link.value = selectedLink;
    // console.log(link.value)
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
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


watch(link, async (newLink) => {
  if (newLink) {
    loading.value = true; // Начало загрузки
    try {
      const productData = await fetchProduct(newLink);
      console.log('Полученные данные продукта:', productData);

      // Искусственная задержка, например, на 2 секунды (2000 миллисекунд)
      await delay(2000);

      hitProduct.value = productData;
    } catch (error) {
      console.error('Ошибка при получении данных продукта:', error);
    } finally {
      loading.value = false; // Завершение загрузки
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
              <UITabs :items="hitList" @get-link="linkItem"></UITabs>
        </div>
        <div v-if="loading">
          <SkeletonList />
        </div>
        <div v-else>
          <Swiper 
            navigation
            :slides-per-view="6" 
            :space-between="24"
            :modules="[Navigation]"
          >
            <SwiperSlide v-for="product in hitProduct?.data" :key="product.id">
              <UICardItem :product="product"></UICardItem>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  </template>



