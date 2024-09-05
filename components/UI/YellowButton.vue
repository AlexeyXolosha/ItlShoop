<script setup>
import { defineProps } from "vue";

const props = defineProps({
  imageSrc: String,
});
</script>

<template>
    <button class="yellowButton">
      <div>
        <slot></slot>
      </div>
    </button>
</template>

<style lang="scss">
    .yellowButton{
        background-color: #ffd740;
        border: none;
        border-radius: 6px;

        height: 48px;
        padding-inline: 20px;
        transition: 0.3s ease;
        cursor: pointer;
    }

    .yellowButton:hover{
        background-color: #f1c936;
    }
</style>