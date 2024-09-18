import { fetchDataApi } from "./api";

export const fetchBannerCatalog = () => {
  return fetchDataApi('BannerCatalog', '/include/banners/wide-catalog/')
}

export const fetchProductCatalog = (paramUrl) => {
  return fetchDataApi('catalogProductFilter', `/catalog/${paramUrl}/?include=items,filter,reviews-statistics,sections`)
}