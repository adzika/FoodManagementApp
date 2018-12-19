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
      state.locations = location
    },
    addItem (state, payload) {
      state.locations.find((location) => {
        return location.name === payload.location
      }).items.push({
        name: payload.name,
        quantity: payload.quantity,
        bestBefore: payload.bestBefore
      })
    },
    deleteItem (state, payload) {
      state.locations.find((location) => {
        return location.name === payload.location
      }).items.splice(payload.index, 1)
    },
    updateItem (state, payload) {
      state.locations.find((location) => {
        return location.name === payload.location
      }).items()
    }
  },
  actions: {
    addItem: ({ commit }, payload) => {
      commit('addItem', payload)
    },
    deleteItem: ({ commit }, payload) => {
      commit('deleteItem', payload)
    },
    updateItem: ({ commit }, payload) => {
      commit('updateItem', payload)
    }
  }
  ,
  getters: {
    getItemsFromLocation: (state) => (locationName) => {
      return state.locations.find((location) => {
        return location.name === locationName
      }).items
    }
  }
})
