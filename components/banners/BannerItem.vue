<template>
    <div class="banner-sale">
        <div class="banner-sale__body">
            <img src="../../public/banner/banner1.png" alt="" class="banner-sale__image">
            <div class="banner-sale__info">
                <div class="banner-sale__category">
                    <p>Малышам</p>
                </div>
                <div class="banner-sale__title">
                    <h3>Комфортные и безопасные детские автокресла</h3>
                </div>
                <div class="banner-sale__price">
                    <span>от 49 990 ₸</span>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .banner-sale{

        &__body{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            min-height: 380px;
        }

        &__image{
            position: relative;
        }

        &__info{
            display: flex;
            justify-content: flex-end;
            flex-direction: column;
            align-items: start;
            row-gap: 8px;
            padding: 32px;
            position: absolute;
        }

        &__category{
            color: var(--color-white);

        }

        &__title{
            color: var(--color-dark-yellow);
            margin-bottom: 20px;
            width: 448px;
            h3{
                font-size: 24px;
                font-weight: 400;
                margin: 0;
            }
        }

        &__price{
            padding: 4px 14px;
            border: 1px solid var(--color-white);
            border-radius: var(--border-radius-4px);
            color: var(--color-white);

            cursor: pointer;
          
            &:hover{
                color: var(--color-dark);
                background-color: var(--color-white);
            }
        }
    }
</style>