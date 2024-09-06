<script setup>
import cardItem from '../UI/cardItem.vue';
</script>

<template>
    <section class="container">
        <div class="section__body">
            <div class="hit-list">
                <div class="hit-list__body">
                    <cardItem />
                    <cardItem />
                    <cardItem />
                    <cardItem />
                    <cardItem />
                    <cardItem />
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
</style>