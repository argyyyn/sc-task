<script setup>
import Car from "@/components/icons/Car.vue";
import Map from "@/components/icons/Map.vue";
import Letter from "@/components/icons/Letter.vue";
import {useStore} from "vuex";
import Selected from "@/components/Selected.vue";
import {computed} from "vue";

const store = useStore()

const props = defineProps(['data']);

const isSelected = (delivery) => {
  return store.getters.getSelectedItem && store.getters.getSelectedItem.type === delivery.type;
};

const selectDeliveryType = (delivery, available) => {
  if (available) store.commit('setSelectedItem', delivery);
};
</script>

<template>
  <div class="delivery-types">
    <div v-for="delivery in data" :key="delivery.type + delivery.city"
         :class="['delivery-type', {'opacity-5': delivery.available != true}]"
         @click="selectDeliveryType(delivery, delivery.available)">
      <div class="delivery-type__content">
        <span class="delivery-type__content__title">{{delivery.type}}</span>
        <span class="delivery-type__content__price">{{delivery.price}}$</span>
      </div>
      <div class="delivery-type__icon">
        <Map v-if="delivery.type === 'pickup'"/>
        <Letter v-else-if="delivery.type === 'post'"/>
        <Car v-else/>
      </div>
      <Selected v-if="isSelected(delivery)"/>
    </div>

  </div>
</template>

<style lang="sass" scoped>
.delivery-type
  margin: 15px 0
  border-radius: 18px
  background-color: white
  padding: 24px 56px 24px 36px
  align-items: center
  justify-content: space-between
  width: 420px
  height: 170px
  display: flex
  flex-direction: row
  cursor: pointer
  position: relative
  z-index: 11
  @media (max-width: 1200px)
    width: 100%
    height: 170px
    padding: 20px
  &.opacity-5
    opacity: .5
  &__content
    display: flex
    align-items: flex-start
    flex-direction: column
    justify-content: space-between
    height: 100%
    &__title
      font-size: 30px
      font-weight: 700
      color: #283044
      @media (max-width: 1200px)
        font-size: 24px
    &__price
      font-size: 40px
      font-weight: 700
      color: #78A1BB

.delivery-types
  @media (max-width: 1200px)
    width: 100%
</style>