<template>
   <section class="section container">
    <div class="banner-wide">
        <div class="banner-wide__info">
            <h1 class="banner__title banner-sale-h1">Скидки до 50% на втрой товар встраиваемой техники.</h1>
        </div>
        <div class="banner-wide__bg"></div>
        <div class="banner-wide__image">
            <img src="../../public/company_photo.png" alt="">
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
            object-fit: contain;
        }
    }

    .banner-sale-h1{
        width: 768px;
        font-size: 30px;
    }

</style>