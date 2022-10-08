<template>
    <nav class="nav">
        <div class="row">

            <div class="nav__top">
                <div class="container">
                    <div class="row">

                        <router-link to="/" class="logo">
                            <img :src="logoUrl" alt="" class="logo-img">
                            <span>реснота</span>
                        </router-link>

                        <div class="nav__top-basket">
                            <router-link to="/basket" class="basket-btn">
                                <i class="far fa-shopping-basket"></i>
                                <span class="prods-count" v-show="windowSize <= 480">
                                    {{ data.selectedProducts.length }}
                                </span>
                            </router-link>

                            <div class="products-info" v-show="windowSize > 480">
                                <p class="products-count">товаров : <span>{{ data.selectedProducts.length }}</span></p>
                                <p class="products-price" :class="{'over100': data.selectedProdPrice() >= 1000}">{{ data.selectedProdPrice() }} &#8381;</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="nav__bottom">
                <div class="container">
                    <div class="row">

                        <button class="nav-open-btn" @click="navOpened = !navOpened">
                            <span class="nav-btn-line"></span>
                            <span class="nav-btn-line"></span>
                            <span class="nav-btn-line"></span>
                        </button>

                        <div class="nav__collapse" :class="{'nav-opened': windowSize <= 768 ? navOpened: false}" @click="windowSize <= 768 ? navOpened = false : ''">
                            <ul class="nav__list" @click.stop>
                                <li class="nav__list-item" v-for="(link, idx) in navLinks" :key="idx">
                                    <router-link :to="link.url" class="nav__list-link" >
                                        {{ link.name }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>

                        <div class="search__box">
                            <input type="text" v-model="searchValue" class="search__inp" placeholder="Поиск по сайту">
                            <button class="search-btn"><i class="far fa-search"></i></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
import data from '@/assets/js/data.js'

export default {
    name: "Nav",
    data() {
        return {
            data,
            navLinks: data.navlinks,
            catalogLinks: data.catalogLinks,
            logoUrl: require('@/assets/img/logo.svg'),
            searchValue: '',
            navOpened: false,
            windowSize: window.innerWidth,
        }
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.windowSize = window.innerWidth            
        })
    }
}
</script>

<style lang="scss" scoped>

.nav {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 20222;

    &__top {
        width: 100%;
        background: var(--main-white-color);
        padding: 20px 0;

        .row {
            justify-content: space-between;
            align-items: center;
            gap: 10px;
        }

        .logo {
            display: flex;
            column-gap: 14px;
            align-items: center;
            user-select: none;

            img {
                min-width: 53px;
                max-width: 53px;
                width: 100%;    
                min-height: 53px;
                max-height: 53px;
                height: 100%;    
                object-fit: cover;
            }

            span {
                font-size: 30px;
                color: var(--main-blue-color);
                text-transform: uppercase;
                font-weight: 900;
                letter-spacing: 6px;
            }
            
        }

        &-basket {
            display: flex;
            column-gap: 14px;
            align-items: center;

            .products-info {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                row-gap: 2px;

                .products-count {
                    color: var(--more-text-color);
                    text-transform: capitalize;

                    span {
                        font-size: 17px;
                        color: var(--main-blue-color);
                        font-weight: 600;
                    }
                }

                .products-price {
                    color: var(--main-blue-color);
                    font-weight: 800;
                    
                    &::first-letter {
                        margin-right: 2px;
                    }
                }
            }

            .basket-btn {
                min-width: 45px;
                max-width: 45px;
                width: 100%;
                min-height: 45px;
                max-height: 45px;
                height: 100%;
                border-radius: 50%;
                display: grid;
                place-items: center;
                font-size: 20px;
                color: var(--main-blue-color);
                background: #EFF2F4;
            }
        }
    }

    &__bottom {
        width: 100%;
        background: var(--main-blue-color);
        
        .container {
            padding-right: 0;
        }

        .row {
            justify-content: space-between;
            align-items: center;
            flex-wrap: unset;
            gap: 30px;
        }

        .nav-open-btn {
            display: none;
        }

        .nav__collapse {
            max-width: 615px;
            width: 100%;

            .nav__list {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;

                &-link {
                    font-size: 16px;
                    color: var(--main-white-color);
                    text-transform: uppercase;
                    font-weight: 600;
                    transition: .4s;

                    &:hover {
                        color: var(--main-yellow-color);
                    }
                }
            }
        }

        .search__box {
            max-width: 350px;
            width: 100%;
            min-height: 100%;
            background: #253B6A;
            display: flex;

            .search__inp {
                width: 100%;
                min-height: 50px;
                background: #253B6A;
                outline: none;
                border: none;
                padding: 0 10px;
                color: var(--main-white-color);
            }

            button {
                color: var(--main-white-color);
                max-width: 50px;
                min-width: 50px;
                width: 100%;
                max-height: 50px;
                min-height: 50px;
                height: 100%;
                background: #253B6A;
                border: none;
                cursor: pointer;
                font-size: 20px;
            }
        }
    }
}

@media (max-width: 1024px) {
    .search__box {
        max-width: 300px !important;
    }
}

@media (max-width: 992px) {
    .nav__collapse {
        max-width: max-content !important;
    }

    .search__box {
        max-width: 200px !important;
    }
}

@media (max-width: 768px) {

    .nav-open-btn {
        min-width: 30px;
        max-width: 30px;
        display: flex !important;
        flex-direction: column;
        align-items: flex-start;
        row-gap: 4px;
        background: transparent;
        border: 0;

        & > span {
            width: 100%;
            height: 4px;
            background: var(--main-white-color);
        }

    }

    .nav__collapse {
        position: absolute;
        top: 100%;
        left: 0;
        max-width: 100% !important;
        height: 100vh;
        background: var(--main-blue-color);
        padding: 35px 15px;
        z-index: -1;
        transition: .5s;
        overflow-y: auto;
        translate: 0px -120%;

        .nav__list {
            max-width: max-content;
            flex-direction: column;
            align-items: flex-start !important;
            row-gap: 25px !important;
        }

        &.nav-opened {
            translate: 0 0;
        }
    }
}

@media (max-width: 480px) {

    .basket-btn {
        position: relative;

        .prods-count {
            position: absolute;
            top: -10px;
            right: -5px;
            min-width: 25px;
            max-width: 25px;
            width: 100%;
            min-height: 25px;
            max-height: 25px;
            height: 100%;
            background: var(--main-yellow-color);
            border-radius: 50%;
            font-size: 15px;
            display: grid;
            place-items: center;
            color: var(--main-white-color);
        }
    }
}

@media (max-width: 375px) {
    .nav__top {

        .row {
            gap: 0 !important;
            flex-wrap: unset;
        }
    }

    .logo {
        column-gap: 10px !important;

        span {
            letter-spacing: 3px !important;
            font-size: 26px !important;
        }
    }
}

</style>