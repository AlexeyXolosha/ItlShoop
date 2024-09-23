<script setup>
const props = defineProps({
  value: Object
});

const emit = defineEmits(['change']);
const isChecked = ref(false);

const handleChange = () => {
  isChecked.value = !isChecked.value;
  emit('change', { id: props.value.id, value: isChecked.value ? 'Y' : 'N' });
};
</script>

<template>
  <label class="checkers__label">
    <input
      type="checkbox"
      class="checkbox__input visually-hidden"
      :checked="isChecked"
      @change="handleChange"
    />
    <span class="check__emulator"></span>
    <p class="check__title">{{ value.name }}</p>
    <span class="span-alt"></span>
  </label>
</template>


<style lang="scss">
.span-alt{
  color: var(--color-blac-80);
}
</style>


