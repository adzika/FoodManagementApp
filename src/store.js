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
  mutations: {},
  actions: {},
  getters: {
    getItemsFromLocation: (state) => (locationName) => {
      return state.locations.find((location) => {
        return location.name === locationName
      }).items;
    }
  }
})
