<script setup>
const props = defineProps({
  filter: Object
});

const minSelected = ref(props.filter.min || props.filter.values?.min.value || 0);
const maxSelected = ref(props.filter.max || props.filter.values?.max.value || 0);


const emit = defineEmits(['update:priceRange', 'update:valueRange']);

const updatePriceRange = () => {
  if (minSelected.value === props.filter.min && maxSelected.value === props.filter.max) {
    emit('update:priceRange', null); // Можно передать null, чтобы сигнализировать о сбросе
  } else {
    emit('update:priceRange', { min: minSelected.value, max: maxSelected.value });
  }
};


const updateValueRange = () => {
  const minId = props.filter.values?.min.id;
  const maxId = props.filter.values?.max.id;

  const min = Number(minSelected.value);
  const max = Number(maxSelected.value);

  if (min === props.filter.values?.min.value && max === props.filter.values?.max.value) {
    emit('update:valueRange', null); // Передаем null для сброса
  } else {
    emit('update:valueRange', { minId, maxId, min, max });
  }
};

watch(() => props.price, (newPrice) => {
  minSelected.value = newPrice.min;
  maxSelected.value = newPrice.max;
});
</script>

<template>
  <div class="filter-range"  v-if="maxSelected !== 0">
    <div class="filter-range__body" v-if="props.filter && maxSelected !== 0">
      <div class="filter-range__tit">
        <p>{{ props.filter?.name }}</p>
      </div>
      <div class="filter-range__input-block">
        <input class="filter-range__input" type="number" v-model="minSelected"
          @input="() => { updatePriceRange(); updateValueRange(); }">
        <input class="filter-range__input--right" type="number" v-model="maxSelected"
          @input="() => { updatePriceRange(); updateValueRange(); }">
      </div>
      <div class="slider">
        <div class="progress" :style="{ left: `${(minSelected - props.filter.min) / (props.filter.max - props.filter.min) * 100}%`, right: `${(props.filter.max - maxSelected) / (props.filter.max - props.filter.min) * 100}%` }"></div>
      </div>
      <div class="filter-range__range">
        <input type="range" :min="props.filter.min || props.filter.values?.min.value"
          :max="props.filter.max || props.filter.values?.max.value" v-model="minSelected"
          @input="() => { updatePriceRange(); updateValueRange(); }">
        <input type="range" :min="props.filter.min || props.filter.values?.min.value"
          :max="props.filter.max || props.filter.values?.max.value" v-model="maxSelected"
          @input="() => { updatePriceRange(); updateValueRange(); }">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.filter-range {
  width: 100%;

  &__input-block {
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

    input {
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

  &__range {
    position: relative;

    input {
      position: absolute;
      width: 90%;
      left: 10px;
      height: 5px;
      top: -5px;
      background: none;
      pointer-events: none;
      -webkit-appearance: none;
      -moz-appearance: none;

    }
  }

  &__input {
    width: 50%;
    border: none;
    outline: none;

    &--right {
      width: 50%;
      border: none;
      outline: none;
      text-align: right;
    }
  }
}

.slider{
  height: 2px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
  width: 80%;
  margin: 0 auto;
}
.slider .progress{
  height: 100%;
  position: absolute;
  border-radius: 5px;
  background-color: var(--color-blue);
  left: 0;
  right: 0;
}

input[type="range"]::-webkit-slider-thumb {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: var(--color-blue);
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  border: 3px solid white; 
  cursor: pointer;

  transition: 0.2s;

  &:hover{
    scale: (1.2);
  }
}

input[type="range"]::-moz-range-thumb {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: var(--color-dark-blue);
  pointer-events: auto;
  -webkit-appearance: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
}
</style>