<template>

  <section class="selected__products-section" >
    <div class="container">
      <div class="row">

        <div class="selected__products-cards" v-if="data.selectedProducts.length">
          <Card v-for="(card, idx) in data.selectedProducts" :key="idx" :product="card"/>
        </div>
         
        <h2 class="no-product-text" v-else>no selected products</h2>
        
      </div>
    </div>
  </section>

</template>

<script>
import CardVue from '@/components/Card.vue';
import data from '@/assets/js/data';

export default {
  name: "Basket",
  data() {
    return {
      data
    }
  },
  components: {
    Card: CardVue
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;

  .selected__products-section {
    width: 100%;

    .row {
      flex-direction: column;
      gap: 30px;
    }

    .selected__products-cards {
      max-width: max-content;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      justify-items: start;
    }
  }
}
</style>