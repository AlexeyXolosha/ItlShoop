<script setup>
const {data: bannerWide} = fetchBannerWide()

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
   <section class="section container">
    <div v-for="banner in bannerWide?.data" class="banner-wide">
        <div class="banner-wide__info">
            <h1 class="banner__title banner-sale-h1">{{ banner.attributes.name}}</h1>
        </div>
        <div class="banner-wide__bg"></div>
        <div class="banner-wide__image">
            <img :src="imageUpload(banner.attributes.images.preview)" alt="">
        </div>
    </div>
   </section>
</template>

<style lang="scss">
    .banner-wide{
        display: flex;
        max-height: 180px;
        background-color: var(--color-dark-yellow);
        border-radius: var(--border-radius-6px);
        overflow: hidden;

        &__info{
            display: flex;
            align-items: center;
            width: 100%;
            padding: 70px 72px 70px 72px;
        }

        &__bg{
            position: absolute;
            left: 50%;
            transform: skewX(-10deg);
            width: 5%;
            height: 100%;
            max-height: 180px;
            background-color: var(--color-dark-yellow);
            z-index: 1;
        }

        &__image{
            width: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }

    .banner-sale-h1{
        width: 768px;
        font-size: 30px;
    }

</style>