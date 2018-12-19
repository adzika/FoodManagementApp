<template>
  <div id="list-header">
    <div>

      <!--Item creation form-->
      <b-form inline>

        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="itemName" v-model="item.name" placeholder="Item"/>

        <input
          type="number"
          id="quantity"
          value="1"
          min="0"
          v-model="item.quantity">

        <datepicker v-model="item.bestBefore" :config="options"></datepicker>

        <button type="button" class="btn btn-outline-primary" id="saveButton" @click="addItem">Add</button>

      </b-form>
    </div>

    <div id="itemsShown">
      <b-table striped hover :fields="fields" :items="items">

        <template slot="restock" slot-scope="data">
          <button>Restock</button>
        </template>

        <template slot="quantity" slot-scope="data">
          {{ data.item.quantity }}
          <button>Plus</button>
          <button>i Mynus</button>
        </template>

        <template slot="delete" slot-scope="data">
          <button @click="deleteItem(data.index)">Delete</button>
        </template>

        <template slot="bestBefore" slot-scope="data">
          {{ data.item.bestBefore }}
            <datepicker>
              <svg class="i-calendar" viewBox="0 0 32 32" width="24" height="24" fill="none"
                             stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M2 6 L2 30 30 30 30 6 Z M2 15 L30 15 M7 3 L7 9 M13 3 L13 9 M19 3 L19 9 M25 3 L25 9"></path>
            </svg>
            </datepicker>
        </template>

      </b-table>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';

  export default {
    data () {
      return {
        item: {
          name: '',
          quantity: 1,
          bestBefore: "",
        },
        options: {
          format: 'DD/MM/YYYY',
          useCurrent: false,
        },
        category: 'fridge',
        fields: [
          'name',
          'quantity',
          'restock',
          'update',
          'delete',
          'bestBefore'
        ]
      }
    },
    methods: {
      addItem() {
        this.$store.dispatch('addItem', {
          location: this.category,
          name: this.item.name,
          quantity: this.item.quantity,
          bestBefore: this.item.bestBefore
        });
      },
      deleteItem(index) {
        this.$store.dispatch('deleteItem', {
          index,
          location: this.category
        });
      },
      updateItem() {
        this.$store.dispatch('updateItem'), {
          location: this.category,
          name: this.item.name,
          quantity: this.item.quantity,
          bestBefore: this.item.bestBefore
        }
      }
    },
    components: {
      Datepicker
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
