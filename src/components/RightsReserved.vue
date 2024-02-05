<script setup>
import Payment from '@/components/icons/Payment.vue'
</script>

<template>
  <div class="footer">
    <span>All rights reserved <br>Fast service 2021</span>
    <Payment/>
  </div>
</template>

<style lang="sass" scoped>
.footer
  max-width: 450px
  display: flex
  align-items: center
  justify-content: space-between
  padding: 24px 0
  span
    font-size: 13px
    color: rgba(40, 48, 68, 0.5)

</style>