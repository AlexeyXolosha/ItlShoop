<script setup>
const props = defineProps({
    filter: Object
});


const minSelected = ref(props.filter.min || props.filter.values?.min.value);
const maxSelected = ref(props.filter.max || props.filter.values?.max.value);

const emit = defineEmits(['update:priceRange', 'update:valueRange']);

const updatePriceRange = () => {
  emit('update:priceRange', { min: minSelected.value, max: maxSelected.value });
};


const updateValueRange = () => {
  const minId = props.filter.values?.min.id; // Получаем id для min
  const maxId = props.filter.values?.max.id; // Получаем id для max

  const min = Number(minSelected.value);
  const max = Number(maxSelected.value);


  emit('update:valueRange', { minId, maxId, min, max });
};

watch(() => props.price, (newPrice) => {
  minSelected.value = newPrice.min;
  maxSelected.value = newPrice.max;
});
</script>

<template>
    <div class="filter-range"  v-if="maxSelected !== 0">
      <div class="filter-range__body">
        <div class="filter-range__tit">
            <p>{{ props.filter.name }}</p>
        </div>
        <div class="filter-range__input-block">
          <input class="filter-range__input" type="number" v-model="minSelected"  @input="() => { updatePriceRange(); updateValueRange(); }">
          <input class="filter-range__input--right" type="number" v-model="maxSelected" @input="() => { updatePriceRange(); updateValueRange(); }">
        </div>
        <div class="filter-range__range">
          <input type="range" 
          :min="props.filter.min || props.filter.values?.min.value" 
          :max="props.filter.max || props.filter.values?.max.value"
          v-model="minSelected" 
          @input="() => { updatePriceRange(); updateValueRange(); }">
          <input type="range" 
          :min="props.filter.min || props.filter.values?.min.value" 
          :max="props.filter.max || props.filter.values?.max.value"
          v-model="maxSelected" 
          @input="() => { updatePriceRange(); updateValueRange(); }">
        </div>
      </div>
    </div>
  </template>

<style lang="scss">
.filter-range{
    width: 100%;
    &__input-block{
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--color-blue-transparent-checkbox);
        border-radius: var(--border-radius-6px);
        padding: 14px 20px;
        font-size: 14px;
        color: var(--color-dark-blue);

        input{
            color: var(--color-dark-blue);

            -webkit-appearance: none;
            -moz-appearance: textfield;
            appearance: none;
        
            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;

            }
        }
    }

    &__input{
        width: 50%;
        border: none;
        outline: none;

        &--right{
            width: 50%;
            border: none;
            outline: none;
            text-align: right;
        }
    }
}
</style>