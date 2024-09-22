<script setup>
import { useProductFilter } from '~/store/catalog/filter';

// Получаем маршрут и инициализируем категорию
const route = useRoute();
const category = ref(route.params.category);

// Получаем данные каталога с использованием значения из `category.value`
const { data: catalogProduct, error } = fetchProductCatalog(category.value);

const productStore = useProductFilter()

// Слушаем изменения маршрута и обновляем категорию
watch(() => route.params.category, (newCategory) => {
  if (newCategory) {
    category.value = newCategory;
    productStore.fetchInfo(newCategory);  // Обновляем продукты при изменении категории
  } else {
    console.error("Категория не определена.");
  }
}, { immediate: true });

const updateSelectedFilter = filter => {
  // Логируем данные фильтра для проверки
  console.log("Получены данные фильтра:", filter);

  productStore.updateFilters(filter);

  if (category.value) {
    productStore.fetchInfo(category.value);  
  } else {
    console.error("Категория не определена.");
  }
}

</script>

<template>
  <BannerTitle :properties="catalogProduct"></BannerTitle>
  <section class="section container">
    <div class="section__body">
      <div class="catalog">
        <div class="catalog__inner">
          <div class="catalog-filter">
            <div class="catalog-filter__body">
              <FilterCollections :properties="productStore.filterCheckersProperties" @update:selectedFilter="updateSelectedFilter"></FilterCollections>
            </div>
          </div>
          <div class="catalog-product">
            <div class="catalog-product__head">
              <div class="catalog-product__select">
                <select class="catalog__select" name="category">
                  <option value="">Сначала популярные</option>
                </select>
              </div>
              <div class="catalog-product__list">
                <UICardItem v-for="item in productStore.products" :key="item.id" :product="item"></UICardItem>
              </div>
            </div>
            <div class="catalog-product__footer">
              <div class="catalog-product__pagination">
                <button class="catalog-product__button">Показать еще</button>
                <UIPagination></UIPagination>
              </div>
            </div>
            <div class="catalog-product__info-block">
              <h3 class="catalog-product__name">{{ catalogProduct.data.attributes.name }}</h3>
              <div class="catalog-product__description" v-html="catalogProduct.data.attributes.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section{
  padding-top: 0;
}

.catalog{
    &__inner{
        display: flex;
        justify-content: space-between;
        column-gap: 24px;
    }
   
    &__select{
      padding: 6px 20px;
      border: 1px solid var(--color-blue-transparent);
      border-radius: var(--border-radius-6px);
    }
}

.catalog-filter {
  width: 100%;
  max-width: 264px;
  max-height: 1100px;
  overflow-y: scroll;

  &::-webkit-scrollbar{
    display: none;
  }
  

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
    grid-template-columns: repeat(5, 1fr);
    gap: 24px;
  }

  &__footer{
    margin-bottom: 80px;
  }

  &__pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__button {
    cursor: pointer;
    height: 44px;
    text-align: center;
    padding: 10px 70px;
    width: 100%;
    max-width: 552px;
    border: 1px solid var(--color-blue-transparent);
    background-color: var(--color-white);
    transition: 0.2s ;

    &:hover{
      color: var(--color-white);
      background-color: var(--color-blue);
    }
  }

  &__info-block{
    display: flex;
    flex-direction: column;
    row-gap: 36px;
  }

  &__name{
    font-size: 24px;
    font-weight: 400;
  }
}
</style>
