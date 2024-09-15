<script setup>
const {data: popularCategory} = fetchPOPCategory()
</script>

<template>
    <section class="section container">
       <div class="section__body">
            <div class="section__info">
                <h2 class="section__title">
                    <slot></slot>
                </h2>
            </div>
            <div class="section__list">
                <UICategoryCard v-for="category in popularCategory?.data.slice(0,8)" 
                :key="category.id",
                :image="category.attributes?.images.preview"
                :name="category.attributes?.name"
                ></UICategoryCard>
            </div>
       </div>
    </section>
</template>

