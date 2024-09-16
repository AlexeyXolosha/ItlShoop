<template>
  <div class="catalog-filter__collections">
    <div class="collection">
      <div class="collection__title">Популярные подборки</div>
      <ul class="collection__list">
        <li class="collection__item">
          <button class="collection__button collection--active">
            <span>iPhone 14 Pro / 14 Pro Max</span>
          </button>
        </li>
        <li class="collection__item">
          <button class="collection__button ">
            <span>Смартфоны с 2 sim-картами</span>
          </button>
        </li>
        <li class="collection__item">
          <button class="collection__button ">
            <span>Новинки 2023</span>
          </button>
          <button class="collection__button ">
            <span>Камерофоны</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collection{
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__title{
    font-size: 24px;
    line-height: 24px;
  }

  &__list{
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  &__item{
    display: flex;
    align-items: center;
    column-gap: 8px; 
  }

  &__button{
    cursor: pointer;
    font-size: 14px;
    border: none;
    background-color: var(--color-yellow-transparent);
    border-radius: var(--border-radius-6px);
    height: 32px;
    padding: 4px 20px;
  }
}

.collection--active{
  background-color: var(--color-yellow-active);
}

</style>
