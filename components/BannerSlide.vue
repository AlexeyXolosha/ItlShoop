<template>
    <div class="banner">
        <div class="banner__container section--hidden-x container ">
            <div class="banner__inner">
                   <Swiper class="banner__swiper">
                    <SwiperSlide>
                        <div class="banner__slide">
                            <div class="banner__info-block">
                                <h1 class="banner__title h1-banner">
                                    Скидки до 50% на втрой товар встраиваемой техники.
                                </h1>
                                <span class="banner__subtitle">До 30 апреля</span>
                                <div class="banner__pagination ">
                                    <div class="banner__item-pg active"></div>
                                    <div class="banner__item-pg"></div>
                                    <div class="banner__item-pg "></div>
                                    <div class="banner__item-pg "></div>
                                </div>
                            </div>
                            <div class="banner__bg"></div>
                            <div class="banner__content-image">
                                <img src="../public/baner.png" alt="" class="banner__image">
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="banner__slide">
                            <div class="banner__info-block">
                                <h1 class="banner__title h1-banner">
                                    Скидки до 50% на втрой товар встраиваемой техники.
                                </h1>
                                <span class="banner__subtitle">До 30 апреля</span>
                            </div>
                            <div class="banner__bg"></div>
                            <div class="banner__content-image">
                                <img src="../public/Baner 1.png" alt="" class="banner__image">
                            </div>
                        </div>
                    </SwiperSlide>
                   </Swiper>
                <UIProductDay></UIProductDay>
            </div>
            <UIBannerCard></UIBannerCard>
        </div>
    </div>
</template>

<style lang="scss">
    .banner{
        background-color: var(--color-bg);
        padding: 36px 0;
        
        &__container{
            display: flex;
            flex-direction: column;
            row-gap: 32px;
        }

        &__inner{
            display: flex;
            column-gap: 24px;
            max-height: 320px;
        }

        &__swiper{
            width: 75%;
            height: 100%;
        }

        &__slide{
            position: relative;
            display: flex;
            align-items: center;
            background-color: var(--color-dark-yellow);
            width: 100%;
            max-width: 1272px;
            border-radius: var(--border-radius-6px);
        }

        &__info-block{
            display: flex;
            flex-direction: column;
            row-gap: 36px;
            padding: 72px;
            padding-bottom: 92px;
            max-height: 320px;
        }

        &__title{
            width: 552px;
            font-size: 40px;
            font-weight: 400;
        }

        &__subtitle{
            color: var(--color-dark-blue);
        }

        &__bg{
            position: absolute;
            left: 50%;
            background-color: var(--color-dark-yellow);
            width: 10%;
            height: 100%;
            transform: skewX(-10deg)
        }

        &__content-image{
            height: 100%;
            width: 100%;
        }

        &__image{
            border-radius: var(--border-radius-6px);
            width: 100%;
            height: 100%;
            max-height: 320px;
            object-fit: cover;
        }

        &__pagination{
            display: flex;
            align-items: center;
            column-gap: 6px;
        }

        &__item-pg{
            width: 8px;
            height: 8px;
            background-color: var(--color-blue);
            border-radius: 50%;
            opacity: 0.3;

            &:hover{
                opacity: 0.8;
            }
        }
    }

    .active{
        width: 18px;
        border-radius: 4px;
        opacity: 1;
    }
</style>