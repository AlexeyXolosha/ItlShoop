<template>
    <section class="section container">
        <div class="footer">
            <div class="footer__subscription">
               <div class="footer__inner">
                    <div class="footer__text">
                        <p>Подпишитесь на нашу рассылку</p>
                        <p>Вы первыми будите узнавать о наших акциях и эксклюзивных предложениях.</p>
                    </div>
                    <input type="email" placeholder="Укажите ваш email" name="email" class="footer__input">
                    <UIYellowButton class="yellowButton-height">Подписаться</UIYellowButton>
               </div>
            </div>
           
            <div class="footer__info">

                <div class="footer__social">
                    <div class="footer__info-telephone">
                        <a href="tel:+77273397010" class="footer__telephone">+7 727 339 70 10</a>
                        <span>Задать вопрос или оформить покупку.</span>
                    </div>
                    
                    <div class="footer__social-block">
                        <ul class="footer__social-links">
                            <li class="footer__social-item">
                                <a class="footer__link" href="">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 5.60938C14.4531 5.60938 16.8906 8.04688 16.8906 11C16.8906 14 14.4531 16.3906 11.5 16.3906C8.5 16.3906 6.10938 14 6.10938 11C6.10938 8.04688 8.5 5.60938 11.5 5.60938ZM11.5 14.5156C13.4219 14.5156 14.9688 12.9688 14.9688 11C14.9688 9.07812 13.4219 7.53125 11.5 7.53125C9.53125 7.53125 7.98438 9.07812 7.98438 11C7.98438 12.9688 9.57812 14.5156 11.5 14.5156ZM18.3438 5.42188C18.3438 4.71875 17.7812 4.15625 17.0781 4.15625C16.375 4.15625 15.8125 4.71875 15.8125 5.42188C15.8125 6.125 16.375 6.6875 17.0781 6.6875C17.7812 6.6875 18.3438 6.125 18.3438 5.42188ZM21.9062 6.6875C22 8.42188 22 13.625 21.9062 15.3594C21.8125 17.0469 21.4375 18.5 20.2188 19.7656C19 20.9844 17.5 21.3594 15.8125 21.4531C14.0781 21.5469 8.875 21.5469 7.14062 21.4531C5.45312 21.3594 4 20.9844 2.73438 19.7656C1.51562 18.5 1.14062 17.0469 1.04688 15.3594C0.953125 13.625 0.953125 8.42188 1.04688 6.6875C1.14062 5 1.51562 3.5 2.73438 2.28125C4 1.0625 5.45312 0.6875 7.14062 0.59375C8.875 0.5 14.0781 0.5 15.8125 0.59375C17.5 0.6875 19 1.0625 20.2188 2.28125C21.4375 3.5 21.8125 5 21.9062 6.6875ZM19.6562 17.1875C20.2188 15.8281 20.0781 12.5469 20.0781 11C20.0781 9.5 20.2188 6.21875 19.6562 4.8125C19.2812 3.92188 18.5781 3.17188 17.6875 2.84375C16.2812 2.28125 13 2.42188 11.5 2.42188C9.95312 2.42188 6.67188 2.28125 5.3125 2.84375C4.375 3.21875 3.67188 3.92188 3.29688 4.8125C2.73438 6.21875 2.875 9.5 2.875 11C2.875 12.5469 2.73438 15.8281 3.29688 17.1875C3.67188 18.125 4.375 18.8281 5.3125 19.2031C6.67188 19.7656 9.95312 19.625 11.5 19.625C13 19.625 16.2812 19.7656 17.6875 19.2031C18.5781 18.8281 19.3281 18.125 19.6562 17.1875Z" fill="#0E6CDD"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="footer__social-item">
                                <a class="footer__link" href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.625 0.375C18 0.375 23.25 5.625 23.25 12C23.25 18.4219 18 23.625 11.625 23.625C5.20312 23.625 0 18.4219 0 12C0 5.625 5.20312 0.375 11.625 0.375ZM16.9688 8.29688C17.0156 8.15625 17.0156 8.01562 16.9688 7.82812C16.9688 7.73438 16.875 7.59375 16.8281 7.54688C16.6875 7.40625 16.4531 7.40625 16.3594 7.40625C15.9375 7.40625 15.2344 7.64062 12 9C10.875 9.46875 8.625 10.4062 5.25 11.9062C4.6875 12.1406 4.40625 12.3281 4.35938 12.5625C4.3125 12.9375 4.92188 13.0781 5.625 13.3125C6.23438 13.5 7.03125 13.7344 7.45312 13.7344C7.82812 13.7344 8.25 13.5938 8.71875 13.2656C11.8594 11.1094 13.5 10.0312 13.5938 10.0312C13.6875 10.0312 13.7812 9.98438 13.8281 10.0312C13.9219 10.125 13.9219 10.2188 13.875 10.2656C13.8281 10.5 10.875 13.2188 10.6875 13.4062C10.0312 14.0625 9.28125 14.4844 10.4531 15.2344C11.4375 15.8906 12 16.3125 13.0312 16.9688C13.6875 17.3906 14.2031 17.9062 14.8594 17.8594C15.1875 17.8125 15.5156 17.5312 15.6562 16.6406C16.0781 14.625 16.8281 10.125 16.9688 8.29688Z" fill="#0E6CDD"/>
                                    </svg>
                                </a>
                            </li>
                            <li class="footer__social-item">
                                <a class="footer__link" href="">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.625 12C23.625 17.8125 19.3594 22.6406 13.7812 23.4844V15.375H16.5L17.0156 12H13.7812V9.84375C13.7812 8.90625 14.25 8.01562 15.7031 8.01562H17.1562V5.15625C17.1562 5.15625 15.8438 4.92188 14.5312 4.92188C11.9062 4.92188 10.1719 6.5625 10.1719 9.46875V12H7.21875V15.375H10.1719V23.4844C4.59375 22.6406 0.375 17.8125 0.375 12C0.375 5.57812 5.57812 0.375 12 0.375C18.4219 0.375 23.625 5.57812 23.625 12Z" fill="#0E6CDD"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer__privacy">
                        <ul class="footer__privacy-list">
                            <li class="footer__privacy-item">
                                <a href="" class="footer__privacy-link">
                                    Политика конфиденциальности
                                </a>
                            </li>
                            <li class="footer__privacy-item">
                                <a href="" class="footer__privacy-link">
                                    Пользовательское соглашение
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer__section">
                    <div class="footer__section-title">
                        <p>Магазины</p>
                    </div>
                    <div class="footer__element">
                        <ul class="footer__list">
                            <li class="footer__item">
                                <a href="" class="footer__el-link">г. Алмата, ул. Толе Би 100</a>
                                <span class="sp-block-black-80">Открыто до 19:00</span>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">г. Алмата, ул. Пушкина 189</a>
                                <span class="sp-block-black-80">Открыто до 19:00</span>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">г. Алмата, ул. Фурманова 45</a>
                                <span class="sp-block-black-80">Открыто до 19:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer__section">
                    <div class="footer__section-title">
                        <p>О компании</p>
                    </div>
                    <div class="footer__element">
                        <ul class="footer__list">
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Акции и новости</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Корпоративным клиентам</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Вакансии</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Контакты</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Обратная связь</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer__section">
                    <div class="footer__section-title">
                        <p>Помощь</p>
                    </div>
                    <div class="footer__element">
                        <ul class="footer__list">
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Где мой заказ?</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Обмен и возврат</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Гарантии</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Сервисные центры</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Бонусная программа</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="footer__section">
                    <div class="footer__section-title">
                        <p>Получение и оплата</p>
                    </div>
                    <div class="footer__element">
                        <ul class="footer__list">
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Доставка курьером</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Доставка транспортной компанией</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Самовывоз</a>
                            </li>
                            <li class="footer__item">
                                <a href="" class="footer__el-link">Способы оплаты</a>
                            </li>
                        </ul>
                    </div>
                </div>


                

            </div>

            <div class="footer__border"></div>

            <div class="footer__company">
                <div class="footer__company-title">
                    © ITL.B2C 2023
                </div>
                <div class="footer__logo">
                    <img src="../public/footer__logo.svg" alt="">
                    <img src="../public/footer__company.svg" alt="">

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .footer{
        display: flex;
        flex-direction: column;

        &__section{
        display: flex;
        flex-direction: column;
        align-items: start;
        row-gap: 20px;
        }

        &__section-title{
            font-size: 20px;
        }

        &__subscription{
            padding: 30px 34px 30px 32px;
            background-color: var(--color-blue-transparent-card);
            margin-bottom: 56px;
        }

        &__inner{
            display: flex;
            align-items: center;
            column-gap: 24px;
        }

        &__text{
            display: flex;
            flex-direction: column;
            white-space: nowrap;
            row-gap: 4px;
            p{
                margin: 0;
            }
        }

        &__input{
            width: 100%;
            height: 52px;
            padding-inline: 20px;
            border: transparent;
            border-radius: var(--border-radius-6px);

            color: var(--color-blue);

            &::placeholder{
                color: #005CCC;
                opacity: 0.3;
            }

            &:focus{
                border-color: #0E6CDD;
                outline: none;
            }
        }

        &__info{
            display: flex;
            justify-content: space-between;
            column-gap: 24px; 
            margin-bottom: 56px;
        }

        &__social{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: start;
            row-gap: 24px;
            width: 552px;
        }

        &__info-telephone{
            display: flex;
            flex-direction: column;

            span{
                color: var(--color-blac-80);
            }
        }

        &__telephone{
            font-size: 30px;
            color: #333;
            text-decoration: none;
        }

        &__social-links{
            display: flex;
            align-items: center;
            column-gap: 12px;
        }

        &__link{
            display: flex;
            padding: 10px 12px;
            border-radius: var(--border-radius-6px);
            color: var(--color-blue);
            background-color: var(--color-blue-transparent-card);

        }

        &__privacy-list{
            display: flex;
            flex-direction: column;
        }

        &__privacy-link{
            color: #333;
            font-size: 14px;
            text-decoration: none;

            &:hover{
                color: var(--color-blue);
            }
        }   
        
        &__list{
            display: flex;
            flex-direction: column;
            row-gap: 12px;
        }

        &__item{
            display: flex;
            flex-direction: column;
        }

        &__el-link{
            color: #333;
            text-decoration: none;

            &:hover{
                color: var(--color-blue);
            }
        }

        &__border{
            border: 1px solid var(--color-blue-transparent-card);
            margin-bottom: 49px;
        }

        &__company{
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-title{
                font-size: 14px;
            }
        }

        &__logo{
            display: flex; 
            align-items: center;
            column-gap: 4px;
        }
    }
.yellowButton-height{
    width: 150px;
    height: 52px;
}
</style>