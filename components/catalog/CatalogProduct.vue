<script setup>
import { useProductFilter } from '~/store/catalog/filter';

const route = useRoute();
const category = ref(route.params.category);
const itemData = ref(null)

const { data: catalogProduct, error } = await fetchProductCatalog(category.value);

const productStore = useProductFilter()

watch(() => route.params.category, async (newCategory) => {
  if (newCategory) {
    category.value = newCategory;
    productStore.currentCategory = newCategory;

    // Убедитесь, что категория определена перед вызовом fetchInfo
    if (productStore.currentCategory) {
      await productStore.fetchInfo(); // Вызов fetchInfo с учетом новых фильтров
    } else {
      console.error("Категория не определена.");
    }
  }
}, { immediate: true });


const updateSelectedFilter = filter => {
  console.log("Получены данные фильтра:", filter);
  productStore.updateFilters(filter);
}
</script>

<template>
  <CatalogBannerTitle :properties="catalogProduct" />
  <div class="section container">
    <div class="section__body">
      <div class="catalog">
        <div class="catalog__inner">
          <div class="catalog-filter">
            <div class="catalog-filter__body">
              <FilterCollections :properties="productStore.filterCheckersProperties"
                @update:selectedFilter="updateSelectedFilter"></FilterCollections>
              <FilterRange :filter="productStore.price" @update:priceRange="productStore.updatePriceRange">
              </FilterRange>
              <FilterCheckers :properties="productStore.filterCheckersProperties"
                @update:selectedFilter="updateSelectedFilter"></FilterCheckers>
              <FilterRange v-for="range in productStore.filterRangeProp" :filter="range"
                @update:valueRange="productStore.updateValueRange"></FilterRange>
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
                <template v-if="productStore.products.length > 0">
                  <UICardItem v-for="item in productStore.paginatedProducts" :key="item.id" :product="item"></UICardItem>
                </template>
                <p v-else>Нет товаров</p>
              </div>
            </div>
            <div class="catalog-product__footer">
              <div class="catalog-product__pagination">
                <button class="catalog-product__button" @click="productStore.loadMore">Показать ещё</button>
                <UIPagination 
                :total-pages="productStore.totalPages" 
                :current-page="productStore.currentPage" 
                @page-changed="productStore.setPage">
              </UIPagination>              </div>
            </div>
            <div class="catalog-product__info-block">
              <h3 class="catalog-product__name">{{ catalogProduct.data?.attributes?.name }}</h3>
              <div class="catalog-product__description" v-html="catalogProduct.data?.attributes?.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  padding-top: 0;
}
</style>
