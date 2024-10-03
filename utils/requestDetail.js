import { fetchDataApi } from "./api";

export const fetchInfoProduct = (category, product) => {
    return fetchDataApi('info', `/catalog/${category}/${product}/`)
}

export const fetchProductExpandables = (category, product) => {
    return fetchDataApi('expandables', `/catalog/${category}/${product}/relationships/expandables/`)
}
