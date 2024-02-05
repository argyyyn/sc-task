import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    searchTerm: '',
    deliveryTypes: [],
    selectedItem: null
  },
  mutations: {
    setSearchTerm(state, term) {
      state.searchTerm = term;
    },
    setDeliveryTypes(state, types) {
      state.deliveryTypes = types;
    },
    setSelectedItem(state, item) {
      state.selectedItem = item;
    }
  },
  actions: {
    async fetchDeliveryTypes({ commit, state }) {
      try {
        const lowercaseSearchTerm = state.searchTerm.toLowerCase();
        const response = await axios.get(`https://frontend-test.dev.mechta.kz/delivery/check?search=${lowercaseSearchTerm}`);
        commit('setDeliveryTypes', response.data);
        commit('setSelectedItem', null);
      } catch (error) {
        console.error('Error fetching delivery types:', error);
      }
    },
  },
  getters: {
    getDeliveryTypes: state => state.deliveryTypes,
    getSelectedItem: state => state.selectedItem
  },
});
