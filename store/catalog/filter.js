import { defineStore } from "pinia";

export const useProductFilter = defineStore('ProductFilter', () => {
  const products = ref([]);
  const filters = ref([]);

  /* Цена */
  const price = ref({ min: 0, max: 0 }); 
  const RangeValuesPrice = ref([]);

  /* Фильтры */
  const selectedFilterCollections = ref([]);
  const currentCategory = ref(null);

  /* range */
  const range = ref({});

  const fetchInfo = async () => {

    if (!currentCategory) {
      console.error("Категория не определена.");
      return;
    }

    let paramUrl = `/catalog/${currentCategory.value}/?include=items,filter,reviews-statistics,sections`;

    if (selectedFilterCollections.value.length > 0) {
      const filterParams = selectedFilterCollections.value.map(filter => {
        return `${filter.id}=${filter.value}`;
      }).join('&');
      
      paramUrl += `&set_filter=Y&${filterParams}`;
    }

    const hasSetFilter = paramUrl.includes('set_filter=Y');

    if (typeof RangeValuesPrice.value.min !== 'undefined' && typeof RangeValuesPrice.value.max !== 'undefined') {
      if (!hasSetFilter) {
        paramUrl += `&set_filter=Y`;
      }
      paramUrl += `&arrFilter_P1_MIN=${RangeValuesPrice.value.min}&arrFilter_P1_MAX=${RangeValuesPrice.value.max}`;
    }

    Object.entries(range.value).forEach(([key, rangeObj]) => {
      const { minId, maxId, min, max } = rangeObj;
      
      if (typeof min !== 'undefined' && typeof max !== 'undefined') {
        if (!hasSetFilter) {
          paramUrl += `&set_filter=Y`;
        }
        paramUrl += `&${minId}=${min}&${maxId}=${max}`;
      }
    });
    
  //  console.log("Запрос к API с URL:", paramUrl);

    const { data } = await fetchProductCatalog(paramUrl);
   // console.log("Полученные данные:", data);
    
    products.value = data.value?.included?.items || [];
    
    const priceData = data.value?.included?.filter?.attributes.prices;
    // console.log(priceDatas)
    if (priceData[0] && priceData[0].values && priceData[0].values.min && priceData[0].values.max) {
      price.value = {
        min: priceData[0].values.min.value || 0,
        max: priceData[0].values.max.value || 0,
      };
    } else {
      console.error("Ошибка :", priceData);
    }
    filters.value = data.value?.included?.filter?.attributes?.properties || [];
   // console.log("Текущие продукты:", products.value);
  };

  const filterRangeProp = computed(() => {
      return filters.value.filter(property => property.type === 'N');
  })

   const filterCheckersProperties = computed(() => {
    return filters.value.filter(property => ['S', 'L', 'E'].includes(property.type));
  });

  const updateFilters = (filter) => {
    const index = selectedFilterCollections.value.findIndex(f => f.id === filter.id);
    if (index !== -1) {
      selectedFilterCollections.value.splice(index, 1);
    } else {
      selectedFilterCollections.value.push(filter);
    }
    fetchInfo();
  };

  const updatePriceRange = (priceRange) => {
    RangeValuesPrice.value = priceRange;
    fetchInfo();
  };

  const updateValueRange = (valueRange) => {
    const { minId, maxId, min, max } = valueRange;

    if (minId && maxId && min !== undefined && max !== undefined) {
      range.value[minId] = { minId, maxId, min, max }; 
    }

   // console.log("Что приходит в range:", range.value);
    fetchInfo();
  };

  // Отслеживание изменений в selectedFilterCollections
  // watch(selectedFilterCollections, (newVal) => {
  //   console.log("Изменение selectedFilterCollections:", newVal);
  // });

  // // Отслеживание изменений в filterParams
  // watch(() => selectedFilterCollections.value.map(filter => `${filter.id}=${filter.value}`).join('&'), (newFilterParams) => {
  //   console.log("Изменение параметров фильтрации (filterParams):", newFilterParams);
  // });

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
    updateValueRange
  };
});
