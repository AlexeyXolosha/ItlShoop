import { defineStore } from "pinia";
import { ref, computed, toRaw } from "vue";

export const useProductFilter = defineStore('ProductFilter', () => {
  const products = ref([]); // Все товары
  const filters = ref([]); // Фильтры
  const price = ref({ min: 0, max: 0 }); // Диапазон цен
  const RangeValuesPrice = ref({ min: 0, max: 0 }); // Диапазоны цен
  const selectedFilterCollections = ref([]); // Выбранные фильтры
  const currentCategory = ref(null); // Текущая категория
  const range = ref({}); // Диапазоны других фильтров

  // Пагинация
  const currentPage = ref(1); // Текущая страница
  const totalProducts = ref(0); // Общее количество товаров
  const perPage = ref(5); // Количество товаров на странице
  const loading = ref(false); // Индикатор загрузки

  // Функция для получения данных от API
  const fetchInfo = async () => {
    loading.value = true; // Включаем индикатор загрузки
    try {
      if (!currentCategory.value) {
        console.error("Категория не определена.");
        products.value = []; // Очищаем список товаров при ошибке
        return;
      }
  
      let paramUrl = `/catalog/${currentCategory.value}/?include=items,filter,reviews-statistics,sections`;
  
      // Если фильтры активны, добавляем их в запрос
      if (selectedFilterCollections.value.length > 0 || Object.keys(range.value).length > 0 || (RangeValuesPrice.value.min !== 0 && RangeValuesPrice.value.max !== 0)) {
        paramUrl += `&set_filter=Y`;
      }
  
      // Проверка на корректность диапазона цен
      if (RangeValuesPrice.value.min != null && RangeValuesPrice.value.max != null && RangeValuesPrice.value.min >= 0 && RangeValuesPrice.value.max > 0) {
        paramUrl += `&arrFilter_P1_MIN=${RangeValuesPrice.value.min}&arrFilter_P1_MAX=${RangeValuesPrice.value.max}`;
        console.log("Добавление диапазона цен в запрос:", toRaw(RangeValuesPrice.value));
      }
  
      // Добавляем выбранные фильтры
      if (selectedFilterCollections.value.length > 0) {
        const filterParams = selectedFilterCollections.value
          .map(filter => `${filter.id}=${filter.value}`)
          .join('&');
        paramUrl += `&${filterParams}`;
        console.log("Добавление выбранных фильтров в запрос:", toRaw(selectedFilterCollections.value));
      }
  
      console.log("URL запроса:", paramUrl);
  
      // Выполняем запрос к API
      const { data } = await fetchProductCatalog(paramUrl);
  
      if (data?.value) {
        const responseData = data.value;
  
        // Проверяем, есть ли товары
        if (responseData?.included?.items?.length > 0) {
          products.value = responseData.included.items; // Сохраняем товары
          totalProducts.value = responseData.included.items.length; // Сохраняем общее количество товаров
        } else {
          console.warn("Товары не найдены, API вернул пустой список.");
          products.value = []; // Очищаем массив товаров, если они не найдены
          totalProducts.value = 0; // Обнуляем общее количество товаров
        }
  
        // Обработка данных о фильтрах и ценах, даже если товаров нет
        const priceData = responseData?.included?.filter?.attributes?.prices;
        if (priceData && priceData[0]?.values) {
          price.value = {
            min: priceData[0].values.min?.value || 0,
            max: priceData[0].values.max?.value || 0,
          };
        } else {
          console.warn("Ошибка при получении данных о ценах:", priceData);
        }
  
        // Обновляем фильтры
        filters.value = responseData?.included?.filter?.attributes?.properties || [];
      } else {
        console.error("Не удалось получить данные от API");
        products.value = []; // Очищаем товары, если данных нет
        totalProducts.value = 0; // Обнуляем общее количество товаров
      }
    } catch (error) {
      console.error("Ошибка при получении данных от API:", error);
      products.value = []; // Очищаем товары при ошибке
      totalProducts.value = 0; // Обнуляем общее количество товаров
    } finally {
      loading.value = false; // Отключаем индикатор загрузки
    }
  };
  
  // Пагинация — возвращаем товары для текущей страницы
  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * perPage.value;
    const end = start + perPage.value;
    return products.value.slice(start, end); // Отображаем товары с текущей страницы
  });

  // Рассчитываем количество страниц
  const totalPages = computed(() => {
    return Math.ceil(totalProducts.value / perPage.value);
  });

  // Функция для смены страницы
  const setPage = (page) => {
    if (page > 0 && page <= totalPages.value) {
      currentPage.value = page;
      // Обновляем только отображаемые товары без повторного запроса
    }
  };

  // Выбор диапазонных фильтров
  const filterRangeProp = computed(() => {
    return filters.value.filter(property => property.type === 'N');
  });

  // Фильтры с типами чекбоксов и других свойств
  const filterCheckersProperties = computed(() => {
    return filters.value.filter(property => ['S', 'L', 'E'].includes(property.type));
  });

  // Обновление выбранных фильтров
  const updateFilters = (filter) => {
    const index = selectedFilterCollections.value.findIndex(f => f.id === filter.id);
    if (index !== -1) {
      selectedFilterCollections.value.splice(index, 1); // Убираем фильтр, если он уже выбран
    } else {
      selectedFilterCollections.value.push(filter); // Добавляем новый фильтр
    }
    console.log("Обновленные фильтры:", selectedFilterCollections.value);
    currentPage.value = 1; // Сбрасываем страницу на первую
    fetchInfo(); // Перезапрашиваем данные после изменения фильтров
  };

  // Обновление диапазона цены
  const updatePriceRange = (priceRange) => {
    if (priceRange === null) {
      RangeValuesPrice.value = { min: 0, max: 0 };
    } else {
      RangeValuesPrice.value = priceRange;
    }
    console.log("Обновленные диапазоны цены:", RangeValuesPrice.value);
    currentPage.value = 1; // Сбрасываем страницу на первую
    fetchInfo(); // Перезапрашиваем данные после изменения диапазона цен
  };

  // Обновление других диапазонов
  const updateValueRange = (valueRange) => {
    if (valueRange === null) {
      range.value = {};
    } else {
      const { minId, maxId, min, max } = valueRange;
      if (minId && maxId && min != null && max != null) {
        range.value[minId] = { minId, maxId, min, max };
      }
    }
    console.log("Обновленные диапазоны других фильтров:", range.value);
    currentPage.value = 1; // Сбрасываем страницу на первую
    fetchInfo(); // Перезапрашиваем данные после изменения диапазона других фильтров
  };

  const loadMore = () => {
    if (perPage.value < totalProducts.value) {
      perPage.value += 5; // Увеличиваем количество товаров на странице
      console.log("Текущее значение perPage:", perPage.value);
    }
  };

  return {
    products,
    filters,
    fetchInfo,
    updateFilters,
    filterRangeProp,
    filterCheckersProperties,
    selectedFilterCollections,
    currentCategory,
    price,
    range,
    updatePriceRange,
    updateValueRange,
    paginatedProducts,
    totalPages,
    setPage,
    loadMore,
    currentPage,
    totalProducts,
    perPage,
    loading,
  };
});
