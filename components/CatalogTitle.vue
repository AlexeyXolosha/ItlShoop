<template>
      <div class="catalog-title">
          <div class="catalog-title__body">
              <div class="catalog-title__up">
                  <p class="catalog-title__page">Главная / Каталог / Электроника / <span>Электроника</span></p>
                  <div class="catalog-title__name">Телефоны и смарт-часы <span>— 113</span></div>
              </div>
            <div class="catalog-title__down">
              <UICatalogChild></UICatalogChild>
              <UICatalogChild></UICatalogChild>
              <UICatalogChild></UICatalogChild>
            </div>
        </div>
      </div>
</template>

<style lang="scss">
.catalog-title{

  &__body{
    display: flex;
    flex-direction: column;
    row-gap: 48px;
  }

  &__up{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  &__name{
    font-size: 30px;

    span{
      color: var(--color-black-60);
    }
  }

  &__page{
    color: var(--color-black-70);
    font-size: 14px;
    line-height: 24px;
    span{
      color: #333;
    }
  }

  &__down{
    display: flex;
    column-gap: 16px;
  }
}

</style>