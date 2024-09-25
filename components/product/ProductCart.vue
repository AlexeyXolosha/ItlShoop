<template>
    <div class="cart">
        <div class="cart__wrapper">
            <div class="cart__personal">
                <p class="cart__info"><span>Авторизуйтесь</span>и узнайте свою персональную цену.</p>
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 2.09375C0 1.43359 0.507812 0.875 1.21875 0.875H18.2812C18.9414 0.875 19.5 1.43359 19.5 2.09375C19.5 2.80469 18.9414 3.3125 18.2812 3.3125H1.21875C0.507812 3.3125 0 2.80469 0 2.09375ZM0 8.59375C0 7.93359 0.507812 7.375 1.21875 7.375H18.2812C18.9414 7.375 19.5 7.93359 19.5 8.59375C19.5 9.30469 18.9414 9.8125 18.2812 9.8125H10.9688V22.4062C10.9688 23.1172 10.4102 23.625 9.75 23.625C9.03906 23.625 8.53125 23.1172 8.53125 22.4062V9.8125H1.21875C0.507812 9.8125 0 9.30469 0 8.59375Z"
                        fill="#0E6CDD" />
                </svg>
            </div>
            <div class="cart__body">
                <div class="cart__up">
                    <div class="cart__basePrice">
                        <span class="shop-prevPrice">529 990</span>
                        <span> - 17%</span>
                    </div>
                    <div class="cart__currentPrice">
                        <span class="shop-currentPrice">499 990 ₸</span>
                    </div>
                    <div class="cart__attr">
                        <span>Цена указана с НДС и действительна при заказе в интернет-магазине.</span>
                    </div>
                </div>
                <div class="cart__button">
                    <UIYellowButton><template #icon><i class="fa-regular fa-plus"></i></template>Добавить в корзину
                    </UIYellowButton>
                    <UIYellowButton class="button-transparent">Купить в 1 клик</UIYellowButton>
                </div>
            </div>
            <div class="cart__sale">
                    <div class="cart__sale-info">
                        <span>Товар участвует в акции:</span>
                        <p>Черная пятница в разгаре, скидки до 80%! </p>
                    </div>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.0938 0.90625C20.6016 1.36328 20.6016 2.125 20.0938 2.58203L3.03125 19.6445C2.82812 19.8984 2.52344 20 2.21875 20C1.86328 20 1.55859 19.8984 1.30469 19.6445C0.796875 19.1875 0.796875 18.4258 1.30469 17.9688L18.3672 0.90625C18.8242 0.398438 19.5859 0.398438 20.0938 0.90625ZM4.25 6.1875C2.87891 6.1875 1.8125 5.12109 1.8125 3.75C1.8125 2.42969 2.87891 1.3125 4.25 1.3125C5.57031 1.3125 6.6875 2.42969 6.6875 3.75C6.6875 5.12109 5.57031 6.1875 4.25 6.1875ZM17.25 14.3125C18.5703 14.3125 19.6875 15.4297 19.6875 16.75C19.6875 18.1211 18.5703 19.1875 17.25 19.1875C15.8789 19.1875 14.8125 18.1211 14.8125 16.75C14.8125 15.4297 15.8789 14.3125 17.25 14.3125Z"
                            fill="#0E6CDD" />
                    </svg>
            </div>
            <div class="cart__footer">
                <div class="cart__shop">
                    <p><span>Самовывоз</span> из 8 магазинов сегодня - бесплатно</p>
                </div>
                <div class="cart__delivery">
                    <p>Доставка по <span>Алматы</span> завтра - 990 ₸</p>
                </div>
            </div>
        </div>
    </div>
</template>