<script setup>
const {data: bannerCatalog} = fetchBannerCatalog()

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
      <div v-for="banner in bannerCatalog?.data" :key="banner.id" class="banner-catalog">
        <div class="banner-catalog__inner">
          <div class="banner-catalog__title">
            <h1 class="h1-custom">{{banner.attributes.text.title}}</h1>
          </div>
          <div class="banner-catalog__block-image">
            <img :src="imageUpload(banner.attributes.images.preview)" width="318" height="140" alt="" class="banner-catalog__image">
          </div>
        </div>
      </div>
</template>

<style lang="scss">
.banner-catalog{
  background-color: var(--color-bg);
  border-radius: var(--border-radius-6px);
  padding: 30px 72px;

  &__inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>