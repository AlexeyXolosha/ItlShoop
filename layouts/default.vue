<script setup>
 const modalWindow = ref(false);

 const toggleModal = () => {
    modalWindow.value = !modalWindow.value;
    if (modalWindow.value) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};
</script>

<template>
    <AppHeader :isModalOpen="modalWindow" @toggle-modal="toggleModal" />
    <ModalWindow v-if="modalWindow"></ModalWindow>
    <div>
        <slot></slot>
    </div>
    <AppFooter></AppFooter>
</template>