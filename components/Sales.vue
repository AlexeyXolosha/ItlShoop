<script setup>
const {data: sales} = fetchSale()

const imageUpload = (url) => {
    return url ? `${BASE_URL}${url}` : '';
}
</script>

<template>
   <section class="section container">
        <div class="section__info">
            <h2 class="section__title">
                <slot></slot>
            </h2>
        </div>
        <div class="sale ">
            <div class="sale__banner">
                <div v-for="sale in sales?.data" :key="sale.id" class="sale__card">
                <div class="sale__content">
                        <img :src="imageUpload(sale.attributes.image)" alt="" class="sale__image" width="408" height="280">
                        <div class="sale__info">
                            <span v-if="sale.attributes.discount" class="sale__discount">{{ sale.attributes.discount }}</span>
                            <div class="sale__timer">
                                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.33594 4.17969C1.75 5.21094 1.375 6.26562 1.375 7.13281C1.375 9.54688 3.17969 11.375 5.5 11.375C7.77344 11.375 9.625 9.54688 9.625 7.13281C9.625 6.45312 9.36719 5.53906 8.94531 4.64844C8.57031 3.80469 8.07812 3.05469 7.60938 2.5625C7.51562 2.67969 7.39844 2.84375 7.25781 3.00781C7.21094 3.10156 7.14062 3.19531 7.07031 3.28906C6.97656 3.42969 6.85938 3.59375 6.78906 3.6875C6.69531 3.82812 6.53125 3.89844 6.34375 3.92188C6.17969 3.92188 6.01562 3.82812 5.89844 3.6875C5.82812 3.59375 5.73438 3.47656 5.64062 3.38281C5.19531 2.79688 4.67969 2.14062 4.23438 1.69531C3.60156 2.30469 2.89844 3.19531 2.33594 4.17969ZM4.91406 0.78125C5.35938 1.20312 5.875 1.83594 6.32031 2.39844L6.34375 2.375C6.50781 2.11719 6.71875 1.83594 6.90625 1.64844C7.30469 1.29688 7.89062 1.29688 8.28906 1.64844C8.89844 2.25781 9.50781 3.19531 9.95312 4.17969C10.4219 5.14062 10.75 6.21875 10.75 7.13281C10.75 10.1562 8.40625 12.5 5.5 12.5C2.54688 12.5 0.25 10.1328 0.25 7.13281C0.25 5.96094 0.71875 4.71875 1.35156 3.61719C1.98438 2.51562 2.80469 1.48438 3.55469 0.78125C3.95312 0.429688 4.53906 0.429688 4.91406 0.78125ZM5.52344 10.25C4.04688 10.25 2.875 9.3125 2.85156 7.69531C2.85156 6.99219 3.25 6.35938 4.04688 5.375C4.21094 5.1875 4.49219 5.1875 4.63281 5.375C5.03125 5.86719 5.71094 6.75781 6.10938 7.25C6.25 7.4375 6.53125 7.4375 6.67188 7.25L7.28125 6.57031C7.42188 6.38281 7.70312 6.40625 7.79688 6.61719C8.38281 7.69531 8.125 9.07812 7.14062 9.75781C6.64844 10.0859 6.13281 10.25 5.52344 10.25Z" fill="#FB6340"/>
                                </svg>
                                {{ sale.attributes.active_period }}
                            </div>
                        </div>
                </div>
                    <h2 class="sale__title">
                        {{ sale.attributes.title }}
                    </h2>
                </div>
            </div>
        </div>  
   </section>
</template>

<style lang="scss"> 
.sale{

    &__banner{
        display: flex;
        justify-content: space-between;
        column-gap: 24px;
    }

    &__content{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
        margin-bottom: 16px;
    }

    &__image{
        border-radius: var(--border-radius-6px);
        object-fit: cover;
      
    }

    &__info{
        position: absolute;

        display: flex;
        align-items: center;
        padding: 40px 32px;
        column-gap: 8px;


        svg{
            color: var(--color-strawberry);
        }
    }

    &__discount{
        padding: 1px 8px;
        font-size: 14px;
        border-radius: var(--border-radius-4px);
        background-color: var(--color-dark-yellow);
    }

    &__timer{
        display: flex;
        align-items: center;
        column-gap: 8px;

        font-size: 14px;
        background-color: var(--color-white);
        border-radius: var(--border-radius-4px);
        padding: 1px 10px;
    }

    &__title{
        font-size: 18px;
        font-weight: 400;
    }

}
</style>