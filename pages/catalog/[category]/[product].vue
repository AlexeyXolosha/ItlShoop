<script setup> 
const route = useRoute()
const category = ref(route.params.category);
const product = ref(route.params.product)

const {data: productInfo} = fetchInfoProduct(category.value, product.value)


</script>

<template>
    <section class="section container">
        
    </section>
</template>