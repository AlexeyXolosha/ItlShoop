import { fetchDataApi } from "./api";

export const fetchModalCatalog = () => {
  return fetchDataApi('modal', '/catalog/')
}

export const fetchBannerCatalog = () => {
  return fetchDataApi('BannerCatalog', '/include/banners/wide-catalog/')
}

export const fetchProductCatalog = (paramUrl) => {
  return fetchDataApi('catalogProductFilter', paramUrl)
}