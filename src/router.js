import Vue from 'vue'
import Router from 'vue-router'
import Location from './views/Location.vue'
import Recipes from './components/Recipes.vue'
import ShoppingList from './components/ShoppingList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/category/:name',
      name: 'category',
      component: Location
    }
  ]
})
