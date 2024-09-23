<script setup>
const props = defineProps({
    props: Object
})

const stickerColors = {
    'Хит': 'sticker-bg--blue',
    'Советуем': 'sticker-bg--green',
    'Новинка': 'sticker-bg--strawberry',
    'Акция': 'sticker-bg--red'
}

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
    <section class="section container">
        <div class="section__body">
            <div class="product__head">
                <div class="product__inner">
                    <div class="product__title">

                        <ul class="product-title__list">
                            <li class="product-title__item" v-for="(item, index) in props.props?.meta?.breadcrumb"
                                :key="index">
                                <a :href="item.links?.self" class="product-title__link">
                                    <span>{{ item.attributes.name }}</span>
                                </a>
                                <span v-if="index !== props.props.meta.breadcrumb.length - 1">/</span>
                            </li>
                        </ul>

                        <div class="product__head-middle">
                            <h1 class="product__head-title">
                                {{ props.props.data.attributes.name }}
                            </h1>
                            <div class="product__stickers">
                                <span class="product__stiker"
                                    v-for="(stikers, index) in props.props.data.attributes?.stikers.value" :key="index"
                                    :class="[stickerColors[stikers]]">{{ stikers }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="product__detail">

                        <div class="product__rating">
                            <svg width="14" height="14" viewBox="0 0 13 12" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12.5625 4.30246C12.8542 4.34783 13 4.46377 13 4.65028C13 4.76118 12.9323 4.88217 12.7969 5.01323L9.96094 7.68998L10.6328 11.4707C10.638 11.506 10.6406 11.5564 10.6406 11.6219C10.6406 11.7278 10.6133 11.8173 10.5586 11.8904C10.5039 11.9635 10.4245 12 10.3203 12C10.2214 12 10.1172 11.9698 10.0078 11.9093L6.5 10.1248L2.99219 11.9093C2.8776 11.9698 2.77344 12 2.67969 12C2.57031 12 2.48828 11.9635 2.43359 11.8904C2.37891 11.8173 2.35156 11.7278 2.35156 11.6219C2.35156 11.5917 2.35677 11.5413 2.36719 11.4707L3.03906 7.68998L0.195312 5.01323C0.0651042 4.87713 0 4.75614 0 4.65028C0 4.46377 0.145833 4.34783 0.4375 4.30246L4.35938 3.75047L6.11719 0.310019C6.21615 0.10334 6.34375 0 6.5 0C6.65625 0 6.78385 0.10334 6.88281 0.310019L8.64062 3.75047L12.5625 4.30246Z"
                                    fill="#FFCA00" />
                            </svg>
                            <span>4,8</span>
                        </div>

                        <div class="product__code-proudct">
                            <p class="product__number">Код товара: <span>1210618</span></p>
                        </div>

                        <div class="product__button">
                            <button class="product__sample">
                                <i class="fa-regular fa-layer-plus"></i>
                                <span>Сравнить</span>
                            </button>
                            <button class="product__favorite">
                                <i class="fa-regular fa-heart"></i>
                                <span>Избранное</span>
                            </button>
                            <button class="product__share">
                                <i class="fa-regular fa-share-nodes"></i>
                                <span>Поделиться</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>
