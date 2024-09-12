<template>
  <section class="section container">
    <div class="section__body">
      <div class="company">
        <div class="company__body">
          <div class="company__info">
            <h2 class="company__title">Интернет-магазин в Алматы</h2>
            <p>itl.b2c — магазин умной техники и электроники для вашего дома.</p>
            <p>Здесь вы найдете товары под свои предпочтения: от видеотехники и роботов пылесовов. Работаем с проверенными производителями с 2005 года. Доставляем товары точно в срок.</p>
            <p>Покупка товара проста только на первый взгляд. Нужно думать о том, как оформить доставку, кто соберет шкаф или установит кондиционер. В нашем магазине эти услуги уже продуманы. </p>
            <p>Думайте только о подборе товаров в каталоге. Для этого предлагаем комплексный подход — наша команда выполнит все задачи!</p>
            <UIYellowButton>Подробнее</UIYellowButton>
          </div>
          <img src="../public/company_photo.png" alt="" width="808" height="400">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .company{
    border: 1px solid var(--color-blue-transparent);
    border-radius: var(--border-radius-6px);
    padding: 40px;

    &__body{
      display: flex;
      justify-content: space-between;
      column-gap: 40px;
    }

    &__info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;

      p{
        margin: 0;
      }
    }
  }
</style>