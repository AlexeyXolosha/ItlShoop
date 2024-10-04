<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import { ref, watch } from 'vue';

import 'swiper/css';
import 'swiper/css/navigation';


const { data: recom } = RecomendadeList();
const link = ref('');
const Recomendade = ref(null);
const isLoading = ref(true); 

const linkItem = (selectedLink) => {
  link.value = selectedLink;
};

const fetchProduct = async (endpoint) => {
  try {
    const response = await $fetch(`${BASE_URL}${endpoint}`);
    return response;
  } catch (error) {
    throw error;
  }
};

watch(link, async (newLink, oldLink) => {
  if (newLink) {
    try {
      isLoading.value = true; 
      Recomendade.value = await fetchProduct(newLink);
    } catch (error) {
        console.error("Ошибка", error )
    } finally {
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);
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

      <SkeletonList v-if="isLoading" />

      <Swiper 
        v-if="!isLoading"
        navigation
        :slides-per-view="6" 
        :space-between="24"
        :modules="[Navigation]"
        :breakpoints="{
              1280: {
                slidesPerView: 4,
              },
              1720: {
                slidesPerView: 5,
              },
              1920: {
                slidesPerView: 6,
              }
            }"
      >
        <SwiperSlide v-for="Recomendade in Recomendade?.data" :key="Recomendade.id">
          <UICardItem :product="Recomendade"></UICardItem>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style lang="scss">
.custom-button-next {
  background-color: var(--color-white);
  color: var(--color-blue);
}
</style>
