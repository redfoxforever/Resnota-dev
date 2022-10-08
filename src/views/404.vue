<template>

  <section class="error__section">
    <div class="container">
      <div class="row">

        <span class="error-num">404</span>

        <span class="error-text">
          Страница не найдена

          <span>
            Мы не смогли найти страницу с таким адресом, попробуйте перейти на
            главную или напишите нам.
          </span>
        </span>

      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "404",
};
</script>

<style lang="scss" scoped>
.error__section {
  width: 100%;

  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 30px;
  }

  .error-num {
    color: var(--main-blue-color);
    text-transform: uppercase;
    font-weight: 700;
    font-size: calc(80px + 220 * (100vw / 1920));
  }

  .error-text {
    max-width: 480px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    font-size: calc(20px + 8 * (100vw / 1920));

    span {
        font-size: 15px;
    }
  }
}

@media (min-width: 1920px) {
    .error-num {
        font-size: 300px !important;
    }

    .error-text {
        font-size: 28px !important;
    }
}

@media (max-width: 320px) {
    .error-num {
        font-size: calc(80px + (220 + 220 * 0.7) * ((100vw - 320px)/ 1920));
    }

    .error-text {
        font-size: calc(20px + (8 + 8 * 0.7) * ((100vw - 320px)/ 1920));
    }
}
</style>