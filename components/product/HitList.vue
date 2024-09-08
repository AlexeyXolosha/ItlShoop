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
            <div class="section__list">
              <UICardItem></UICardItem>
              <UICardItem></UICardItem>
              <UICardItem></UICardItem>
              <UICardItem></UICardItem>
              <UICardItem></UICardItem>
              <UICardItem></UICardItem>
            </div>
        </div>
    </section>
</template>
