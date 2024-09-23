<script setup>
const route = useRoute()
const category = ref(route.params.category);
const product = ref(route.params.product)

const { data: productInfo } = fetchInfoProduct(category.value, product.value)

console.log(productInfo.value)
</script>

<template>
   <div class="product">
    <ProductHead :props="productInfo"></ProductHead>  
    </div>
</template>