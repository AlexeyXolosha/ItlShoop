<template>
    <div class="pagination">
        <ul class="pagination__list">
            <li class="pagination__item">
                <button class="pagination__button"><i class="fa-regular fa-angle-left"></i></button>
            </li>
            <li class="pagination__item">
                <button class="pagination__button">1</button>
            </li>
            <li class="pagination__item">
                <button class="pagination__button">2</button>
            </li>
            <li class="pagination__item">
                <button class="pagination__button">3</button>
            </li>
            <li class="pagination__item">
                <button class="pagination__button">4</button>
            </li>
            <li class="pagination__item">
                <button class="pagination__button">5</button>
            </li>
            <li class="pagination__item">
                <button class="pagination__button"><i class="fa-regular fa-angle-right"></i></button>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    .pagination{
        &__list{
            display: flex; 
            align-items: center;
            column-gap: 12px;
        }

        &__item{
            display: flex;
            align-self: center;
        }

        &__button{  
            padding: 0;
            cursor: pointer;
            display: inline-block;
            text-align: start;
            padding: 10px 16px;
            height: 44px;
            border-radius: var(--border-radius-6px);
            border: 1px solid var(--color-blue);
            background-color: var(--colow-white);

            transition: 0.2s;

            &:hover{
                color: var(--color-white);
                background-color: var(--color-blue);
            }
        }
    }
</style>