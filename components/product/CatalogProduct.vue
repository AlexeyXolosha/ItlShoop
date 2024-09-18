<script setup>
const route = useRoute();
const category = ref(route.params.category);


const { data: catalogProduct, error } = fetchProductCatalog(category.value);

watch(() => route.params.category, (newCategory) => {
  category.value = newCategory;
  fetchProductCatalog(newCategory);
}, { immediate: true });

const itemsLink = computed(() => {
  if (catalogProduct.value && catalogProduct.value.data && catalogProduct.value.data.relationships) {
    return catalogProduct.value.data.relationships.items.links.self;
  }
  return null; 
});

const infoProduct = ref(null);

watch(itemsLink, async (newLink) => {
  if (newLink) {
    try {
      infoProduct.value = await fetchProduct(newLink);
    } catch (err) {
      console.error("Ошибка при загрузке информации о продукте:", err);
    }
  }
}, { immediate: true });

watch(infoProduct, (newInfoProduct) => {
//  console.log("InfoProduct обновлен:", newInfoProduct);
}, { immediate: true });

//console.log(itemsLink.value);
//console.log("CatalogProduct", catalogProduct.value);
</script>

<template>
  <section class="section container">
    <div class="section__body">
      <div class="catalog">
        <div class="catalog__inner">
          <div class="catalog-filter">
            <div class="catalog-filter__body">
              <FilterCollections :properties="catalogProduct?.included.filter.attributes.properties"></FilterCollections>
              <FilterRange></FilterRange>
              <FilterCheckers></FilterCheckers>
              <FilterCheckers></FilterCheckers>
              <FilterCheckers></FilterCheckers>
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
                <UICardItem v-for="item in catalogProduct?.included?.items" :key="item.id" :product="item"></UICardItem>
              </div>
            </div>
            <div class="catalog-product__footer">
              <div class="catalog-product__pagination">
                <button class="catalog-product__button">Показать еще</button>
                <UIPagination></UIPagination>
              </div>
            </div>
            <div class="catalog-product__info-block">
              <h3 class="catalog-product__name">Дрели-шуруповерты</h3>
              <p class="catalog-product__description">
                Шуруповерт и дрель-шуруповерт - в чем разница. <br> <br>
                Выбирая между покупкой шуруповерта и дрели-шуруповерта, необходимо знать, что первый тип электроинструмента рассчитан 
                на задачи по вкручиванию/выкручиванию метизов. Использовать его для высверливания отверстий не стоит, поскольку конструкция не 
                приспособлена к сверлению - прокрутка патрона при изменении плотности материала станет препятствием дальнейшей работе.
                <br>
                <br>
                Дрель-шуруповерт сверлит, закручивает и выкручивает крепежи. Гибкая настройка скорости вращения помогает лучше адаптировать инструмент к рабочим задачам,
                 но инерционность патронной части иногда приводит к чрезмерному заглублению самореза. 
                В Леруа Мерлен можно заказать шуруповерт с аккумуляторным или кабельным типом питания. Предлагаем товары торговых марок Bosch, Dexter, Makita, Metabo.
              </p>
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
   
    &__select{
      padding: 6px 20px;
      border: 1px solid var(--color-blue-transparent);
      border-radius: var(--border-radius-6px);
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
    height: 44px;
    text-align: center;
    padding: 10px 70px;
    width: 32.3%;
    border: 1px solid var(--color-blue-transparent);
    background-color: var(--color-white);
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
