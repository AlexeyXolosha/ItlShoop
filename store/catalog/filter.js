import { defineStore } from "pinia";

export const useProductFilter = defineStore('ProductFilter', () => {
  const products = ref([]);
  const filters = ref([]);
  const selectedFilterCollections = ref([]);
  const currentCategory = ref(null);

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

    console.log("Запрос к API с URL:", paramUrl);

    const { data } = await fetchProductCatalog(paramUrl);
   // console.log("Полученные данные:", data);

    products.value = data.value?.included?.items || [];
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
    currentCategory 
  };
});
