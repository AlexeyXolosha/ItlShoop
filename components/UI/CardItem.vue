<script setup>
import yellowButton from './yellowButton.vue';
</script>

<template>
    <div class="card-product">
        <div class="card-product__sticker-list">
            <span class="card-product__sticker sticker-bg--green">Товар недели</span>
            <span class="card-product__sticker sticker-bg--red">Скидка 6%</span>
            <span class="card-product__sticker sticker-bg--strawberry">Новинка</span>
            <span class="card-product__sticker sticker-bg--blue">Хит продаж</span>
        </div>
        <img src="../../public/iph.png" alt="" class="card-product__image" width="200" height="188">
        <div class="card-product__info">
            <div class="card-product__rating">
                <img src="../../public/icons/star.svg" alt="" width="13" height="12">
                <div class="card-product__rating-score">
                    <p>4.8</p>
                </div>
            </div>
            <div class="card-product__name">
                <p>Смартфон Apple iPhone 14 Pro Max</p>
            </div>
            <div class="card-product__shop-count">
                <p>В наличии в <span>5 магазинах</span> </p>
            </div>
            <div class="card-product__shop-prevPrice">
                <span>529 990</span>
            </div>
            <div class="card-product__shop-currentPrice">
                <p>499 990 ₸</p>
            </div>
        </div>

        <div class="card-product__add">
            <yellowButton class="yellowCard__card">В корзину</yellowButton  >
            <div class="card-product__item">
                <svg width="20" height="20" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4375 2.9375L11.9531 3.5L12.5156 2.98438C14.0625 1.4375 16.2656 0.734375 18.375 1.10938C21.6094 1.625 24 4.4375 24 7.71875V7.95312C24 9.92188 23.1562 11.7969 21.75 13.1094L13.2656 21.0312C12.9375 21.3594 12.4688 21.5 12 21.5C11.4844 21.5 11.0156 21.3594 10.6875 21.0312L2.20312 13.1094C0.796875 11.7969 0 9.92188 0 7.95312V7.71875C0 4.4375 2.34375 1.625 5.57812 1.10938C7.6875 0.734375 9.89062 1.4375 11.4375 2.9375C11.4375 2.98438 11.3906 2.9375 11.4375 2.9375ZM11.9531 6.6875L9.84375 4.53125C8.8125 3.54688 7.35938 3.07812 5.95312 3.3125C3.79688 3.6875 2.25 5.51562 2.25 7.71875V7.95312C2.25 9.3125 2.76562 10.5781 3.75 11.4688L12 19.1562L20.2031 11.4688C21.1875 10.5781 21.75 9.3125 21.75 7.95312V7.71875C21.75 5.51562 20.1562 3.6875 18 3.3125C16.5938 3.07812 15.1406 3.54688 14.1094 4.53125L11.9531 6.6875Z" fill="#0E6CDD"/>
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M17.6562 2.84375H19.0625C19.4922 2.84375 19.8438 3.19531 19.8438 3.625C19.8438 4.09375 19.4922 4.40625 19.0625 4.40625H17.6562V5.8125C17.6562 6.24219 17.3047 6.59375 16.875 6.59375C16.4062 6.59375 16.0938 6.24219 16.0938 5.8125V4.40625H14.6875C14.2188 4.40625 13.9062 4.09375 13.9062 3.625C13.9062 3.19531 14.2188 2.84375 14.6875 2.84375H16.0938V1.4375C16.0938 1.00781 16.4062 0.65625 16.875 0.65625C17.3047 0.65625 17.6562 1.00781 17.6562 1.4375V2.84375ZM10.9375 5.73438L19.1406 9.21094C19.6484 9.44531 20 9.95312 20 10.5C20 11.0859 19.6484 11.5938 19.1406 11.8281L10.9375 15.3047C10.625 15.4609 10.3125 15.5 10 15.5C9.64844 15.5 9.33594 15.4609 9.02344 15.3047L0.820312 11.8281C0.3125 11.5938 0 11.0859 0 10.5C0 9.95312 0.3125 9.44531 0.820312 9.21094L9.02344 5.73438C9.33594 5.57812 9.64844 5.5 10 5.5C10.3125 5.5 10.625 5.57812 10.9375 5.73438ZM2.57812 10.5L9.76562 13.5859C9.80469 13.625 9.88281 13.625 10 13.625C10.0781 13.625 10.1562 13.625 10.1953 13.5859L17.3828 10.5L10.1953 7.45312C10.1562 7.41406 10.0781 7.375 10 7.375C9.88281 7.375 9.80469 7.41406 9.76562 7.45312L2.57812 10.5ZM2.30469 14.2109C2.57812 14.5625 2.53906 15.0703 2.22656 15.3828L9.76562 18.5859C9.80469 18.625 9.88281 18.625 10 18.625C10.0781 18.625 10.1562 18.625 10.1953 18.5859L17.6562 15.4219C17.4609 15.1484 17.4219 14.7969 17.5781 14.4844C17.8125 14.0156 18.3594 13.8203 18.8281 14.0547L19.1797 14.25C19.6875 14.4844 20 14.9531 20 15.5C20 16.0859 19.6484 16.5938 19.1016 16.8281L10.9375 20.3047C10.625 20.4609 10.3125 20.5 10 20.5C9.64844 20.5 9.33594 20.4609 9.02344 20.3047L0.859375 16.8281C0.3125 16.5938 0 16.0859 0 15.4609C0 14.9922 0.195312 14.5625 0.585938 14.2891L1.01562 13.9766C1.40625 13.7031 1.99219 13.7812 2.30469 14.2109Z" fill="#0E6CDD"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-product{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        border: 1px solid var(--color-blue-transparent);
        border-radius: var(--border-radius-6px);
        min-height: 264px;
        padding: 32px 32px 36px;


        &__image{
            position: relative;
            margin-bottom: 21px;
        }

        &__sticker-list{
            display: flex;
            flex-direction: column;
            align-items: start;
            row-gap: 4px;

            position: absolute;
            z-index: 1;
        }

        &__sticker{
            color: var(--color-white);
            border-radius: var(--border-radius-4px);
            padding-inline: 12px;
        }

        &__info{
            display: flex;
            flex-direction: column;
        }

        &__rating{
            display: flex;
            column-gap: 8px;
            margin-bottom: 3px;
            &-score{
                font-size: 14px;
            }
        }
        &__name{
            max-width: 200px;
            margin-bottom: 6px;
        }

        &__shop-count{
            margin-bottom: 8px;

            span{
                color: var(--color-dark-blue);
            }
        }

        &__shop-prevPrice{
            font-size: 14px;
            text-decoration: line-through;
            color: var(--color-blac-80);
        }

        &__shop-currentPrice{
            font-size: 24px;
            margin-bottom: 12px;
        }

        &__add{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__item{
            display: flex;
            align-items: center;
            column-gap: 13px;

            svg{
                color: var(--color-blue-transparent-alt);
            }

            svg:hover{
                color: var(--color-blue);
            }
        }
    }

    .sticker-bg--green{
        background-color: var(--color-green);
    }

    .sticker-bg--red {
        background-color: var(--color-red);
    }
    .sticker-bg--strawberry {
        background-color: var(--color-strawberry);
    }
    .sticker-bg--blue {
        background-color: var(--color-blue);
    }
</style>