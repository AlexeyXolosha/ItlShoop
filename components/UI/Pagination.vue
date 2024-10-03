<script setup>

const props = defineProps({
  totalPages: {
    type: Number,
    required: true
  },
  currentPage: {
    type: Number,
    required: true
  }
});

const emit = defineEmits(['page-changed']);

// Сменить страницу
const changePage = (page) => {
  emit('page-changed', page);
};

// Следующая страница
const nextPage = () => {
  if (props.currentPage < props.totalPages) {
    emit('page-changed', props.currentPage + 1);
  }
};

// Предыдущая страница
const prevPage = () => {
  if (props.currentPage > 1) {
    emit('page-changed', props.currentPage - 1);
  }
};
</script>

<template>
  <div class="pagination">
    <ul class="pagination__list">
      <!-- Кнопка назад -->
      <li class="pagination__item" :class="{ disabled: currentPage === 1 }">
        <button class="pagination__button" @click="prevPage" :disabled="currentPage === 1">
          <i class="fa-regular fa-angle-left"></i>
        </button>
      </li>

      <!-- Генерация страниц -->
      <li v-for="page in totalPages" :key="page" class="pagination__item">
        <button class="pagination__button" :class="{ active: page === currentPage }" @click="changePage(page)">
          {{ page }}
        </button>
      </li>

      <!-- Кнопка вперед -->
      <li class="pagination__item" :class="{ disabled: currentPage === totalPages }">
        <button class="pagination__button" @click="nextPage" :disabled="currentPage === totalPages">
          <i class="fa-regular fa-angle-right"></i>
        </button>
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped>
.pagination {
  &__list {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  &__item {
    display: flex;
    align-self: center;

    &.disabled .pagination__button {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  &__button {
    padding: 10px 16px;
    cursor: pointer;
    border: 1px solid var(--color-blue-transparent);
    background-color: var(--color-white);
    border-radius: var(--border-radius-6px);
    transition: 0.2s;
    color: var(--color-dark);

    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);
    }
  }
}

.active{
  width: 100%;
  border: 1px solid var(--color-blue);
}
</style>