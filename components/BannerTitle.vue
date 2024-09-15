<template>
  <section class="section container">
    <div class="section__body">
      <div class="catalog-up">
        <BannersBannerCatalog></BannersBannerCatalog>
        <CatalogTitle></CatalogTitle>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.catalog-up{
  display: flex;
  flex-direction: column;
  row-gap: 48px;
}
</style>