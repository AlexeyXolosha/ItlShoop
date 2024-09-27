<template>
        <div class="skeleton-product__list">
            <SkeletonProduct v-for="n in 6" :key="n" />
        </div>
</template>

<style lang="scss">
.skeleton-product__list{
    display: flex;
    align-items: center;
    column-gap: 24px;
}
</style>