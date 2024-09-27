<template>
    <a class="skeleton-product">
      <div class="skeleton-product__info">
        <div class="card-product__rating">
          <div class="skeleton-product__image"></div>
          <div class="skeleton-product__rating"></div>
        </div>
        <div class="skeleton-product__name"></div>
        <div class="skeleton-product__shop-count"></div>
        <div class="skeleton-product__shop-prevPrice"></div>
        <div class="skeleton-product__shop-currentPrice"></div>
        <div class="skeleton-product__button"></div>
      </div>
    </a>
  </template>
  
  <style lang="scss">
  @keyframes pulse {
    0% {
      background-color: #e0e0e0;
    }
    50% {
      background-color: #f0f0f0;
    }
    100% {
      background-color: #e0e0e0;
    }
  }
  
  .skeleton-product {
    max-width: 264px;
    width: 100%;
    border: 1px solid #e0e0e0;
    padding: 32px 32px 36px 32px;
    border-radius: var(--border-radius-6px);
  
    &__info {
      display: flex;
      flex-direction: column;
      row-gap: 12px;
    }
  
    &__image,
    &__rating,
    &__name,
    &__shop-count,
    &__shop-prevPrice,
    &__shop-currentPrice,
    &__button {
      animation: pulse 1.5s infinite ease-in-out;
    }
  
    &__image {
      background-color: #e0e0e0;
      border-radius: var(--border-radius-6px);
      width: 200px;
      height: 188px;
      margin-bottom: 8px;
    }
  
    &__rating {
      background-color: #e0e0e0;
      border-radius: var(--border-radius-6px);
      width: 50px;
      height: 20px;
    }
  
    &__name {
      background-color: #e0e0e0;
      border-radius: var(--border-radius-6px);
      width: 150px;
      height: 20px;
    }
  
    &__shop-count {
      background-color: #e0e0e0;
      border-radius: var(--border-radius-6px);
      width: 150px;
      height: 20px;
    }
  
    &__shop-prevPrice {
      background-color: #e0e0e0;
      border-radius: var(--border-radius-6px);
      width: 100px;
      height: 20px;
    }
  
    &__shop-currentPrice {
      background-color: #e0e0e0;
      border-radius: var(--border-radius-6px);
      width: 100px;
      height: 20px;
    }
  
    &__button {
      width: 125px;
      height: 44px;
      background-color: #e0e0e0;
      border-radius: var(--border-radius-6px);
    }
  }
  </style>
  