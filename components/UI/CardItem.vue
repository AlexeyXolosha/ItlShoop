<script setup>
const props = defineProps({
  product: Object
})

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}

const stickerColors = {
  'Хит': 'sticker-bg--blue',
  'Советуем': 'sticker-bg--green',
  'Новинка': 'sticker-bg--strawberry',
  'Акция': 'sticker-bg--red'
}
</script>

<template>
    <article class="card-product">
            <div class="card-product__sticker-list">
                <span  v-for="sticker in product.attributes.stikers" :key="sticker" :class="['card-product__sticker', stickerColors[sticker]]">{{ sticker }}</span>
            </div>
            <a :href="product.links.self" class="card-product__img">
                <img :src="imageUpload(product.attributes.image)" alt="" width="192" height="192" class="card-product__image">
            </a>
            <div class="card-product__info">
                <div class="card-product__rating">
                    <img src="../../public/icons/star.svg" alt="" width="13" height="12">
                    <div class="card-product__rating-score">
                        <p>4.8</p>
                    </div>
                </div>
                <div class="card-product__name">
                    <a :href="product.links.self" v-if="product.attributes.name">{{product.attributes?.name}}</a>
                </div>
                <div class="card-product__shop-count">
                    <p><span>{{ product?.attributes?.product?.stores?.count?.title }}</span> </p>
                </div>
                <div class="card-product__shop-prevPrice">
                    <span v-if="product.attributes.product.basePrice?.valueFormatted">{{product?.attributes?.product?.basePrice?.valueFormatted}}</span>
                    <span v-if="product.attributes.product.price?.valueFormatted">{{product?.attributes?.product?.basePrice?.valueFormatted}}</span>
                    <span v-else>Нет в наличии</span>
                </div>
                <div class="card-product__shop-currentPrice">
                    <p v-if="product.attributes.product.price?.valueFormatted">{{ product?.attributes?.product?.price?.valueFormatted }}</p>
                    <span v-else>Нет в наличии</span>
                </div>
            </div>

            <div class="card-product__add">
                    <UIYellowButton v-if="product.attributes.product.quantity" class="yellowCard__card"><template #icon><i class="fa-regular fa-plus"></i></template>В корзину</UIYellowButton>
                    <UIYellowButton v-else class="yellowCard__card">Подробнее</UIYellowButton>
                <div class="card-product__item">
                    <i class="fa-regular fa-heart"></i>
                    <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M17.6562 2.84375H19.0625C19.4922 2.84375 19.8438 3.19531 19.8438 3.625C19.8438 4.09375 19.4922 4.40625 19.0625 4.40625H17.6562V5.8125C17.6562 6.24219 17.3047 6.59375 16.875 6.59375C16.4062 6.59375 16.0938 6.24219 16.0938 5.8125V4.40625H14.6875C14.2188 4.40625 13.9062 4.09375 13.9062 3.625C13.9062 3.19531 14.2188 2.84375 14.6875 2.84375H16.0938V1.4375C16.0938 1.00781 16.4062 0.65625 16.875 0.65625C17.3047 0.65625 17.6562 1.00781 17.6562 1.4375V2.84375ZM10.9375 5.73438L19.1406 9.21094C19.6484 9.44531 20 9.95312 20 10.5C20 11.0859 19.6484 11.5938 19.1406 11.8281L10.9375 15.3047C10.625 15.4609 10.3125 15.5 10 15.5C9.64844 15.5 9.33594 15.4609 9.02344 15.3047L0.820312 11.8281C0.3125 11.5938 0 11.0859 0 10.5C0 9.95312 0.3125 9.44531 0.820312 9.21094L9.02344 5.73438C9.33594 5.57812 9.64844 5.5 10 5.5C10.3125 5.5 10.625 5.57812 10.9375 5.73438ZM2.57812 10.5L9.76562 13.5859C9.80469 13.625 9.88281 13.625 10 13.625C10.0781 13.625 10.1562 13.625 10.1953 13.5859L17.3828 10.5L10.1953 7.45312C10.1562 7.41406 10.0781 7.375 10 7.375C9.88281 7.375 9.80469 7.41406 9.76562 7.45312L2.57812 10.5ZM2.30469 14.2109C2.57812 14.5625 2.53906 15.0703 2.22656 15.3828L9.76562 18.5859C9.80469 18.625 9.88281 18.625 10 18.625C10.0781 18.625 10.1562 18.625 10.1953 18.5859L17.6562 15.4219C17.4609 15.1484 17.4219 14.7969 17.5781 14.4844C17.8125 14.0156 18.3594 13.8203 18.8281 14.0547L19.1797 14.25C19.6875 14.4844 20 14.9531 20 15.5C20 16.0859 19.6484 16.5938 19.1016 16.8281L10.9375 20.3047C10.625 20.4609 10.3125 20.5 10 20.5C9.64844 20.5 9.33594 20.4609 9.02344 20.3047L0.859375 16.8281C0.3125 16.5938 0 16.0859 0 15.4609C0 14.9922 0.195312 14.5625 0.585938 14.2891L1.01562 13.9766C1.40625 13.7031 1.99219 13.7812 2.30469 14.2109Z" fill="#0E6CDD"/>
                    </svg>
                </div>
            </div>
    </article>
</template>

<style lang="scss" scoped>
    .card-product{
        text-decoration: none;
        color: #333;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        border: 1px solid var(--color-blue-transparent);
        border-radius: var(--border-radius-6px);
        min-height: 496px;
        width: auto;
        padding: 32px 29px 36px 32px;
        transition: 0.2s ease-in;


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
            align-items: start;
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
            line-height: 24px;

            a{
                text-decoration: none;
                color: var(--color-dark);

                &:hover{
                    color: var(--color-blue);
                }
            }
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
            column-gap: 20px;
        }

        &__item{
            display: flex;
            align-items: center;
            column-gap: 13px;

            i{
                color: var(--color-blue-transparent-alt);
            }

            i:hover{
                color: var(--color-blue);
            }

            svg{
                color: var(--color-blue-transparent-alt);
            }

            svg:hover{
                color: var(--color-blue);
            }
        }

        &__img{
            display: flex;
            justify-content: center;
            height: 188px;
        }

        &__image{
            width: 100%;
            height: 100%;
            object-position: center;
            object-fit: contain;
        }
        
        &:hover{
            border-color: var(--color-blue);
        }

    }

    .yellowButton{
        max-width: 130px;
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