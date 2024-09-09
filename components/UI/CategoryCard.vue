<template>
    <div class="category-card">
        <div class="category-card__body">
            <div class="category-card__image">
                <img src="../../public/samsung.png" alt="" width="128" height="128" class="category__image"  loading="lazy">
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
        align-items: center;
        row-gap: 24px;

        &__body{
        padding: 32px;
        background-color: var(--color-blue-transparent-card);
        border-radius: var(--border-radius-6px);
        }

    }

    .category__image{
        object-fit: contain;
    }
</style>
