<template>
        <div class="banner__card">
            <ul class="banner__card-list">
                <li class="banner__card-item">
                    <a href="" class="banner__card-link">
                        <img src="../../public/icons/user.svg" alt="" width="26" height="26">
                        <span>Авторизуйтесь, чтобы 
                            применить бонусные тенге</span>
                    </a>
                </li>
                <li class="banner__card-item">
                    <a href="" class="banner__card-link">
                        <img src="../../public/icons/shield.svg" alt="" width="26" height="26">
                        <span>Страхование техники от утраты 
                            и повреждений</span>
                    </a>
                </li>
                <li class="banner__card-item">
                    <a href="" class="banner__card-link">
                        <img src="../../public/icons/export.svg" alt="" width="26" height="26">
                        <span>Экспресс-доставка от 2 часов 
                            по Алматы</span>
                    </a>
                </li>
                <li class="banner__card-item">
                    <a href="" class="banner__card-link">
                        <img src="../../public/icons/card.svg" alt="" width="26" height="26">
                        <span>Оформляй в рассрочку и кредит 
                            не выходя из дома</span>
                    </a>
                </li>
                <li class="banner__card-item">
                    <a href="" class="banner__card-link">
                        <img src="../../public/icons/reloaded.svg" alt="" width="26" height="26">
                        <span>Обменяйте свой гаджет по 
                            программе Trade-in</span>
                    </a>
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
            column-gap: 16px;
            color: #333;
            text-decoration: none;
            background-color: var(--color-white);
            border-radius: var(--border-radius-6px);
            padding: 20px 28px;
        }
    }
</style>