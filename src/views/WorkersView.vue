<template>
    <section class="workers__section">
        <div class="container">
            <div class="row">

                <div class="workers__desc">
                    <h2 class="workers__title">наши сотрудники</h2>

                    <Tags :tags="workersTags" @clickedBtn="filterWorkers"/>
                </div>

                <div class="workers__cards">
                    <div class="worker__card" v-for="(card, idx) in filteredWorkers" :key="idx">
                        <img :src="require(`@/assets/${card.img}`)" alt="" class="worker__card-img">

                        <h4 class="worker__card-name">{{ card.name }}</h4>
                        <p class="worker__card-job">{{ card.job }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    
</template>

<script>
import data from '@/assets/js/data'
import TagsVue from '@/components/Tags.vue'

export default {
    name: "Workers",
    components: {
        Tags: TagsVue
    },
    data() {
        return {
            data,
            workersTags: [
                {
                    name: 'Все',
                    active: true
                },
                {
                    name: 'Руководство',
                    active: false
                },
                {
                    name: 'Коммерческий отдел',
                    active: false
                },
                {
                    name: 'Отдел оценки',
                    active: false
                }
            ],
            filteredData: []
        }
    },
    computed: {
        filteredWorkers() {
            return this.filteredData.length ? this.filteredData : this.data.Workers
        }
    },
    methods: {
        filterWorkers(event) {
            this.filteredData = []

            this.data.Workers.map(person => {
                person.role == event.target.innerText ? this.filteredData.push(person) : ''
            })
        }
    }
}

</script>

<style lang="scss" scoped>
.workers__section {
    width: 100%;

    .row {
        flex-direction: column;
        row-gap: 30px;
    }

    .workers__desc {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    .workers__cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        .worker__card {
            display: flex;
            flex-direction: column;
            row-gap: 15px;
            padding: 8px;

            &-img {
                width: 100%;
                object-fit: cover;
                max-height: 280px;
            }

            &-name {
                font-size: 20px;
                text-transform: capitalize;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }

            &-job {
                font-size: 18px !important;
                text-transform: capitalize;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>