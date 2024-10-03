<script setup>
import { fetchMenuCategories } from '~/utils/apiRequest';
const {data: headeSale} = fetchMenuCategories()

const props = defineProps({
    isModalOpen: Boolean
});

const emit = defineEmits(["toggle-modal"]);
</script>


<template>
    <header class="header">
        <div class="header__inner">
            <a href="/" class="header__logo">
                <div class="header__logo-links">
                    <img src="../public/logo.svg" alt="ITL" class="logo__images" width="46" height="40" loading="lazy">
                </div>    
                <div class="header__logo-name">
                    <span class="header__logo-title">itl.b2c</span>
                    <span>Готовый интернет-магазин</span>
                </div>
            </a>
            <UIYellowButton @click="emit('toggle-modal')">
                    <template #icon>
                        <i v-if="!isModalOpen" class="fa-regular fa-bars"></i>
                        <i v-else class="fa-regular fa-xmark"></i>
                    </template>
                    Каталог товаров
            </UIYellowButton>
            <div class="header__search">
                <input class="header__search-input" type="text" placeholder="Искать товар со скидками до 50% ">
            </div>

            <div class="header__user">
                <div class="header__user-info">
                    <a href="#" class="header__user-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5.25C9.70312 5.25 7.875 7.125 7.875 9.375C7.875 11.6719 9.70312 13.5 12 13.5C14.25 13.5 16.125 11.6719 16.125 9.375C16.125 7.125 14.25 5.25 12 5.25ZM12 11.25C10.9219 11.25 10.125 10.4531 10.125 9.375C10.125 8.34375 10.9219 7.5 12 7.5C13.0312 7.5 13.875 8.34375 13.875 9.375C13.875 10.4531 13.0312 11.25 12 11.25ZM12 0C5.34375 0 0 5.39062 0 12C0 18.6562 5.34375 24 12 24C18.6094 24 24 18.6562 24 12C24 5.39062 18.6094 0 12 0ZM12 21.75C9.79688 21.75 7.78125 21.0469 6.14062 19.8281C6.9375 18.2344 8.53125 17.25 10.3125 17.25H13.6406C15.4219 17.25 17.0156 18.2812 17.8125 19.8281C16.1719 21.0469 14.1562 21.75 12 21.75ZM19.5 18.2344C18.2344 16.2656 16.0781 15 13.6406 15H10.3125C7.875 15 5.71875 16.2656 4.45312 18.2344C3.04688 16.5469 2.25 14.3906 2.25 12C2.25 6.65625 6.60938 2.25 12 2.25C17.3438 2.25 21.75 6.65625 21.75 12C21.75 14.3906 20.9062 16.5469 19.5 18.2344Z" fill="#0E6CDD"/>
                        </svg>
                        <span>Войти</span>
                    </a>
                    <a href="#" class="header__user-item">
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4375 2.9375L11.9531 3.5L12.5156 2.98438C14.0625 1.4375 16.2656 0.734375 18.375 1.10938C21.6094 1.625 24 4.4375 24 7.71875V7.95312C24 9.92188 23.1562 11.7969 21.75 13.1094L13.2656 21.0312C12.9375 21.3594 12.4688 21.5 12 21.5C11.4844 21.5 11.0156 21.3594 10.6875 21.0312L2.20312 13.1094C0.796875 11.7969 0 9.92188 0 7.95312V7.71875C0 4.4375 2.34375 1.625 5.57812 1.10938C7.6875 0.734375 9.89062 1.4375 11.4375 2.9375C11.4375 2.98438 11.3906 2.9375 11.4375 2.9375ZM11.9531 6.6875L9.84375 4.53125C8.8125 3.54688 7.35938 3.07812 5.95312 3.3125C3.79688 3.6875 2.25 5.51562 2.25 7.71875V7.95312C2.25 9.3125 2.76562 10.5781 3.75 11.4688L12 19.1562L20.2031 11.4688C21.1875 10.5781 21.75 9.3125 21.75 7.95312V7.71875C21.75 5.51562 20.1562 3.6875 18 3.3125C16.5938 3.07812 15.1406 3.54688 14.1094 4.53125L11.9531 6.6875Z" fill="#0E6CDD"/>
                        </svg>
                        <span>Избранное</span>
                    </a>
                    <a href="#" class="header__user-item">
                        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M1.125 0C0.46875 0 0 0.515625 0 1.125C0 1.78125 0.46875 2.25 1.125 2.25H3.23438C3.42188 2.25 3.5625 2.39062 3.60938 2.57812L6.04688 15.2812C6.32812 16.875 7.73438 18 9.32812 18H22.875C23.4844 18 24 17.5312 24 16.875C24 16.2656 23.4844 15.75 22.875 15.75H9.32812C8.8125 15.75 8.34375 15.375 8.25 14.8594L7.96875 13.5H21.5156C23.0156 13.5 24.375 12.5156 24.75 11.0156L26.6719 3.89062C27 2.67188 26.1094 1.5 24.8906 1.5H5.625C5.20312 0.609375 4.26562 0 3.23438 0H1.125ZM6.14062 3.75H24.375L22.5938 10.4531C22.4531 10.9219 22.0312 11.25 21.5156 11.25H7.54688L6.14062 3.75ZM8.25 24C9.9375 24 11.0625 22.125 10.1719 20.625C9.75 19.9688 9.04688 19.5 8.25 19.5C6.51562 19.5 5.39062 21.375 6.28125 22.875C6.70312 23.5781 7.40625 24 8.25 24ZM24 21.75C24 20.0625 22.125 18.9375 20.625 19.8281C19.9219 20.25 19.5 20.9531 19.5 21.75C19.5 23.4844 21.375 24.6094 22.875 23.7188C23.5312 23.2969 24 22.5938 24 21.75Z" fill="#0E6CDD"/>
                        </svg>
                        <span>954 870 ₸</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="header__category">
            <ul class="header__category-list">
                <li v-for="(category, index) in headeSale?.data.slice(0, 12)" :key="index"  class="header__category-item">
                     <a :href="category?.links.self" class="header__category-link">{{ category?.attributes.name }}</a>
                </li>
            </ul>
        </div>
    </header>
</template>


<style lang="scss" scoped>
.yellowButton{
    max-width: 181px;
    width: 100%;
}
</style>

<style lang="scss">
    .header{
        display: flex;
        flex-direction: column;
        row-gap: 28px;
        max-width: 1840p;
        margin-inline: auto;
        padding: 32px 40px;

        &__inner{
            display: flex;
            justify-content: space-between;
            align-items: center;

        }

        &__logo{
            display: flex;
            align-items: center;
            column-gap: 16px;
            text-decoration: none;
            color: #333;
        }

        &__logo-name{
            display: flex;
            flex-direction: column;
            align-items: start;
        }

        &__logo-title{
            font-size: 18px;
        }

        &__user-info{
            display: flex;
            align-items: center;
            column-gap: 32px;
        }

        &__user-item{
            display: flex;
            align-items: center;
            column-gap: 16px;
            color: #333;
            text-decoration: none;

            svg{
                color: #0E6CDD;
            }
        }

        &__search{
            width: 50%;
        }

        &__search-input{
            width: 100%;
            max-width: 964px;
            height: 48px;
            padding-inline: 20px;
            border: 2px solid rgba(14, 108, 221, 0.3);
            border-radius: 6px;

            color: #005CCC;
            
            &::placeholder{
                color: #005CCC;
                opacity: 0.3;
            }

            &:focus{
                border-color: #0E6CDD;
                outline: none;
            }
        }

        &__category-list{
            display: flex;
            justify-content: space-between;
            column-gap: 16px;
            align-items: center;
            overflow: hidden;
        }

        &__category-link{
            color: #00479C;
            text-decoration: none;

            &:hover{
                color: #0E6CDD;
            }
        }
    }
</style>

