<template>
    <div class="banner-main">
        <div class="banner-main__inner">
            <div class="banner-main__banner">
                <div class="banner__body">
                    <div class="banner__info">
                        <div class="banner__body-title">
                            <p>Скидки до 50% на второй товар встраиваемой техники.</p>
                        </div>
                        <div class="banner__body-date">
                            <span>До 30 апреля</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="banner-main__product-day">
                    <div class="banner-main__time">
                        <p>Товар дня</p>
                       <div class="banner-main__time-content">
                            <div class="banner-main__time-count">
                                <div class="banner-main__item">22</div>
                            </div>
                            <div class="banner-main__time-separate">:</div>
                            <div class="banner-main__time-count">
                                <div class="banner-main__item">37</div>
                            </div>
                            <div class="banner-main__time-separate">:</div>
                            <div class="banner-main__time-count">
                                <div class="banner-main__item">52</div>
                            </div>
                       </div>
                    </div>
                    <div class="banner-main__product-info">
                        <div class="banner-main__product-info-left">
                            <img class="banner-main__product-info-image" src="../../public/samsung.png" alt="" width="136" height="160">
                        </div>
                        <div class="banner-main__product-info-right">
                            <p>Смартфон Samsung Galaxy S23 256GB Phantom Black</p>
                            <div class="banner-main__product-info-rating">
                                <div class="banner-main__product-info-stars">
                                    <img src="../../public/icons/star.svg" alt="" width="13" height="12">
                                    <img src="../../public/icons/star.svg" alt="" width="13" height="12">
                                    <img src="../../public/icons/star.svg" alt="" width="13" height="12">
                                    <img src="../../public/icons/star.svg" alt="" width="13" height="12">
                                    <img src="../../public/icons/star.svg" alt="" width="13" height="12">
                                </div>
                                <div class="banner-main__product-info-countRev">
                                    <span>17 отзывов</span>
                                </div>
                            </div>
                            <div class="banner-main__price shop-prevPrice">
                                <span>529 990</span>
                            </div>
                            <div class="banner-main__price shop-currentPrice ">
                                <p>499 990 ₸</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .banner-main{
        background-color: var(--color-bg);
        padding: 36px 108px;

        &__banner{
            max-width: 1272px;
            max-height: 320px;
        }

        .banner__body{
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            background: var(--color-dark-yellow);
            border-radius: var(--border-radius-6px);
            padding: 72px 48px;

            &-title{
                font-size: 40px;
                max-width: 556px;
                margin-bottom: 36px;
                p{
                    margin: 0;
                }
            }

            &-date{
                font-size: 18px;
                color: var(--color-dark-blue);
            }
        }
    
        &__inner{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &__product-day{
            display: flex;
            flex-direction: column;
            align-items: start;

            border-radius: var(--border-radius-6px);
            padding: 31px 40px 28px 32px;
            background-color: var(--color-white);
            
        }

        &__time{
            display: flex;
            column-gap: 70px;
            margin-bottom: 30px;

            p{
                font-size: 24px;
                margin-bottom: 0;
            }

            &-content{
                display: inherit;
                align-items: center;
                column-gap: 5px;
                font-family: 'Circe';
                font-weight: 600;
                line-height: 1.28;
            }
        }

        &__item{
            background-color: var(--color-black-30);
            border-radius: var(--border-radius-6px);
            padding: 6px 8px;
        }

        &__product-info{
            display: flex;
            align-items: center;
            column-gap: 40px;

            &-right{
                display: flex;
                flex-direction: column;
                p{
                    max-width: 159px;
                    margin-bottom: 6px;
                }
            }

            &-rating{
                display: flex;
                align-items: center;
                column-gap: 8px;
                margin-bottom: 2px;
            }

            &-stars{
                display: flex;
                align-items: center;
                column-gap: 4px;
            }
        }
    }
    .shop-currentPrice{
        font-size: 30px;
    }
</style>