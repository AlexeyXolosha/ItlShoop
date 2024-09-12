<script setup>
const props = defineProps({
    id: Number,
    image: String,
    name: String,
    link: String
})

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
    <div class="category-card">
        <div class="category-card__body">
            <div class="category-card__image">
                <img :src="imageUpload(image)" alt="" width="128" height="128" class="category__image"  loading="lazy">
            </div>
        </div>
        <div class="category-card__title">
            <span>
                {{ name }}
            </span>
        </div>
    </div>
</template>

<style lang="scss">
    .category-card{
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 24px;

        &__body{
        padding: 32px;
        background-color: var(--color-blue-transparent-card);
        border-radius: var(--border-radius-6px);
        }

        &__title{
            text-align: center;
        }
    }
    .category__image{
        object-fit: contain;
    }
</style>
