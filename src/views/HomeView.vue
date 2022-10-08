<template>

  <header class="header">
    
    <swiper
      :grabCursor="true"
      :modules="modules"
      class="header-swiper"
      navigation
      :pagination="{ clickable: true }"
      :loop="true"
      :speed="1000"
      :spaceBetween="10"
    >
      <swiper-slide v-for="(slide, idx) in sliders" :key="idx" class="header-slider-slide">
        <div class="container">
          <div class="row">
            <h3 class="slide-title light-title">{{ slide.title }}</h3>
            <p class="slide-text light-text">{{ slide.text }}</p>

            <router-link to="/catalog" class="buy-link blue-link">купить</router-link>
          </div>
        </div>

        <span class="blue-gradient"></span>
        <img :src="require(`@/assets/${slide.img}`)" alt="" class="slide-img">
      </swiper-slide>

    </swiper>

  </header>
  
  <section class="catalog__cards-section">
    <div class="container">
      <div class="row">
        <router-link
          to="/catalog"
          class="catalog__card"
          v-for="(card, idx) in catalogCards"
          :key="idx"
          :class="`bg-gradient-${idx + 1}`"
        >
          <div class="catalog__card-desc">
            <h4 class="catalog__card-title">{{ card.title }}</h4>
            <p class="catalog__card-text" v-show="windowSize >= 480">
              {{ card.text }}
            </p>
          </div>

          <img
            :src="require(`@/assets/${card.img}`)"
            alt=""
            class="catalog__card-img"
          />
        </router-link>
      </div>
    </div>
  </section>
  
</template>

<script>
import data from "@/assets/js/data";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from "swiper";


import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      catalogCards: data.productCatalogCards,
      windowSize: window.innerWidth,
      modules: [Navigation, Pagination],
      sliders: [
        {
          img: 'img/home/header/slider/slider-1.png',
          title: 'истина в качестве',
          text: 'компания «реснота» производит более 100 видов продуктов питания: колбасные и мясные изделия,хлебная и молочная продукция'
        },
        {
          img: 'img/home/header/slider/slider-1.png',
          title: 'истина в качестве',
          text: 'компания «реснота» производит более 100 видов продуктов питания: колбасные и мясные изделия,хлебная и молочная продукция'
        },
        {
          img: 'img/home/header/slider/slider-1.png',
          title: 'истина в качестве',
          text: 'компания «реснота» производит более 100 видов продуктов питания: колбасные и мясные изделия,хлебная и молочная продукция'
        },
        {
          img: 'img/home/header/slider/slider-1.png',
          title: 'истина в качестве',
          text: 'компания «реснота» производит более 100 видов продуктов питания: колбасные и мясные изделия,хлебная и молочная продукция'
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowSize = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>

.header-slider-slide {
  position: relative;

  .row {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 35px;
    padding: 135px 0;
  }

  .slide-title {
    font-size: calc(28px + 24 * (100vw / 1920)) !important;
  }

  .slide-text {
    max-width: 355px;
    width: 100%;
    font-size: calc(15px + 3 * (100vw / 1920)) !important;
  }

  .blue-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90.36deg, rgba(11, 14, 28, 0.85) 18.46%, rgba(13, 24, 40, 0) 58.9%);
    z-index: -1;
  }

  .slide-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    object-fit: cover;    
  }

}

.catalog__cards-section {
  width: 100%;

  .row {
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  .catalog__card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-left: 25px;
    overflow: hidden;

    &-desc {
      max-width: 35%;
      width: 100%;
      display: flex;
      flex-direction: column;
      row-gap: 8px;
    }

    &-title {
      font-size: calc(20px + 6 * (100vw / 1920));
      color: var(--main-white-color);
      word-break: break-all;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    &-text {
      color: var(--main-white-color);
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-transform: capitalize;
    }

    &-img {
      max-width: 50%;
      object-fit: cover;
      max-height: 260px;
      height: 100%;
      object-position: left;
    }

    &.bg-gradient-1 {
      background: radial-gradient(
        97.05% 95.85% at 94.3% 92.41%,
        #f7c669 0%,
        #c5624c 100%
      );
    }

    &.bg-gradient-2 {
      background: radial-gradient(
        97.05% 95.85% at 94.3% 92.41%,
        #ffe486 0%,
        #959020 100%
      );
    }

    &.bg-gradient-3 {
      background: radial-gradient(
        97.05% 95.85% at 94.3% 92.41%,
        #a5c9af 0%,
        #578d4e 100%
      );
    }

    &.bg-gradient-4 {
      background: radial-gradient(
        97.05% 95.85% at 94.3% 92.41%,
        #f3df77 0%,
        #fca727 100%
      );
    }

    &.bg-gradient-5 {
      background: radial-gradient(
        97.05% 95.85% at 94.3% 92.41%,
        #7bcac0 0%,
        #39817c 100%
      );
    }

    &.bg-gradient-6 {
      background: radial-gradient(
        97.05% 95.85% at 94.3% 92.41%,
        #9dbdcf 0%,
        #374b69 100%
      );
    }

    &.bg-gradient-7 {
      background: radial-gradient(
        97.05% 117.95% at 94.3% 92.41%,
        #ffebb7 0%,
        #8c3f6d 100%
      );
    }

    &.bg-gradient-8 {
      background: radial-gradient(
        97.05% 95.85% at 94.3% 92.41%,
        #ffe483 0%,
        #f47933 100%
      );
    }
  }
}

@media (min-width: 1920px) {
  .catalog__card {
    &-title {
      font-size: 26px !important;
    }
  }
}

@media (max-width: 1024px) {
  .catalog__card {
    &-img {
      max-height: 215px !important;
    }
  }
}

@media (max-width: 768px) {
  .catalog__cards-section {
    .row {
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }

  .catalog__card {
    max-width: 450px;

    &-img {
      max-height: 180px !important;
      min-height: 215px !important;
    }
  }
}

@media (max-width: 320px) {
  .catalog__card {
    &-title {
      font-size: calc(20px + (6 + 6 * 0.7) * ((100vw - 320px) / 1920));
    }
  }
}

</style>