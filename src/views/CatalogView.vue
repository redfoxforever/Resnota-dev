<template>

  <section class="catalog__section">
    <div class="container">
      <div class="row">

        <div class="catalog__desc">
          <h2 class="catalog__desc-title">каталог</h2>

          <Tags :tags="catalogTags" @clickedBtn="filterProducts"/>
        </div>

        <div class="catalog__cards">
          <Card
            v-for="(card, idx) in filteredProducts"
            :key="idx"
            :product="card"
            @buyClicked="selectProduct(idx)"
          />
        </div>

      </div>
    </div>
  </section>

</template>

<script>
import data from "@/assets/js/data";
import Card from "@/components/Card.vue";
import TagsVue from '@/components/Tags.vue';

export default {
  name: "Catalog",
  components: {
    Card,
    Tags: TagsVue
  },
  data() {
    return {
      catalogTags: [
        {
          name: "все",
          active: true,
        },
        {
          name: "балык",
          active: false,
        },
        {
          name: "бекон",
          active: false,
        },
        {
          name: "вырезка",
          active: false,
        },
        {
          name: "говядина",
          active: false,
        },
        {
          name: "голяшка",
          active: false,
        },
        {
          name: "грудинка",
          active: false,
        },
        {
          name: "карбонад",
          active: false,
        },
        {
          name: "корейка",
          active: false,
        },
        {
          name: "мясные хлеба",
          active: false,
        },
        {
          name: "пасторма",
          active: false,
        },
        {
          name: "суджук",
          active: false,
        },
        {
          name: "шея",
          active: false,
        },
      ],
      data,
      filteredData: []
    };
  },
  computed: {
    filteredProducts() {
      return this.filteredData.length ? this.filteredData : this.data.products
    }
  },
  methods: {
    selectProduct(id) {
        let pName = this.data.products[id].name,
        pIngredient = this.data.products[id].ingredient,
        pPrice = this.data.products[id].price,
        pDiscount = this.data.products[id].discount,
        pStatus = this.data.products[id].status,
        pImage = this.data.products[id].imageUrl,
        prices = [];

        const product = {
          name: pName,
          ingredient: pIngredient,
          price: pPrice,
          discount: pDiscount,
          status: pStatus,
          imageUrl: pImage,
          economedPrice() {
            return Math.round((this.discount * this.price) / 100);
          },
          salePrice() {
            return this.price - this.economedPrice();
          },
        };


        if (this.data.selectedProducts.length) {
            this.data.selectedProducts.forEach(item => {
              prices.push(item.price)
            })

            if (!prices.includes(pPrice)) {
                this.data.selectedProducts.push(product);
            }
        } else {
            this.data.selectedProducts.push(product);
        }
    },
    filterProducts(event) {
      this.filteredData = []

      this.data.products.map(product => {
        product.catalog == event.target.innerText ? this.filteredData.push(product) : ''       
      })
    }
  },
};

</script>

<style lang="scss" scoped>

.catalog__section {
  width: 100%;

  .row {
    flex-direction: column;
    row-gap: 35px;
  }

  .catalog__desc {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    
  }

  .catalog__cards {
    max-width: max-content;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
  }
}

</style>