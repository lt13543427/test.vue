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
    <div class="min-h-screen py-8 bg-zinc-800">
        <div class="max-w-7xl mx-auto">
            <div>
                <div v-for="coin in coinStore.coins" :key="coin.id"
                    class="coinbox shadow-md w-full rounded-lg p-4 mb-2 flex items-center bg-[#181a20]">
                    <router-link :to="{ name: 'coinView', params: { id: coin.CoinInfo.Name } }"
                        class="name-box flex items-center w-1/3 ">
                        <div class="img mr-4 w-[40px] h-[40px] flex justify-start">
                            <img :src="`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`" alt="">
                        </div>
                        <div class="info">
                            <h3 class="text-xl font-bold cursor-pointer text-white"
                                @click="gateCoinid(coin.CoinInfo.Name)">
                                {{ coin.CoinInfo.Name }}
                            </h3>
                            <p class=" text-gray-500">Vol{{ coin.RAW?.USD.VOLUME24HOUR.toFixed(2) }}M</p>
                        </div>
                    </router-link>
                    <div class="price-box w-1/3 flex justify-start text-center text-white">
                        <div class="usd w-full">
                            <h3 class="font-bold cursor-pointer text-white">USD</h3>
                            <p class="text-white font-bold text-opacity-50">{{ coin.RAW?.USD.PRICE.toFixed(2) }}</p>
                        </div>
                    </div>
                    <div class="change w-1/3 text-center justify-end text-white">
                        <p :class="{ 'text-green-600': coin.RAW?.USD.CHANGEPCT24HOUR > 0, 'text-red-600': coin.RAW?.USD.CHANGEPCT24HOUR <= 0 }"
                            class="text-sm text-gray-500 w-full">
                            {{ coin.RAW?.USD.CHANGEPCT24HOUR.toFixed(2) }}%
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>