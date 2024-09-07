<template>

  <div class="blog">
    <div class="blog__body">
      <img src="../../public/blog.png" alt="" class="blog__image">
      <div class="blog__info">
        <p class="blog__title">PlayStation 5 Slim: новая ревизия, которая понравится вам больше обычной</p>
        <span>Обзор / 28 июня 2022</span>
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

    &__title{
      font-size: 18px;
    }
  }
</style>