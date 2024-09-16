<template>
    <div class="checkers">
        <div class="checkers__body">
            <div class="checkers__title">
                <p>Бренд</p>
                <i class="fa-regular fa-angle-up"></i>
            </div>
            <div class="checkers__check">
                <label class="checkers__label">
                    <input type="checkbox" class="checkbox__input" value="Apple">
                    <span class="check__emulator"></span>
                    <span class="check__label">Apple</span>
                </label>
                <label class="checkers__label">
                    <input type="checkbox" class="checkbox__input" value="Apple">
                    <span class="check__emulator"></span>
                    <span class="check__label">Apple</span>
                </label>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.checkers{
    &__body{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }
    &__title{
        display: flex;
        justify-content: space-between;
        align-items: center;

        p{
            font-size: 18px;
            line-height: 24px;
        }

        i{
            cursor: pointer;
        }
    }
    &__check{
        display: flex;
        align-items: center;
    }

    &__label{
        display: flex;
        align-items: center;
    }
}

.check__emulator{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    aspect-ratio: 1;
    position: relative;
    background-color: var(--color-white);
    border: 1px solid var(--color-blue-transparent-alt);
    border-radius: var(--border-radius-4px);
}

.check__emulator::before{
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    background-color: var(--color-blue-transparent-alt);
    width: 60%;
    aspect-ratio: 1;
    content: "";
}
</style>