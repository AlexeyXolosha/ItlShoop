<script setup>
const props = defineProps({
    id: Number,
    image: String,
    name: String,
    title: String,
    text: String,
    button: Object
})

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
    <div class="banner-sale">
        <div class="banner-sale__body">
            <img :src="imageUpload(image)" alt="" width="552" height="380" class="banner-sale__image">
            <div class="banner-sale__info">
                <div class="banner-sale__category">
                    <p>{{title}}</p>
                </div>
                <div class="banner-sale__title">
                    <h3 v-html="text"></h3>
                </div>
                <div class="banner-sale__links">
                    <div v-for="(btn, index) in Object.values(button)"  :key="index" class="banner-sale__item">
                        <a class="banner-sale__link"  :href="btn.link" v-if="btn && btn.text">{{btn.text}}</a>
                    </div>
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
            border-radius: var(--border-radius-6px);
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

        &__links{
            display: flex;
            column-gap: 16px;
            align-items: center
        }

        &__link{
            color: var();
            cursor: pointer;
            text-decoration: none;

            padding: 4px 14px;
            border: 1px solid var(--color-white);
            border-radius: var(--border-radius-4px);
            color: var(--color-white);

            &:hover{
                color: var(--color-dark);
                background-color: var(--color-white);
            }
        }
    }
</style>