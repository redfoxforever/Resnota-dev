<template>
  <Nav/>

  <main class="main">
    <router-view />

    <Contact/>
  </main>

  <Footer/>
  
  <div class="meal-cards">
    <div class="container">
      <div class="row">

        <div class="meal-card" v-for="(meal, idx) in allMeals" :key="idx">
          <img :src="meal.strMealThumb" alt="">
          <p>{{ meal.strMeal }}</p>
          <br><br>
          <p>{{ meal.idMeal }}</p>
          <br><br>
          <p>{{ meal.strInstructions }}</p>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import ContactVue from './components/Contact.vue'
import FooterVue from './components/Footer.vue'
import NavVue from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav: NavVue,
    Contact: ContactVue,
    Footer: FooterVue
  },
  data() {
    return {
      allMeals: []
    }
  },
  created() {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f='
    const apiListKeys = 
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']

    apiListKeys.forEach(key => {
      fetch(`${url}${key}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        data.meals.map(meal => {
          this.allMeals.push(meal)
        })
      })  
    })
  }
}
</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  row-gap: 50px;
}

.meal-cards {
  width: 100%;

  .row {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .meal-card {
    width: 100%;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 0 60px 0 60px;
    }
  }
}

</style>
