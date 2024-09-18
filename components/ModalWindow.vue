<template>
<div class="modal">
    <div class="modal__container">
        <div class="modal__body">
            <div class="modal-catalog__parent">
                <ul class="modal-catalog__list">
                    <li class="modal-catalog__item">
                        <a href="" class="modal-catalog__link">Электроника</a>
                        <i class="fa-regular fa-angle-right"></i>
                    </li>
                    <li class="modal-catalog__item">
                        <a href="" class="modal-catalog__link">Мебель</a>
                        <i class="fa-regular fa-angle-right"></i>
                    </li>
                    <li class="modal-catalog__item">
                        <a href="" class="modal-catalog__link">Транспорт</a>
                        <i class="fa-regular fa-angle-right"></i>
                    </li>
                    <li class="modal-catalog__item">
                        <a href="" class="modal-catalog__link">Обувь</a>
                        <i class="fa-regular fa-angle-right"></i>
                    </li>
                    <li class="modal-catalog__item">
                        <a href="" class="modal-catalog__link">Одежда</a>
                        <i class="fa-regular fa-angle-right"></i>
                    </li>
                </ul>
            </div>
            <div class="modal-catalog__separate">|</div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.modal{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 99998;
    background-color: rgb(0,0,0, .3);
    display: grid;
    align-items: center;
    justify-content: center;

    &__container{
        max-width: 852px;
        background-color: var(--color-white);
        padding: 30px 75px;
        z-index: 1;
    }

    &__body{
        display: flex;
        align-items: center;
        column-gap: 24px;
    }

    &-catalog{
        
        &__item{
            display: flex;
            align-items: center;
            column-gap: 4px;
        }

        &__separate{
            background-color: #333;
            width: 2px;
            height: 100%;
        }

    
    }
}
</style>