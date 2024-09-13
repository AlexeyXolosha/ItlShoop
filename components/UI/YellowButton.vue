<template>
    <button class="yellowButton">
      <slot name="icon"></slot>
      <div>
        <slot></slot>
      </div>
    </button>
</template>

<style lang="scss">
    .yellowButton{
        display: flex;
        align-items: center;
        column-gap: 10px;
        background-color: #ffd740;
        border: none;
        border-radius: 6px;

        height: 48px;
        padding-inline: 20px;
        transition: 0.3s ease;
        cursor: pointer;

        white-space: nowrap;
    }

    .yellowButton:hover{
        background-color: #f1c936;
    }
</style>