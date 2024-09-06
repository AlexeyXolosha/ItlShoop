<template>
    <div class="category-card">
        <div class="category-card__body">
            <div class="category-card__image">
                <img src="../../public/samsung.png" alt="" class="category__image" width="128" height="128" loading="lazy">
            </div>
        </div>
        <div class="category-card__title">
            <span>
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<style lang="scss">
.category-card{
    display: flex;
    flex-direction: column;
    row-gap: 24px;

    min-height: 240px;

    &__body{
        background-color: var(--color-blue-transparent-card);
        border-radius: var(--border-radius-6px);
        padding: 32px;
    }

    &__title{
        text-align: center;
    }
}

</style>