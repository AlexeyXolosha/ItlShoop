<script setup>
const route = useRoute()
const category = ref(route.params.category);
const product = ref(route.params.product)

const { data: productInfo } = fetchInfoProduct(category.value, product.value)


const { data: productExp} =  fetchProductExpandables(category.value, product.value)
</script>

<template>
     <ProductHead :props="productInfo"></ProductHead> 
     <ProductInfo :props="productInfo"></ProductInfo>
     <ProductExpandables v-if="productExp" :exp="productExp">С этим товаром покупают</ProductExpandables>
     <Blogs></Blogs>
     <Watchs></Watchs>
</template>

