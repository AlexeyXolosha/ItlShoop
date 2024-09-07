<template>
    <div class="brand">
        <div class="brand__body">
            <div class="brand__list">
                <div class="brand__item">
                    <img src="../../public/brand/dyson.svg" alt="" class="brand_image">
                </div>
                <div class="brand__item">
                    <img src="../../public/brand/samsung.svg" alt="" class="brand_image">
                </div>
                <div class="brand__item">
                    <img src="../../public/brand/apple.svg" alt="" class="brand_image">
                </div>
                <div class="brand__item">
                    <img src="../../public/brand/Robot.svg" alt="" class="brand_image">
                </div>
                <div class="brand__item">
                    <img src="../../public/brand/sony.svg" alt="" class="brand_image">
                </div>
                <div class="brand__item">
                    <img src="../../public/brand/logitech.svg" alt="" class="brand_image">
                </div>
                <div class="brand__item">
                    <img src="../../public/brand/tefal.svg" alt="" class="brand_image">
                </div>
                <div class="brand__item">
                    <img src="../../public/brand/asus.svg" alt="" class="brand_image">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .brand{

        &__list{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__item{
            padding: 41px 40px;
            background-color: var(--color-blue-transparent-card);
            width: calc(100%/8 - 20px)
        }
    }
</style>