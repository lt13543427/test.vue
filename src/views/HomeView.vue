<template>
  <div class="bg-gray-100 min-h-screen py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center bg-white rounded-lg shadow-md px-4 py-2 mb-4 m-auto">
        <p class="font-semibold">幣別</p>
        <p class="font-semibold">價格</p>
        <p class="font-semibold">漲跌</p>
      </div>
      <CoinCart />
    </div>
  </div>
</template>
<script setup>
import CoinCart from '@/components/CoinCart.vue'
</script>
<style></style>