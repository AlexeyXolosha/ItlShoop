import { fetchDataApi } from "./api"

/* Главная страница */
export const fetchMenuCategories = () => {
    return fetchDataApi('headeSale', '/include/menu/main/')
};

export const fetchBannerSlide = () => {
  return fetchDataApi('BannerSlide', '/include/banners/slider/')  
};

export const fetchBannerAdvantages = () => {
    return fetchDataApi('advantages', '/include/mainpage/advantages/')
};

export const fetchPOPCategory = () => {
  return fetchDataApi('popularCategory', '/include/mainpage/popular-category/')
};

export const fetchBannerText = () => {
  return fetchDataApi('bannerText', '/include/banners/banner-with-text/')
};

export const fetchBrandsList = () => {
  return fetchDataApi('brands', '/include/mainpage/brands/')
}