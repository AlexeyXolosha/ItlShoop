<script setup>

const {data: advantages} = fetchBannerAdvantages()

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
        <div class="banner__card">
            <ul class="banner__card-list">
                <li v-for="advantage in advantages?.data" :key="advantage.i" class="banner__card-item">
                    <div href="" class="banner__card-link">
                        <img :src="imageUpload(advantage.attributes?.image)" alt="" width="26" height="26">
                        <p v-html="advantage.attributes.text"></p>
                    </div>
                </li>
            </ul>
        </div>
</template>

<style lang="scss">
     .banner__card{
        &-list{
            display: flex;
            justify-content: space-between;
            align-items: center;
            column-gap: 35px;
        }

        &-link{
            display: flex;
            align-items: center;
            color: #333;
            text-decoration: none;
            background-color: var(--color-white);
            border-radius: var(--border-radius-6px);
            padding: 20px 28px;
            min-height: 100px;

            img{
                margin-right: 16px;
            }

            span{
                width: 200px;
            }
        }
    }
</style>