<script setup>

const { data: modalCatalog, error } = fetchModalCatalog();

const activeParentCategory = ref(null);

const categoryTree = computed(() => {
  if (!modalCatalog?.value || error?.value) {
    return [];
  }

  return buildCategoryTree(modalCatalog.value.data);
});

const buildCategoryTree = (categories) => {
  const map = {};
  const tree = [];

  categories.forEach((category) => {
    map[category.id] = { ...category, children: [] };
  });

  categories.forEach((category) => {
    if (category.attributes.parentId) {
      map[category.attributes.parentId]?.children.push(map[category.id]);
    } else {
      tree.push(map[category.id]);
    }
  });

  return tree;
};

const setActiveCategory = (category) => {
  activeParentCategory.value = category;
};

const resetActiveCategory = () => {
  activeParentCategory.value = null;
};

defineEmits(['closeModal']);
</script>


<template>
  <div class="modal">
    <div class="modal__container container" @mouseleave="resetActiveCategory">
      <div class="modal-catalog__parent">
        <ul v-if="categoryTree.length" class="modal-catalog__list">
          <li v-for="category in categoryTree" :key="category.id" class="modal-catalog__item"
            @mouseover="setActiveCategory(category)">
            <a :href="category.links.self" class="modal-catalog__link">
              {{ category.attributes.name }}
            </a>
          </li>
        </ul>
        <p v-else>Загрузка данных...</p>
      </div>
      <div class="modal-catalog__children">
        <ul class="modal-catalog__list" v-if="activeParentCategory">
          <li v-for="child in activeParentCategory.children" :key="child.id" class="modal-catalog__item">
            <a :href="child.links.self" class="modal-catalog__link">
              {{ child.attributes.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  left: 0;
  top: 155;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: var(--color-white);
  border: 1px solid var(--color-blue-transparent);
  overflow: auto;

  &__container {
    display: flex;
    column-gap: 24px;
    height: 100vh;
  }

  &-catalog {
    &__list {
      display: flex;
      flex-direction: column;
      align-items: start;
      row-gap: 16px;
    }

    &__parent {
      margin-right: 16px;
      padding: 32px 0;
      border-right: 1px solid var(--color-blue-transparent);
      width: 280px;
      min-width: 280px;
    }

    &__item {
      display: flex;
      align-items: center;
      column-gap: 4px;

   
    }

    &__link {
      text-decoration: none;
      color: #333;

      &:hover {
        color: var(--color-blue);
      }
    }

    &__children{
      padding: 32px 0;
    }
  }
}
</style>