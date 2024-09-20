<script setup>
const props = defineProps({
  info: Object
})

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
  <a :href="info.links.self" class="catalog-child">
    <div class="catalog-child__body">
      <img :src="imageUpload(info.attributes.img)" alt="iph" class="catalog-child__image" width="60" height="60">
      <div class="catalog-child__info">
        <p class="catalog-child__title heade-menu">{{info.attributes.name}}</p>
        <span class="catalog-child__count">{{ info.attributes.count }} Товаров</span>
      </div>
    </div>
  </a>
</template>

<style lang="scss">
.catalog-child{
  text-decoration: none;
  padding: 24px 28px;
  border: 1px solid var(--color-blue-transparent);
  border-radius: var(--border-radius-6px);
  transition: 0.2s ease-in;
  &__body{
    display: flex;
    align-self: center;
    column-gap: 20px;
  }

  &__title{
    color: var(--color-blue)
  }

  &__count{
    font-size: 14px;
    color: var(--color-blac-80);
  }

  &:hover{
    transform: scale(1.1);
    border-color: var(--color-blue);
  }

}
</style>