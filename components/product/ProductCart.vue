<script setup>
const props = defineProps({
    cart: Object
})
console.log(props.cart.attributes.sale)
</script>

<template>
    <div class="cart">
        <div class="cart__wrapper">
            <div class="cart__personal">
                <p class="cart__personal-title"><span>Авторизуйтесь</span>и узнайте свою персональную цену.</p>
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 2.09375C0 1.43359 0.507812 0.875 1.21875 0.875H18.2812C18.9414 0.875 19.5 1.43359 19.5 2.09375C19.5 2.80469 18.9414 3.3125 18.2812 3.3125H1.21875C0.507812 3.3125 0 2.80469 0 2.09375ZM0 8.59375C0 7.93359 0.507812 7.375 1.21875 7.375H18.2812C18.9414 7.375 19.5 7.93359 19.5 8.59375C19.5 9.30469 18.9414 9.8125 18.2812 9.8125H10.9688V22.4062C10.9688 23.1172 10.4102 23.625 9.75 23.625C9.03906 23.625 8.53125 23.1172 8.53125 22.4062V9.8125H1.21875C0.507812 9.8125 0 9.30469 0 8.59375Z"
                        fill="#0E6CDD" />
                </svg>
            </div>
            <div class="cart__body">
                <div class="cart__up">
                    <!-- <div class="cart__basePrice">
                        <span class="shop-prevPrice">529 990</span>
                        <span> - 17%</span>
                    </div> -->
                    <div class="cart__currentPrice">
                        <span class="shop-currentPrice">499 990 ₸</span>
                    </div>
                    <div class="cart__attr">
                        <span>Цена указана с НДС и действительна при заказе в интернет-магазине.</span>
                    </div>
                </div>
                <UIYellowButton><template #icon><i class="fa-regular fa-plus"></i></template>Добавить в корзину
                </UIYellowButton>
                <button class="cart__button-alt">Купить в 1 клик</button>
            </div>
            <div class="cart__sale">
                <div class="cart__sale-info">
                    <span>Товар участвует в акции:</span>
                    <p v-for="(item, index) in props.cart.attributes.sale" :key="index">{{ item.attributes.name }}</p>
                </div>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.0938 0.90625C20.6016 1.36328 20.6016 2.125 20.0938 2.58203L3.03125 19.6445C2.82812 19.8984 2.52344 20 2.21875 20C1.86328 20 1.55859 19.8984 1.30469 19.6445C0.796875 19.1875 0.796875 18.4258 1.30469 17.9688L18.3672 0.90625C18.8242 0.398438 19.5859 0.398438 20.0938 0.90625ZM4.25 6.1875C2.87891 6.1875 1.8125 5.12109 1.8125 3.75C1.8125 2.42969 2.87891 1.3125 4.25 1.3125C5.57031 1.3125 6.6875 2.42969 6.6875 3.75C6.6875 5.12109 5.57031 6.1875 4.25 6.1875ZM17.25 14.3125C18.5703 14.3125 19.6875 15.4297 19.6875 16.75C19.6875 18.1211 18.5703 19.1875 17.25 19.1875C15.8789 19.1875 14.8125 18.1211 14.8125 16.75C14.8125 15.4297 15.8789 14.3125 17.25 14.3125Z"
                        fill="#0E6CDD" />
                </svg>
            </div>
            <div class="cart__footer">
                <div class="cart__footer-info">
                    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.625 8C10.625 9.75781 9.21875 11.125 7.5 11.125C5.74219 11.125 4.375 9.75781 4.375 8C4.375 6.28125 5.74219 4.875 7.5 4.875C9.21875 4.875 10.625 6.28125 10.625 8ZM7.5 6.75C6.79688 6.75 6.25 7.33594 6.25 8C6.25 8.70312 6.79688 9.25 7.5 9.25C8.16406 9.25 8.75 8.70312 8.75 8C8.75 7.33594 8.16406 6.75 7.5 6.75ZM15 8C15 11.4375 10.4297 17.4922 8.39844 20.0312C7.92969 20.6172 7.03125 20.6172 6.5625 20.0312C4.53125 17.4922 0 11.4375 0 8C0 3.85938 3.32031 0.5 7.5 0.5C11.6406 0.5 15 3.85938 15 8ZM7.5 2.375C4.375 2.375 1.875 4.91406 1.875 8C1.875 8.50781 2.03125 9.25 2.46094 10.2656C2.85156 11.2031 3.4375 12.2969 4.10156 13.3906C5.23438 15.1875 6.52344 16.9062 7.5 18.1562C8.4375 16.9062 9.72656 15.1875 10.8594 13.3906C11.5234 12.2969 12.1094 11.2031 12.5 10.2656C12.9297 9.25 13.125 8.50781 13.125 8C13.125 4.91406 10.5859 2.375 7.5 2.375Z" fill="#0E6CDD"/>
                    </svg>
                    <p class="cart__shop-count"><span>Самовывоз</span> из 8 магазинов сегодня - бесплатно</p>
                </div>
                <div class="cart__footer-info">
                    <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.125 4.25C2.07031 4.25 1.25 3.35156 1.25 2.375C1.25 1.35938 2.07031 0.5 3.125 0.5C4.14062 0.5 5 1.39844 5 2.375C5 3.39062 4.14062 4.25 3.125 4.25ZM14.375 4.25C14.6875 4.25 15 4.5625 15 4.875V11.1641C15 11.4766 14.6875 11.75 14.375 11.75H5.74219C5.23438 11.75 4.80469 11.4375 4.60938 11.0078L3.75 8.89844V13.3516L5.23438 14.4062C5.625 14.7188 5.89844 15.1484 5.97656 15.6172L6.83594 19.2109C6.95312 19.7188 6.64062 20.2656 6.13281 20.3438C5.58594 20.5 5.11719 20.1484 5 19.6797L4.25781 16.3594C4.17969 16.0859 4.02344 15.8516 3.78906 15.6562L0.820312 13.3125C0.117188 12.7656 0 11.9453 0 11.6328V7.64844C0 6.47656 0.976562 5.5 2.1875 5.5H2.89062C3.78906 5.5 4.57031 6.04688 4.92188 6.86719L6.17188 9.875H7.5V4.83594C7.5 4.52344 7.77344 4.25 8.125 4.25H14.375ZM13.125 9.875V6.125H9.375V9.875H13.125ZM0 19.5625V14.2891C0 14.3281 1.40625 15.4219 1.875 15.8125V19.5625C1.875 20.1094 1.44531 20.4609 0.9375 20.4609C0.390625 20.4609 0 20.0703 0 19.5625Z" fill="#0E6CDD"/>
                    </svg>
                    <p class="cart__divelery">Доставка по <span>Алматы</span> завтра - 990 ₸</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.yellowButton {
    height: 52px;
}
</style>