<script setup>
const route = useRoute()
const category = ref(route.params.category);
const product = ref(route.params.product)

const { data: productInfo } = fetchInfoProduct(category.value, product.value)

console.log(productInfo.value)
</script>

<template>
      <ProductHead :props="productInfo"></ProductHead> 
     <section class="section container">
          <ProductInfo :props="productInfo"></ProductInfo>
          <ProductCart></ProductCart>
     </section>
</template>

<style lang="scss" scoped>
.container{
     display: flex;
     justify-content: space-between;
}
</style>