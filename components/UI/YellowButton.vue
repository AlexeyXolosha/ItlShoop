<template>
    <button class="yellowButton">
      <slot name="icon"></slot>
      <span>
        <slot></slot>
      </span>
    </button>
</template>

<style lang="scss">
    .yellowButton{
        background-color: #ffd740;
        border: none;
        border-radius: 6px;
        color: var(--color-black);
        height: 48px;
        width: 100%;
        padding-inline: 20px;
        transition: 0.3s ease;
        cursor: pointer;
        white-space: nowrap;

        &:hover{
          background-color: #f1c936;
        }

        i{
          font-size: 14px;
          margin-right: 12px;
        }
    }

</style>