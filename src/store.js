import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locations: [
      {
        name: 'fridge',
        items: [{
          name: 'dildo',
          quantity: 1,
          bestBefore: '16-12-2018'
        }]
      },
      {
        name: 'freezer',
        items: []
      },
      {
        name: 'pantry',
        items: []
      },
      {
        name: 'cleaning-supplies',
        items: []
      }
    ],
    shoppingList: []
  },
  mutations: {
    setLocations (state, location) {
      state.locations = location;
    },
    addItem (state, {location, item}) {
      //Check if the item is already added in the location
      //If it's added, keep the name, change the quantity, best before
      //If it's not, push it to the location
    }
  },
  actions: {},
  getters: {
    getItemsFromLocation: (state) => (locationName) => {
      return state.locations.find((location) => {
        return location.name === locationName
      }).items;
    }
  }
})
