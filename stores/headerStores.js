import { defineStore } from "pinia";

export const useHeaderSale = defineStore('headerSale', () => {
    const headeSale = ref([])
    const isLoading = ref(false)
    const error = ref(null)

    const fetchHeaderSale = async () => {
        isLoading.value = true
        error.value = null
    }
})