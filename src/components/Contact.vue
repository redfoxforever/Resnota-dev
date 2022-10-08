<template>
    <section class="contact__section" id="contact">
        <div class="container">
            <div class="row">

                <div class="contact__desc">
                    <h3 class="contact__desc-title light-title">есть вопросы?</h3>
                    <p class="contact__desc-text light-text">оставьте свои данные и наш менеджер свяжется с вами в ближайшее время.</p>
                </div>

                <img :src="logoUrl" alt="" class="contact-logo">

                <form action="" class="contact__form" @submit.prevent>
                    <div class="inputs-box">
                        <input type="text" class="inp-name" placeholder="Ваше имя" required>
                        <input type="email" class="inp-email" placeholder="E-mail" required>
                    </div>

                    <span class="vote-for">
                        <input type="checkbox" id="vote1" required>
                        <label for="vote1">
                            даю согласие на рассылку рекламных материалов, акций и скидок
                        </label>
                    </span>

                    <span class="vote-for">
                        <input type="checkbox" id="vote2" required>
                        <label for="vote2">
                            даю согласие на обработку моих персональных данных
                        </label>
                    </span>

                    <button class="submit-btn yellow-link">отправить</button>
                </form>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            logoUrl: require('@/assets/img/logo.svg'),
        }
    },
    mounted() {
        let img = document.querySelector('.contact-logo');

        if (window.innerWidth <= 1110) {
            img.classList.add('hide-img')
        } else {
            img.classList.remove('hide-img')
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1110) {
                img.classList.add('hide-img')
            } else {
                img.classList.remove('hide-img')
            }
        })
    }
}
</script>

<style lang="scss" scoped>

.contact__section {
    width: 100%;
    background: radial-gradient(15.94% 134.15% at 43.26% 111.07%, #3D568A 0%, #0E2149 100%);
    padding: 35px 0;

    .row {
        justify-content: space-between;
        align-items: center;
        gap: 25px;
        flex-wrap: unset;
    }

    .contact__desc {
        max-width: 315px;
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    .contact-logo {
        user-select: none;
        max-width: 180px;
        width: 100%;
        object-fit: cover;

        &.hide-img {
            display: none;
        }
    }

    .contact__form {
        max-width: 570px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;

        .inputs-box {
            width: 100%;
            display: flex;
            gap: 10px;

            input {
                max-width: 280px;
                width: 100%;
                padding: 10px;
                border: none;
                background: var(--main-white-color);
                outline: none;
            }
        }

        .vote-for {
            display: flex;
            column-gap: 12px;
            align-items: center;

            label {
                color: var(--main-white-color);
                cursor: pointer;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            input {
                cursor: pointer;
                outline: none;
                border: none;
                min-width: 20px;
                min-height: 20px;
            }
        }
    }

}

@media (max-width: 992px) {
    .contact__section {
        .row {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }
    }
}

@media (max-width: 576px) {
    .inputs-box {
        flex-direction: column;
    }
}

</style>