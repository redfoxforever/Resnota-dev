<template>

  <section class="certificates__section">
    <div class="container">
      <div class="row">
        <h2 class="certificate__title">отзывы</h2>

        <div class="certificate__cards">
          <div
            class="certificate__card"
            v-for="(card, idx) in certificateCards"
            :key="idx"
          >
            <img
              :src="require(`@/assets/${card.img}`)"
              alt=""
              class="certificate__card-img"
            />
            <p class="certificate__card-text">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import data from "@/assets/js/data";

export default {
  name: "Reviews",
  data() {
    return {
      certificateCards: data.Certificates,
    };
  },
};
</script>

<style lang="scss" scoped>
.certificates__section {
  width: 100%;

  .row {
    flex-direction: column;
    row-gap: 20px;
  }

  .certificate__cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    column-gap: 20px;
    pointer-events: none;
    user-select: none;

    .certificate__card {
      max-width: 350px;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 12px 10px 15px;
      row-gap: 25px;
      border: 1px solid #eff2f4;

      img {
        width: 100%;
        object-fit: cover;
      }

      &-text {
        max-width: 230px;
      }
    }
  }
}

@media (max-width: 1024px) {
  .certificate__cards {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (max-width: 768px) {
  .certificate__cards {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 480px) {
  .certificate__cards {
    grid-template-columns: repeat(1, 1fr) !important;
    row-gap: 20px;
  }
}
</style>