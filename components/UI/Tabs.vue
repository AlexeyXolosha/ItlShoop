<template>
    <div class="tabs">
        <ul class="tabs__list">
            <li class="tabs__list-item">
                <a class="tabs__list-link active">Все категории</a>
            </li>
            <li class="tabs__list-item">
                <a class="tabs__list-link">Смартфоны</a>
            </li>
            <li class="tabs__list-item">
                <a class="tabs__list-link">Ноутбуки</a>
            </li>
            <li class="tabs__list-item">
                <a class="tabs__list-link">Умные часы</a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .tabs{
        &__list{
            display: flex;
            align-items: center;
            column-gap: 12px;

            &-link{
                border: 1px solid var(--color-blue-transparent);
                border-radius: var(--border-radius-6px);
                padding-inline: 16px;

                cursor: pointer;
                
                &:hover{
                    background-color: var(--color-blue);
                    color: var(--color-white);
                }

            }
        }
    }

    .active{
       border-color: var(--color-blue); 
    }
</style>