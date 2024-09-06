<template>
    <section class="section container">
       <div class="section__body">
            <div class="section__info">
                <h2 class="section__title">
                    Популярные категории
                </h2>
            </div>
            <div class="section__list">
                <UICategoryCard>Смартфоны</UICategoryCard>
                <UICategoryCard>Смартфоны</UICategoryCard>
                <UICategoryCard>Смартфоны</UICategoryCard>
                <UICategoryCard>Смартфоны</UICategoryCard>
                <UICategoryCard>Смартфоны</UICategoryCard>
                <UICategoryCard>Смартфоны</UICategoryCard>
                <UICategoryCard>Смартфоны</UICategoryCard>
                <UICategoryCard>Смартфоны</UICategoryCard>
            </div>
       </div>
    </section>
</template>

<style lang="scss" scoped>
    .section__list{
        display: flex;
        justify-content: space-between;
        column-gap: 24px;
    }
</style>

