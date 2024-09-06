<script setup>
</script>

<template>
    <section class="section container">
        <div class="section__body">
            <div class="section__info">
                <h2 class="section__title">
                    <slot></slot>
                </h2>
                <UITabs></UITabs>
            </div>
            <div class="hit-list">
                <div class="hit-list__body">
                    <UICardItem />
                    <UICardItem />
                    <UICardItem />
                    <UICardItem />
                    <UICardItem />
                    <UICardItem />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .hit-list{
        &__body{
            display: flex;
            justify-content: space-between;
        }
    }

    .section__info{
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        margin-bottom: 40px;
    }

    .section__title{
        font-size: 30px;
        font-weight: 400;
    }
</style>