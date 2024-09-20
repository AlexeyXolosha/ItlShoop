<script setup>
const props = defineProps({
  properties: Array
})
</script>

<template>
  <div class="catalog-filter__collections">
    <div class="collection">
      <div class="collection__title">{{properties[0].name}}</div>
      <ul class="collection__list">
        <li class="collection__item" v-for="(value, index) in properties[0].values.slice(0, 2)" :key="index">
          <button class="collection__button ">
            <span>{{ value.name }}</span>
          </button>
        </li>
        <li class="collection__item" >
          <button v-for="(value, index) in properties[0].values.slice(2, 4)" :key="index" class="collection__button">
            <span>{{ value.name }}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collection{
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__title{
    font-size: 24px;
    line-height: 24px;
    white-space: nowrap;
  }

  &__list{
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }

  &__item{
    display: flex;
    align-items: center;
    column-gap: 8px; 
    white-space: nowrap;
  }

  &__button{
    cursor: pointer;
    font-size: 14px;
    border: none;
    background-color: var(--color-yellow-transparent);
    border-radius: var(--border-radius-6px);
    height: 32px;
    padding: 4px 20px;
    transition: 0.2s;

    &:hover{
      background-color: var(--color-dark-yellow);
    }
  }
}

.collection--active{
  background-color: var(--color-yellow-active);
}

</style>
