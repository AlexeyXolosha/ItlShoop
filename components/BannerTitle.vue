<script setup>
const props = defineProps({
  properties: Object
})
</script>

<template>
  <section class="section container">
    <div class="section__body">
      <div class="catalog-up">
        <BannersBannerCatalog></BannersBannerCatalog>
        <CatalogTitle :properties="properties"></CatalogTitle>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section{
  padding-top: 44px;
}

.catalog-up{
  display: flex;
  flex-direction: column;
  row-gap: 48px;
}
</style>