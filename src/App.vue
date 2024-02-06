<script setup>
import Logo from "@/components/icons/Logo.vue";
import CarBig from "@/components/icons/CarBig.vue";
import Search from "@/components/Search.vue"
import DeliveryTypes from "@/components/DeliveryTypes.vue"
import RightsReserved from "@/components/RightsReserved.vue";
import {useStore} from "vuex";
import {computed, watch} from "vue";

const store = useStore();
const deliveryTypes = computed(() => store.getters.getDeliveryTypes);
watch(() => store.state.deliveryTypes, (newDeliveryTypes) => {
  deliveryTypes.value = newDeliveryTypes;
});
</script>

<template>
  <div class="container">
    <logo/>

    <div class="row">
      <div class="col-md-6">
        <h1 class="title">Delivery cost</h1>
        <span class="subtitle">Enter name of the city to count delivery cost</span>
        <Search/>
      </div>
      <div class="col-md-6">
        <div v-if="deliveryTypes.length" class="type-container">
          <DeliveryTypes :data="deliveryTypes"/>
        </div>
        <CarBig v-else/>
      </div>
    </div>
    <RightsReserved/>

  </div>

</template>

<style scoped lang="sass">
.row
  margin-top: 32px

.title
  font-size: 40px
  font-weight: 700

.subtitle
  display: block
  color: rgba(40, 48, 68, 0.5)
  font-size: 20px

.type-container
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  width: 100%
  height: 100%
  position: relative
  @media (max-width: 1200px)
    &::after
      width: calc(100% + 30px)
      height: calc(100% + 30px)
      content: ''
      background-color: #F7F7F7
      position: absolute
      top: -15px
      left: -15px
</style>
