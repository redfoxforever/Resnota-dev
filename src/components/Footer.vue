<template>
    <footer class="footer">

        <div class="footer__top">
            <div class="container">
                <div class="row">

                    <h3 class="footer__links-title">
                        продукция
                    </h3>

                    <ul class="footer__list">
                        <li class="footer__list-item" v-for="(link, idx) in footerLinks" :key="idx">
                            <router-link :to="link.url" class="footer__list-link">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <div class="footer__bottom">
            <div class="container">
                <div class="row">

                    <p class="footer__copyright-text">
                        {{ new Date().getFullYear() }}
                        © ООО «ПД Реснота»
                    </p>

                    <div class="footer__web-links">
                        <a :href="link.url" class="footer__web-link" v-for="(link, idx) in webLinks" :key="idx" :class="`${link.name}`" v-html="link.icon">
                            
                        </a>
                    </div>

                    <p class="footer__copyright-text">
                        разработка и продвижение сайта — REDFOX
                    </p>

                </div>
            </div>
        </div>

    </footer>
</template>

<script>
import data from '@/assets/js/data'

export default {
    name: "Footer",
    data() {
        return {
            footerLinks: data.FooterLinks,
            webLinks: data.FooterWebLinks
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;

    .footer__top {
        width: 100%;
        padding: 45px 0;

        .row {
            flex-direction: column;
            row-gap: 15px;
        }

        .footer__list {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;

            &-link {
                color: var(--main-blue-color);
                text-transform: capitalize;
            }
        }
    }

    .footer__bottom {
        width: 100%;
        padding: 20px 0;
        border-top: 1px solid #B8C1CA;

        .row {
            justify-content: space-between;
            align-items: center;
        }

        .footer__web-links {
            display: flex;
            column-gap: 12px;
            align-items: center;

            .footer__web-link {
                min-width: 36px;
                max-width: 36px;
                width: 100%;
                min-height: 36px;
                max-height: 36px;
                height: 100%;
                border-radius: 50%;
                display: grid;
                place-items: center;
                color: var(--main-white-color);
                font-size: 20px;

                &.facebook {
                    background: #3B5998;
                }

                &.vk {
                    background: #4C6C91;
                }

                &.instagram {
                    background: linear-gradient(216.68deg, #9454D4 13.56%, #E04380 51.46%, #F89B4E 86.33%);
                }
            }
        }

        .footer__copyright-text {
            color: var(--main-blue-color);
            font-weight: 500;
        }
    }
}
</style>