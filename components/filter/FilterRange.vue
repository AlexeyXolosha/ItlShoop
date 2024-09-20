<script setup></script>

<template>
    <div class="filter-range">
        <div class="filter-range__body">
            <div class="filter-range__input-emulator">
                <span class="min-range">0</span>
                <span class="max-range">140 900</span>
            </div>
            <div class="filter-range__progress"></div>
            <div class="filter-range__range">
                <input type="range">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.filter-range{
    &__input-emulator{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--color-blue-transparent-checkbox);
        border-radius: var(--border-radius-6px);
        padding: 14px 20px;
        font-size: 14px;
        color: var(--color-dark-blue);
    }
}
</style>