import { fetchDataApi } from "./api";

export const fetchInfoProduct = (category, product) => {
    return fetchDataApi('info', `/catalog/${category}/${product}/`)
}
