<template>
  <div class="watch">
    <div class="watch__body">
      <div class="watch__inner">
        <img src="../../public/iph.png" alt="" class="watch__image" width="128" height="120">
        <div class="watch__info">
          <div class="watch__name">
            <p>Смартфон Apple iPhone 14 Pro Max</p>
          </div>
          <div class="watch__prevPrice shop-prevPrice">
            <span>529 990</span>
          </div>
          <div class="watch__currentPrice">
            <h3>499 990 ₸</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.watch{
  
  &__body{
    border: 1px solid var(--color-blue-transparent-alt-2);
    padding: 32px;
  }

  &__inner{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 20px;
  }

  &__info{
    display: flex;
    flex-direction: column;
    align-items: start;

    width: 128px;
  }

  &__currentPrice{
    h3{
      font-weight: 400;
      margin: 0;
    }
  }
}
</style>