import { defineStore } from "pinia"; 
import { useRouter, useRoute } from 'vue-router'; 
 
export const useProductFilter = defineStore('ProductFilter', () => { 
  const products = ref([]); 
  const filters = ref([]); 
  const price = ref({ min: 0, max: 0 }); 
  const RangeValuesPrice = ref([]); 
  const selectedFilterCollections = ref([]); 
  const currentCategory = ref(null); 
  const range = ref({}); 
 
  const router = useRouter(); 
  const route = useRoute();  
 
  // Функция для синхронизации фильтров с query-параметрами 
  const syncFiltersWithQuery = () => { 
    const query = { ...route.query };

    query.minPrice = RangeValuesPrice.value.min; 
    query.maxPrice = RangeValuesPrice.value.max; 
 
    Object.entries(range.value).forEach(([key, { minId, maxId, min, max }]) => { 
      query[minId] = min; 
      query[maxId] = max; 
    }); 
 
    selectedFilterCollections.value.forEach(filter => { 
      query[filter.id] = filter.value; 
    }); 
 
   
    router.replace({ query }); 
  }; 
 
   
  const loadFiltersFromQuery = () => { 
    const query = route.query; 
   
    console.log("Полученные query параметры:", query); // Для отладки 
   
    // Устанавливаем диапазоны цен из query параметров 
    if (query.minPrice && query.maxPrice) { 
      RangeValuesPrice.value = { 
        min: Number(query.minPrice) || 0, // Проверяем корректность значений 
        max: Number(query.maxPrice) || 0, 
      }; 
    } else { 
      console.log("Цены не найдены в query параметрах"); 
    } 
   
    // Устанавливаем другие диапазоны 
    Object.entries(query).forEach(([key, value]) => { 
      if (key.startsWith('arrFilter_')) { 
        const minId = key + '_MIN'; 
        const maxId = key + '_MAX'; 
   
        // Проверяем, если данные присутствуют в query 
        const minValue = Number(query[minId]); 
        const maxValue = Number(query[maxId]); 
   
        if (!isNaN(minValue) && !isNaN(maxValue)) { 
          range.value[key] = { minId, maxId, min: minValue, max: maxValue }; 
          console.log("Добавлен диапазон фильтра:", key, range.value[key]); 
        } else if (value === 'Y' || value === 'N') { 
          // Обрабатываем бинарные значения фильтров, такие как Y/N 
          selectedFilterCollections.value.push({ id: key, value }); 
          console.log("Добавлен бинарный фильтр:", key, value); 
        } else { 
          console.log("Некорректные значения диапазона:", minValue, maxValue); 
        } 
      } 
    }); 
   
    // Устанавливаем выбранные фильтры из query параметров 
    Object.entries(query).forEach(([key, value]) => { 
      const filter = filters.value.find(f => f.id === key); // Предполагаем, что id фильтра совпадает с ключом 
      if (filter) { 
        selectedFilterCollections.value.push({ id: key, value }); 
        console.log("Добавлен выбранный фильтр:", key, value); 
      } else { 
        console.log("Фильтр с id", key, "не найден в доступных фильтрах."); 
      } 
    }); 
   
    fetchInfo();  
  }; 
   
   
 
  const fetchInfo = async () => { 
    try { 
      if (!currentCategory.value) { 
        console.error("Категория не определена."); 
        return; 
      } 
 
      // Всегда добавляем set_filter=Y 
      let paramUrl = `/catalog/${currentCategory.value}/?include=items,filter,reviews-statistics,sections&set_filter=Y`; 
 
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
        paramUrl +=  `&${minId}=${min}&${maxId}=${max}`; 
      } 
    }); 

    // Логирование URL и фильтров для отладки 
    console.log("Формируемый URL:", paramUrl); 
    console.log("Выбранные фильтры:", selectedFilterCollections.value); 
    console.log("Диапазоны фильтров:", range.value); 
    console.log("Диапазон цен:", RangeValuesPrice.value); 

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
  syncFiltersWithQuery(); // Обновляем query параметры 
  fetchInfo(); 
}; 

// Обновление диапазона цены 
const updatePriceRange = (priceRange) => { 
  if (priceRange === null) { 
    RangeValuesPrice.value = { min: 0, max: 0 }; 
  } else { 
    RangeValuesPrice.value = priceRange; 
  } 
  syncFiltersWithQuery(); // Обновляем query параметры 
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
  syncFiltersWithQuery(); // Обновляем query параметры 
  fetchInfo(); 
}; 

// Загружаем фильтры при загрузке страницы 
onMounted(() => { 
  loadFiltersFromQuery(); 
}); 

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