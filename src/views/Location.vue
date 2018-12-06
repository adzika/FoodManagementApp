<template>
  <div id="list-header">
    <div>

      <!--Item creation form-->
      <b-form inline>

        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="itemName" placeholder="Item"/>

        <input type="number" id="quantity" value="1" min="0">

        <label>
          <input type="text" id="datepicker" placeholder="YY-MM-DD">
          <svg class="i-calendar" viewBox="0 0 32 32" width="24" height="24" fill="none"
               stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M2 6 L2 30 30 30 30 6 Z M2 15 L30 15 M7 3 L7 9 M13 3 L13 9 M19 3 L19 9 M25 3 L25 9"></path>
          </svg>
        </label>

        <button type="button" class="btn btn-outline-primary" id="saveButton" @click="addItem">Add</button>

      </b-form>
    </div>

    <div id="itemsShown">
      <b-table striped hover :fields="fields" :items="items">
        <template slot="restock" slot-scope="data">
          <button>Restock</button>
        </template>
        <template slot="delete" slot-scope="data">
          <button>Delete</button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        category: 'fridge',
        fields: [
          'name',
          'quantity',
          'restock',
          'delete',
          'bestBefore'
        ]
      }
    },
    computed: {
      items () {
        return this.$store.getters.getItemsFromLocation(this.category)
      },
    },
    watch: {
      '$route' (to, from) {
        console.log(to)
        this.category = to.params.name
      }
    }
  }

</script>

<style>

</style>
