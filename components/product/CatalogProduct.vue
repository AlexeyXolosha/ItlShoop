<template>
  <section class="section container">
    <div class="section__body">
      <div class="catalog">
        <div class="catalog__inner">
          <div class="catalog-filter">
            <div class="catalog-filter__body">
              <FilterCollections></FilterCollections>
              <FilterCheckers></FilterCheckers>
            </div>
          </div>
          <div class="catalog-product">
            <div class="catalog-product__head">
              <div class="catalog-product__select">
                <select name="category">
                  <option value="">Сначала популярные</option>
                </select>
              </div>
              <div class="catalog-product__list">
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
                <UICardItemCag></UICardItemCag>
              </div>
            </div>
            <div class="catalog-product__footer">
              <div class="catalog-product__pagination">
                <button class="catalog-product__button">Показать еще</button>
                <UIPagination></UIPagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.catalog{
    &__inner{
        display: flex;
        justify-content: space-between;
        column-gap: 24px;
    }
}

.catalog-filter {
    max-width: 264px;

  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 28px;
  }
}

.catalog-product {
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  &__head {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(5, 264px);
    gap: 24px;
  }

  &__pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__button {
    height: 44px;
    text-align: center;
    padding: 10px 70px;
    width: 32.3%;
    border: 1px solid var(--color-blue-transparent);
    background-color: var(--color-white);
  }
}
</style>
