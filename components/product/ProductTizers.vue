<script setup>
const props = defineProps({
    tizers: Array
})

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
    <div class="tizers">
        <ul class="tizers__list">
            <li class="tizers__info" v-for="(tizer, index) in props.tizers.slice(0, 3)" :key="index">
                <img :src="imageUpload(tizer.images.preview)" width="32" height="32" alt="">
                <p class="tizer__title" v-html="tizer.attributes.name"></p>
            </li>
        </ul>
    </div>
</template>


<style lang="scss">
.tizers{
    max-width: 1200px;
    width: 100%;

    &__list{
        display: flex;
        align-items: center;
        column-gap: 20px;
    }

    &__info{
        display: flex;
        align-items: center;
        column-gap: 20px;
        width: 33.333%;
        padding: 28px;
        border: 1px solid var(--color-blue-transparent);
        border-radius: var(--border-radius-6px);
    }
}
</style>