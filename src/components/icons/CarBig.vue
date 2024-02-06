<script setup>
import BigCar from '@/assets/big-car.png'
</script>
<template>
  <div class="img-container">
    <img :src="BigCar" alt="delivery card">
  </div>
</template>

<style lang="sass" scoped>
.img-container
  display: flex
  align-items: center
  justify-content: center
  height: 100%
  width: 100%
  img
    max-width: 100%
</style>