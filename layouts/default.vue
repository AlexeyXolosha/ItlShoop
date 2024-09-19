<script setup>

 const modalWindow = ref(false)

 const closeModal = () => {
    modalWindow.value = false;
 }

 const openModal = () => {
    modalWindow.value = true
 }

</script>

<template>
    <AppHeader @open-modal="openModal" />
    <ModalWindow v-if="modalWindow" @close-modal="closeModal"></ModalWindow>
    <div>
        <slot></slot>
    </div>
    <AppFooter></AppFooter>
</template>