<template>
  <div class="catalog-child">
    <div class="catalog-child__body">
      <img src="../../public/iph.png" alt="iph" class="catalog-child__image" width="60" height="60">
      <div class="catalog-child__info">
        <p class="catalog-child__title heade-menu">Смартфоны</p>
        <span class="catalog-child__count">781 товар</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.catalog-child{
  &__body{
    display: flex;
    align-self: center;
    column-gap: 20px;
    padding: 24px 28px;
    border: 1px solid var(--color-blue-transparent);
    border-radius: var(--border-radius-6px);
  }

  &__title{
    color: var(--color-blue)
  }

  &__count{
    font-size: 14px;
    color: var(--color-blac-80);
  }
}
</style>