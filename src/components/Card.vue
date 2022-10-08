<template>
  <div class="product__card">
    <img
      :src="product.imageUrl ? require(`@/assets/${product.imageUrl}`) : 'http://surl.li/cyyhy'"
      alt=""
      class="product__card-img"
    />

    <div class="product__card-desc">
      <h4 class="product__card-name">{{ product.name }}</h4>
      <p class="product__card-ingredient">{{ product.ingredient }}</p>

      <span class="status-name" :class="product.status">{{ product.status }}</span>

      <div class="product__card-price-box">
        <p class="product__card-price">
            <span class="sale-price">
                {{ product.salePrice() ? product.salePrice() : "error" }} 
                &#8381;
            </span>
            <span class="price-num">
                {{ product.price ? product.price : "error" }}
                &#8381; 
            </span>
        </p>

        <p class="product__card-sale-info">
          <span class="discount-per">
            -{{ product.discount}}%
            </span>

          <span class="econom-price">
            экономия
            {{ product.economedPrice() }}
            &#8381;
          </span>
        </p>
      </div>

    </div>

    <div class="product__card-btns">
        <button class="purchase-btn blue-link" @click="$emit('buyClicked')">купить</button>

        <router-link to="/" class="add-to-cart-btn yellow-link">
            в 1 клик
        </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    product: {
      type: Object,
      default: {
        name: "no product",
        ingredient: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, laudantium",
        imageUrl: "",
        status: "xit",
        price: 0,
        salePrice() {
            return 0
        },
        discount: 0,
        economedPrice() {
            return 0
        }
      },
      required: true,
    },
  }
};
</script>

<style lang="scss" scoped>
.product__card {
    max-width: 285px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
    border: 1px solid #eff2f4;
    padding: 10px;
    transition: .4s;
    position: relative;

    &:hover {
        border-color: #CFB08B;
    }

    &-img {
        max-width: 270px;
        width: 100%;
        max-height: 210px;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
        user-select: none;
    }

    &-desc {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 15px;
    }

    &-name {
        font-size: 20px;
        color: var(--main-blue-color);
        text-transform: capitalize;
        font-weight: 700;
    }

    &-ingredient {
        font-size: 15px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-transform: capitalize;
    }

    &-price-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 5px;
    }

    &-price {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-weight: 700;

        span {
            font-size: 20px;
        }

        .sale-price {
            color: var(--main-blue-color);
        }

        .price-num {
            color: #D5AF86;
            text-decoration: line-through;
        }
    }

    &-sale-info {
        max-width: max-content;
        width: 100%;
        display: flex;
        align-items: flex-start;

        & > .discount-per {
            font-size: 13px;
            color: var(--main-white-color);
            background: #D5AF86;
            min-width: 42px;
            min-height: 24px;
            max-width: 42px;
            max-height: 24px;
            height: 100%;
            width: 100%;
            display: grid;
            place-items: center;
        }

        & > .econom-price {
            font-size: 13px;
            color: #717171;
            text-transform: capitalize;
            border: 1px solid #EFF2F4;
            min-width: 122px;
            min-height: 24px;
            max-width: 122px;
            max-height: 24px;
            height: 100%;
            width: 100%;
            display: grid;
            place-items: center;
        }
    }

    &-btns {
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 8px;
    }

    .status-name {
        position: absolute;
        top: 0;
        left: 5%;
        background: #EB7D3F;
        min-width: 42px;
        max-width: max-content;
        width: 100%;
        min-height: 30px;
        max-height: 30px;
        height: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 100%, 0 75%);
        display: flex;
        justify-content: center;
        text-transform: capitalize;
        font-size: 13px;
        font-weight: 600;
        padding-top: 3px;
        color: var(--main-white-color);
        transition: .4s;
        user-select: none;

        &.xit {
            background-color: #77A43E;
        }

        &.new {
            background-color: #53BADA;
        }

        &.sale {
            background-color: #EB7D3F;
        }
    }
}
</style>