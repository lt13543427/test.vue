import { defineStore } from 'pinia';

export const useCoinStores = defineStore('coinStore', {
    state: () => ({
        coins: [],
        loading: false,
        error: null,
    }),
    actions: {
        async fetchCoins() {
            this.loading = true;
            this.error = null;
            try {
                const response = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD');
                const data = await response.json();
                this.coins = data.Data;
                console.log('Fetched coins:', this.coins);
            } catch (error) {
                this.error = error;
            } finally {
                this.loading = false;
            }
        },
        getCoinId(coinId) {
            const coin = this.coins.find(coin => coin.CoinInfo.Name === coinId);
            return coin;
        }
    }
});
