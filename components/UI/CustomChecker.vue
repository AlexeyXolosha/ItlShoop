<script setup>
const props = defineProps({
  value: Object
})
</script>

<template>
  <label class="checkers__label">
    <input
      type="checkbox"
      class="checkbox__input visually-hidden"
      :value="value.id"
    />
    <span class="check__emulator"></span>
    <p class="check__title">{{value.name}}</p>
    <span class="span-alt"></span>
  </label>
</template>


<style lang="scss">
.span-alt{
  color: var(--color-blac-80);
}
</style>


