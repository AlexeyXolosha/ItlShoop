<script setup>
const props = defineProps({
  items: Object,
});

const emit = defineEmits(['get-link']);
const selectedLink = ref(null);

// Функция для обработки клика по ссылке
const linkItem = (link) => {
  selectedLink.value = link;
  emit('get-link', link);
};

onMounted(() => {
  if (props.items?.data?.length) {
    selectedLink.value = props.items.data[0].links.self;
    emit('get-link', selectedLink.value);
  }
});
</script>

<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li v-for="(item, index) in items?.data" :key="index" class="tabs__list-item">
        <a
          class="tabs__list-link"
          @click="linkItem(item.links.self)"
          :class="{ active: selectedLink === item.links.self }"
        >
          {{ item.attributes.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
    .tabs{
        &__list{
            display: flex;
            align-items: center;
            column-gap: 12px;

            &-link{
                border: 1px solid var(--color-blue-transparent);
                border-radius: var(--border-radius-6px);
                padding-inline: 16px;

                color: #333;
                text-decoration: none;

                cursor: pointer;
                
                &:hover{
                    background-color: var(--color-blue);
                    color: var(--color-white);
                }

            }
        }
    }

    .active{
       color: var(--color-white);
       border-color: var(--color-blue); 
       background-color: var(--color-blue);
    }
</style>