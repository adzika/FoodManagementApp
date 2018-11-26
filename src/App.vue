<template>
  <div class="container">
        <app-header></app-header>
        <router-view></router-view>
      </div>
</template>

<script>
  import Header from './components/Header'
  import Location from './views/Location'
  import Recipes from './components/Recipes'
  import ShoppingList from './components/ShoppingList'
  import SignUp from './components/SignUp'

  export default {
    components: {
      'app-header': Header,
      'app-location': Location,
      'app-recipes': Recipes,
      'app-shopping-list': ShoppingList,
      'app-sign-up': SignUp
    }
  }
</script>

<style lang="scss">

</style>
