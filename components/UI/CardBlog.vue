<script setup> 
const props = defineProps ({
  title: String,
  image: String,
  link: String,
  section: String
})

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>

  <div class="blog">
    <div class="blog__body">
      <img :src="imageUpload(image)" alt="" class="blog__image">
      <div class="blog__info">
        <p class="blog__title">{{title}}</p>
        <span>{{section}} / 28 июня 2022</span>
      </div>
    </div>
</div>

</template>

<style lang="scss">
  .blog{

    &__body{
      display: flex;
      flex-direction: column;
      row-gap: 24px;
    }

    &__info{
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      width: 264px;

      span{
        font-size: 14px;
        color: var(--color-blac-80);
      }
    }

    &__image{
      border-radius: var(--border-radius-6px);
      max-height: 192px;
    }

    &__title{
      font-size: 18px;
    }
  }
</style>