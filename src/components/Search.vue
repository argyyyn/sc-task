<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const searchTerm = ref('');

const sendSearchRequest = () => {
  store.commit('setSearchTerm', searchTerm.value);
  store.dispatch('fetchDeliveryTypes');
};

const deliveryTypes = store.getters.getDeliveryTypes;

watch(() => store.state.deliveryTypes, (newDeliveryTypes) => {
  deliveryTypes.value = newDeliveryTypes;
});

const popularCities = [
  'Nur - Sultan',
  'Zhana Turmis',
  'Almaty',
  'Karaganda',
  'Kentau',
  'Shymkent',
  'Aitei',
  'Atyrau',
  'Aktau',
  'Pavlodar',
];
</script>
<template>
  <div class="search-container">
    <div class="search">
      <input class="search__input" v-model="searchTerm" placeholder="Enter name of the city" />
      <button class="search__submit" @click="sendSearchRequest">ENTER</button>
    </div>
    <div class="cities">
      <span class="cities__title">Most popular cities</span>
      <ul class="cities__list">
        <li v-for="city in popularCities" :key="city">{{ city }}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="sass">
.search-container
  max-width: 450px

.search
  margin: 64px 0
  border: 1px solid #E9F0EB
  border-radius: 200px
  cursor: pointer
  display: flex
  align-content: center
  justify-content: center
  &__input
    font-size: 20px
    padding: 19px 28px
    border: 0
    border-radius: 200px
    outline: none
    background: transparent
    width: calc(100% - 150px)
    &::placeholder
      color: #D9E4DC
  &__submit
    padding: 19px 40px
    background: linear-gradient(#65B3E4 100%, #78A1BB 0%)
    border-radius: 200px
    color: white
    font-size: 20px
    font-weight: 700
    text-transform: uppercase
    border: 0
    cursor: pointer

.cities
  font-size: 20px
  display: block
  color: #283044
  margin-bottom: 36px
  &__list
    padding: 0
    display: flex
    flex-direction: row
    justify-content: space-between
    flex-wrap: wrap
    margin-bottom: 100px
    li
      color: rgba(40, 48, 68, 0.5)
      border-bottom: 1px solid #E9F0EB
      list-style: none
      width: 40%
      padding: 24px 12px 12px
      cursor: pointer
</style>
