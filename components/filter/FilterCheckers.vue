<script setup>
  const props = defineProps({
    properties: Array
  })


  const openFilters = ref([]);
  const toggleFilter = (filterName) => {
    openFilters.value[filterName] = !openFilters.value[filterName];
  };

const emit = defineEmits(['update:selectedFilter']);
const handleFilterClick = (filter) => {
 // console.log("Фильтр выбран:", filter);
  emit('update:selectedFilter', { id: filter.id, value: filter.value });
};
</script>

<template>
   <div class="checkers">
      <div class="checkers__body">
        <div class="checkers__check" v-for="(property, index) in properties.slice(1)" :key="index">
          <div class="checkers__title">
            <p>{{ property?.name }}</p>            
            <i class="fa-regular" :class="openFilters[property?.name] ? 'fa-angle-up' : 'fa-angle-down'" @click="toggleFilter(property.name)"></i>
          </div>
          <div v-if="openFilters[property?.name]" class="checkers__list">
              <UICustomChecker v-for="(value, idx) in property.values" :key="idx" v-if="Array.isArray(property.values)" :value="value" @change="handleFilterClick(value)"/>
            <div class="checkers__more">
              <span>Показать еще</span>
              <i class="fa-regular fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
   </div>
  </template>
    
<style lang="scss">
.checkers{
    &__body{
        display: flex;
        flex-direction: column;
        row-gap: 28px;
    }
    
    &__title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-size: 18px;
            line-height: 24px;
            margin: 0px;
        }

        i{
            cursor: pointer;
        }
    }

    &__check{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    &__list{
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        
    }

    &__label{
        display: flex;
        align-items: center;
        column-gap: 12px;

        &:hover{
            color: var(--color-dark-blue);
        }
    }

    &__more{
        display: flex;
        align-items: center;
        column-gap: 8px;
        cursor: pointer;
    }
}

.check__emulator{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    aspect-ratio: 1;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-blue-transparent-checkbox);
    border-radius: var(--border-radius-4px);

    &:hover{
        border-color: var(--color-dark-blue);
    }

}

.check__emulator::after{
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background: url("../../public/icons/checkbox.svg") no-repeat center;
    width: 70%;
    aspect-ratio: 1;
    transform: scale(0);
    content: "";
}

.checkbox__input:checked + .check__emulator::after{
    transform: scale(1);
}
</style>