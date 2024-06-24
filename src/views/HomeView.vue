<template>
  <div class="bg-zinc-800 min-h-screen py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="w-full flex justify-between items-center bg-zinc-600 rounded-lg shadow-md px-4 py-2 mb-4 text-center">
        <p class="font-semibold w-1/3 text-white">幣別</p>
        <p class="font-semibold w-1/3 text-white">價格</p>
        <p class="font-semibold w-1/3 text-white">漲跌</p>
      </div>
      <CoinCart />
    </div>
  </div>
</template>
<script setup>
import CoinCart from '@/components/CoinCart.vue'
</script>
<style></style>