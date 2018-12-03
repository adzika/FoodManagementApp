<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <router-link class="nav-link" to="/category/fridge" active-class="active">Fridge</router-link>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <router-link class="nav-link" to="/category/freezer" active-class="active">Freezer</router-link>
          <router-link class="nav-link" to="/category/pantry" active-class="active">Pantry</router-link>
          <router-link class="nav-link" to="/category/cleaning-supplies" active-class="active">Cleaning Supplies</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <router-link class="nav-link" to="/category/shopping-list" active-class="active">Shopping List</router-link>
          <router-link class="nav-link" to="/category/recipes" active-class="active">Recipes</router-link>
          <b-nav-item href="#">Log In</b-nav-item>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'Header'
    //I need an if to show logout when user is logged in
  }
</script>

<style scoped>

</style>
