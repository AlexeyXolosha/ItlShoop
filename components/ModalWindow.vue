<script setup>

const { data: modalCatalog, error } = fetchModalCatalog();

// Состояние для активной категории
const activeParentCategory = ref(null);

// Проверяем, что данные успешно загружены
const categoryTree = computed(() => {
  if (!modalCatalog?.value || error?.value) {
    return [];
  }
  
  return buildCategoryTree(modalCatalog.value.data);
});

// Функция для построения дерева категорий
const buildCategoryTree = (categories) => {
  const map = {};
  const tree = [];

  // Создаем карту категорий
  categories.forEach((category) => {
    map[category.id] = { ...category, children: [] };
  });

  // Строим дерево
  categories.forEach((category) => {
    if (category.attributes.parentId) {
      map[category.attributes.parentId]?.children.push(map[category.id]);
    } else {
      tree.push(map[category.id]);
    }
  });

  return tree;
};

// Функция для установки активной категории при наведении
const setActiveCategory = (category) => {
  activeParentCategory.value = category;
};

// Сброс активной категории при уходе с родительского элемента
const resetActiveCategory = () => {
  activeParentCategory.value = null;
};

defineEmits(['closeModal']);
</script>


<template>
  <div class="modal">
    <div class="modal__container">
      <div class="modal__wlc">
        <h2 class="modal__title">Каталог</h2>
        <i @click="$emit('closeModal')" class="fa-regular fa-xmark-circle"></i>
      </div>
      <div class="modal__body" @mouseleave="resetActiveCategory">
        <div class="modal-catalog__parent">
          <!-- Список родительских категорий -->
          <ul v-if="categoryTree.length" class="modal-catalog__list">
            <li
              v-for="category in categoryTree"
              :key="category.id"
              class="modal-catalog__item"
              @mouseover="setActiveCategory(category)"
              >
              <a :href="category.links.self" href="javascript:void(0)" class="modal-catalog__link">
                {{ category.attributes.name }}
              </a>
              <i v-if="category.children.length" class="fa-regular fa-angle-right"></i>
            </li>
          </ul>
          <p v-else>Загрузка данных...</p>
        </div>
        <div class="modal-catalog__children"  v-if="activeParentCategory">
          <h3>{{ activeParentCategory.attributes.name }} - Подкатегории</h3>
          <ul class="modal-catalog__list">
            <li
              v-for="child in activeParentCategory.children"
              :key="child.id"
              class="modal-catalog__item"
            >
              <a :href="child.links.self" class="modal-catalog__link">
                {{ child.attributes.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 99998;
    background-color: rgb(0,0,0, .3);
    display: grid;
    align-items: center;
    justify-content: center;

    &__container{
        max-width: 852px;
        background-color: var(--color-white);
        padding: 30px 75px;
        z-index: 1;
    }

    &__body{
        display: flex;
        column-gap: 24px;
    }

    &__wlc{
        display: flex;
        align-items: center;
        justify-content: space-between;

        i{
            font-size: 18px;
            cursor: pointer;
        }
    }

    &-catalog{
        &__list{
          display: flex;
          flex-direction: column;
          align-items: start;
          row-gap: 5px;
        }

        &__item{
            display: flex;
            align-items: center;
            column-gap: 4px;
        }

        &__link{
            text-decoration: none;
            font-size: 18px;
            color: #333;
        }
    }
}
</style>