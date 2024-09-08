<template>
  <section class="section container">
    <div class="card-brand">
      <div class="card-brand__body">
        <ul class="card-brand__list">
          <li class="card-brand__item">
              <img src="../../public/brand/dyson.svg" alt="" class="card-brand__image">
          </li>
           <li class="card-brand__item">
              <img src="../../public/brand/samsung.svg" alt="" class="card-brand__image">
          </li>
           <li class="card-brand__item">
              <img src="../../public/brand/apple.svg" alt="" class="card-brand__image">
          </li>
           <li class="card-brand__item">
              <img src="../../public/brand/Robot.svg" alt="" class="card-brand__image">
          </li>
           <li class="card-brand__item">
              <img src="../../public/brand/sony.svg" alt="" class="card-brand__image">
          </li>
           <li class="card-brand__item">
              <img src="../../public/brand/logitech.svg" alt="" class="card-brand__image">
          </li>
           <li class="card-brand__item">
              <img src="../../public/brand/tefal.svg" alt="" class="card-brand__image">
          </li>
           <li class="card-brand__item">
              <img src="../../public/brand/asus.svg" alt="" class="card-brand__image">
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .card-brand{


    &__list{
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 24px;
    }

    &__item{
      width: calc(100% / 8 - 24px);
      background-color: var(--color-blue-transparent-card);
    }

    &__image{
      aspect-ratio: 16/10;
    }



  }
</style>