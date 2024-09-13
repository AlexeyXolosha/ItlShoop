export const BASE_URL = 'https://api.b2c.itl.digital';

const defaultHeader = {
    'Content-Type': 'application/json',
}

export const fetchDataApi = (key, endpoint) => {
    return useAsyncData(key, () => $fetch(`${BASE_URL}${endpoint}`, {
            method: 'GET',
            headers: defaultHeader,
        })
    )
}