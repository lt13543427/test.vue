<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 px-4">
        <div class="p-8 rounded-lg shadow-md w-full max-w-md">
            <div class="flex flex-col sm:flex-row sm:justify-between items-center mb-4">
                <div class="flex items-center mb-4 sm:mb-0">
                    <div class="w-[50px] h-[50px] rounded-full overflow-hidden border-4">
                        <img :src="coinInfo.imageUrl" alt="" class="w-full h-full">
                    </div>
                    <div class="text-center ml-4">
                        <h3 class="text-xl font-bold">{{ coinInfo.name }}</h3>
                        <p>usd</p>
                    </div>
                </div>
                <div class="text-center w-32 p-2 border border-gray-300 rounded-md mb-4 sm:mb-0 sm:ml-4">
                    <p class="text-green-600 font-bold">{{ coinInfo.price.toFixed(2) }}</p>
                    <p>最新成交價格</p>
                </div>
                <div class="text-center w-32 p-2 border border-gray-300 rounded-md sm:ml-4">
                    <p class="text-green-600 font-bold">{{ coinInfo.change.toFixed(2) }}%</p>
                    <p>24小時</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCoinStores } from '../stores/coinStores';

const route = useRoute();
const coinStore = useCoinStores();

const coinInfo = ref({
    name: '',
    imageUrl: '',
    volume: 0,
    price: 0,
    change: 0
});

onMounted(() => {
    const coinId = route.params.id;
    const coinData = coinStore.getCoinId(coinId);
    if (coinData) {
        updateCoinInfo(coinData);
    }
});

function updateCoinInfo(coinData) {
    coinInfo.value = {
        name: coinData.CoinInfo.FullName,
        imageUrl: `https://www.cryptocompare.com${coinData.CoinInfo.ImageUrl}`,
        volume: coinData.RAW?.USD.VOLUME24HOUR,
        price: coinData.RAW?.USD.PRICE,
        change: coinData.RAW?.USD.CHANGEPCT24HOUR,
    };
}
</script>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}
</style>
