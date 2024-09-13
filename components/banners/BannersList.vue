<script setup>
const {data: bannerText} = fetchBannerText()
</script>

<template>
    <section class="section container">
        <div class="section__body">
            <div class="section__list">
                <BannersBannerItem  v-for="banner in bannerText?.data" 
                :key="banner.id"
                :name="banner.attributes.name"
                :image="banner.attributes.images.preview"
                :title="banner.attributes.text?.title"
                :text="banner.attributes?.text?.text"
                :button="banner.attributes.buttons"
                ></BannersBannerItem>
            </div>
        </div>
    </section>
</template>
