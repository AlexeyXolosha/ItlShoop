import { defineStore } from "pinia";

export const useProductFilter = defineStore('ProductFilter', () => {
  const products = ref([]);
  const filters = ref([]);

  const price = ref({ min: 0, max: 0 }); 
  const RangeValuesPrice = ref([]);

  const selectedFilterCollections = ref([]);
  const currentCategory = ref(null);

  const range = ref({});

  const fetchInfo = async () => {
    try {
      if (!currentCategory.value) {
        console.error("Категория не определена.");
        return;
      }

      let paramUrl = `/catalog/${currentCategory.value}/?include=items,filter,reviews-statistics,sections`;

      // Добавляем set_filter=Y, если есть выбранные фильтры или диапазоны
      if (selectedFilterCollections.value.length > 0 || Object.keys(range.value).length > 0 || (RangeValuesPrice.value.min !== 0 && RangeValuesPrice.value.max !== 0)) {
        paramUrl += `&set_filter=Y`;
      }

      // Добавляем параметры выбранных фильтров
      if (selectedFilterCollections.value.length > 0) {
        const filterParams = selectedFilterCollections.value.map(filter => {
          return `${filter.id}=${filter.value}`;
        }).join('&');
        paramUrl += `&${filterParams}`;
      }

      // Добавляем диапазон цены, если он установлен
      if (RangeValuesPrice.value.min != null && RangeValuesPrice.value.max != null) {
        paramUrl += `&arrFilter_P1_MIN=${RangeValuesPrice.value.min}&arrFilter_P1_MAX=${RangeValuesPrice.value.max}`;
      }

      // Добавляем другие диапазоны фильтров
      Object.entries(range.value).forEach(([key, rangeObj]) => {
        const { minId, maxId, min, max } = rangeObj;
        if (min != null && max != null) {
          paramUrl += `&${minId}=${min}&${maxId}=${max}`;
        }
      });

      // Запрос к API
      const { data } = await fetchProductCatalog(paramUrl);

      // Обработка данных
      products.value = data.value?.included?.items || [];

      const priceData = data.value?.included?.filter?.attributes.prices;
      if (priceData[0] && priceData[0].values) {
        price.value = {
          min: priceData[0].values.min.value || 0,
          max: priceData[0].values.max.value || 0,
        };
      } else {
        console.error("Ошибка при получении данных о ценах:", priceData);
      }

      filters.value = data.value?.included?.filter?.attributes?.properties || [];

    } catch (error) {
      console.error("Ошибка при получении данных фильтров:", error);
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
      selectedFilterCollections.value.splice(index, 1);
    } else {
      selectedFilterCollections.value.push(filter);
    }
    fetchInfo();
  };

  // Обновление диапазона цены
  const updatePriceRange = (priceRange) => {
    if (priceRange === null) {
      RangeValuesPrice.value = { min: 0, max: 0 };
    } else {
      RangeValuesPrice.value = priceRange;
    }
    fetchInfo();
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
    fetchInfo();
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
  };
});
