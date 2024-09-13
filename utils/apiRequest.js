import { fetchDataApi } from "./api"

/* Главная страница */
export const fetchMenuCategories = () => {
    return fetchDataApi('headeSale', '/include/menu/main/')
};

export const fetchBannerSlide = () => {
  return fetchDataApi('bannerSlide', '/include/banners/slider/')  
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

export const fetchBannerWide = () => {
  return fetchDataApi('bannerWide', '/include/banners/wide/')
}

export const fetchSale = () => {
  return fetchDataApi("sale", "/include/mainpage/sale/")
}

export const fetchBlog = () => {
  return fetchDataApi("blog", "/include/mainpage/blog/")
}

export const fetchHit = () => {
  return fetchDataApi("hit", '/include/mainpage/hit/hit/')
}

export const RecomendadeList = () => {
  return fetchDataApi("Recomendade", '/include/mainpage/hit/recommend/')
}

export const fetchSaleHit = () => {
  return fetchDataApi("SaleHit", '/include/mainpage/hit/stock/')
}

export const fetchProduct = (endpoint) => {
  return fetchDataApi("product", endpoint)
}