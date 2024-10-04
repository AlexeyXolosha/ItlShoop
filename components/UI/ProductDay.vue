<script setup>
import { ref, onMounted } from 'vue';

const today = new Date('11 30 2024 23:00:00');

const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);

const timeCount = () => {
  const now = new Date();
  const leftUntil = today - now;

  hours.value = Math.floor(leftUntil / 1000 / 60 / 60);
  minutes.value = Math.floor(leftUntil / 1000 / 60) % 60;
  seconds.value = Math.floor(leftUntil / 1000) % 60;
};

onMounted(() => {
  timeCount();
  setInterval(timeCount, 1000);
});
</script>

<template>
  <div class="product-day">
    <div class="product-day__time">
      <h3>Товар дня</h3>
      <div class="product-day__content">
        <div class="product-day__time-count">
          <div class="product-day__item">{{ hours < 10 ? '0' + hours : hours }}</div>
        </div>
        <div class="product-day__separate">:</div>
        <div class="product-day__time-count">
          <div class="product-day__item">{{ minutes < 10 ? '0' + minutes : minutes }}</div>
        </div>
        <div class="product-day__separate">:</div>
        <div class="product-day__time-count">
          <div class="product-day__item">{{ seconds < 10 ? '0' + seconds : seconds }}</div>
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
