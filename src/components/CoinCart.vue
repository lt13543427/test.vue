<script setup>
import { onMounted } from 'vue'
import { useCoinStores } from '../stores/coinStores'
import { useRouter } from 'vue-router'

const coinStore = useCoinStores()
const router = useRouter()

onMounted(() => {
    coinStore.fetchCoins()
})

const gateCoinid = (coinName) => {
    router.push({ name: 'coinView', params: { id: coinName } })
}
</script>

<template>
    <div class="bg-gray-100 min-h-screen py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <div v-for="coin in coinStore.coins" :key="coin.id"
                    class="coinbox bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between">
                    <router-link :to="{ name: 'coinView', params: { id: coin.CoinInfo.Name } }"
                        class="name-box flex items-center">
                        <div class="img mr-4 w-[40px] h-[40px]">
                            <img :src="`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`" alt="">
                        </div>
                        <div class="info">
                            <h3 class="text-xl font-bold cursor-pointer" @click="gateCoinid(coin.CoinInfo.Name)">
                                {{ coin.CoinInfo.Name }}
                            </h3>
                            <p class="text-gray-500">Vol{{ coin.RAW?.USD.VOLUME24HOUR.toFixed(2) }}M</p>
                        </div>
                    </router-link>
                    <div class="price-box">
                        <div class="usd">USD
                            <p class="text-green-600 font-bold">{{ coin.RAW?.USD.PRICE.toFixed(2) }}</p>
                        </div>
                    </div>
                    <div class="change">
                        <p class="text-sm text-gray-500">{{ coin.RAW?.USD.CHANGEPCT24HOUR.toFixed(2) }}%</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>