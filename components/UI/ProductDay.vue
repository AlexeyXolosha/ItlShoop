<template>
  <div class="product-day">
    <div class="product-day__time">
      <h3>Товар дня</h3>
      <div class="product-day__content">
        <div class="product-day__time-count">
          <div class="product-day__item">22</div>
        </div>
        <div class="product-day__separate">:</div>
        <div class="product-day__time-count">
          <div class="product-day__item">37</div>
        </div>
        <div class="product-day__separate">:</div>
        <div class="product-day__time-count">
          <div class="product-day__item">52</div>
        </div>
      </div>
    </div>
    <div class="product-day__info">
      <div class="product-day__left">
        <img
          class="product__image"
          src="../../public/samsung.png"
          width="136"
          height="160"
          alt=""
        />
      </div>
      <div class="product-day__right">
        <p>Смартфон Samsung Galaxy S23 256GB Phantom Black</p>
        <div class="product-day__rating">
          <div class="product-day__stars">
            <img
              src="../../public/icons/star.svg"
              alt=""
              width="13"
              height="12"
            />
            <img
              src="../../public/icons/star.svg"
              alt=""
              width="13"
              height="12"
            />
            <img
              src="../../public/icons/star.svg"
              alt=""
              width="13"
              height="12"
            />
            <img
              src="../../public/icons/star.svg"
              alt=""
              width="13"
              height="12"
            />
            <img
              src="../../public/icons/star.svg"
              alt=""
              width="13"
              height="12"
            />
          </div>
          <div class="product-day__countRev">
            <span>17 отзывов</span>
          </div>
        </div>
        <div class="product-day__price shop-prevPrice">
            <span>529 990</span>
          </div>
          <div class="product-day__price shop-currentPrice">
            <p>499 990 ₸</p>
          </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-day {
  background-color: var(--color-white);
  border-radius: var(--border-radius-6px);
  box-shadow: -1px 11px 11px 7px rgba(34, 60, 80, 0.2);
  padding: 31px 32px 28px 40px;

  &__time {
    display: flex;
    column-gap: 70px;
    margin-bottom: 15px;

    h3{
      white-space: nowrap;
        font-size: 24px;
        font-weight: 400;
        margin: 0;
    }
  }


  &__content {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-family: "Circe";
    font-weight: 600;
    line-height: 1.28;
  }

  &__item {
    background-color: var(--color-black-30);
    border-radius: var(--border-radius-6px);
    padding: 6px 8px;
  }

  &__info{
    display: flex;
    align-items: center;
    column-gap: 40px;
  }

  &__right{
    display: flex;
    flex-direction: column;
    p{
        max-width: 159px;
        margin-bottom: 6px;
    }
    span{
      white-space: nowrap;
    }

  }

  &__rating{
    display: flex;
    align-items: center;
    column-gap: 8px;
    margin-bottom: 2px;
  }

  &__stars{
    display: flex;
    align-items: center;
    column-gap: 4px;
  }
}
</style>
