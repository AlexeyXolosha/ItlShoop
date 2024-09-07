<template>
    <section class="section">
        <div class="section__body">
            <div class="section__list">
                <BannersBannerItem></BannersBannerItem>
                <BannersBannerItem></BannersBannerItem>
                <BannersBannerItem></BannersBannerItem>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .section__list{
        display: flex;
        justify-content: space-between;
        column-gap: 24px;
    }
</style>