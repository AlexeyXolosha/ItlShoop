import { fetchDataApi } from "./api";

export const fetchBannerCatalog = () => {
  return fetchDataApi('BannerCatalog', '/include/banners/wide-catalog/')
}