<template>
 <div>
     <v-card>
        <v-card-title>
            <h2>New order</h2>
        </v-card-title>
        <v-card-actions class="ma-3">
            <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="onSubmit">        
                <v-layout row wrap>
                    <v-flex xs7>
                        <v-text-field 
                        v-model="buyAmount"
                        :rules="buyAmountRules"
                        label="Buy"
                        required
                        ></v-text-field>
                    </v-flex> 
                    <v-flex xs5>
                        <v-select
                        v-model="buyCoin"
                        :hint="`${buyCoin.coin}, ${buyCoin.abbr}`"
                        :items="coins"
                        item-text="coin"
                        item-value="abbr"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                        ></v-select>
                    </v-flex>             
                </v-layout>   
                <v-layout row wrap>
                    <v-flex xs7>
                        <v-text-field 
                        v-model="sellAmount"
                        :rules="sellAmountRules"
                        label="Sell"
                        required
                        ></v-text-field>
                    </v-flex> 
                    <v-flex xs5>
                        <v-select
                        v-model="sellCoin"
                        :hint="`${sellCoin.coin}, ${sellCoin.abbr}`"
                        :items="coins"
                        item-text="coin"
                        item-value="abbr"
                        label="Select"
                        persistent-hint
                        return-object
                        single-line
                        ></v-select>
                    </v-flex>             
                </v-layout>   
                <v-layout class="ma-2">
                  <v-btn
                  :disabled=!valid
                  @click="onSubmit"
                  class="primary"
                  >
                  submit
                  </v-btn>
                  <v-btn @click="clear">clear</v-btn>
                </v-layout>
            </v-form>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      buyAmount: '0',
      buyCoin: { coin: 'Bitcoin', abbr: 'BTC' },
      buyAmountRules: [
        v => !!v || 'Buy amount is required',
        v => /^-?\d*\.?\d*$/ || 'Buy amount must be valid number'
      ],
      sellAmount: '0',
      sellCoin: { coin: 'Bitcoin', abbr: 'BTC' },
      sellAmountRules: [
        v => !!v || 'Sell amount is required',
        v => /^-?\d*\.?\d*$/ || 'Sell amount must be valid number'
      ],
      coins: [
        { coin: 'Bitcoin', abbr: 'BTC' },
        { coin: 'Ethereum', abbr: 'ETH' },
        { coin: 'Ripple', abbr: 'XRP' },
        { coin: 'Threefold', abbr: 'TFT' }
      ]
    }),

    methods: {
      onSubmit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported

          console.log({
            buyAmount: this.buyAmount,
            buyCoin: this.buyCoin,
            sellAmount: this.sellAmount,
            sellCoin: this.sellCoin
          })
          this.$store.commit('submitNewOrder', {buyAmount: this.buyAmount, buyCoin: this.buyCoin, sellAmount: this.sellAmount, sellCoin: this.sellCoin})
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }
</script>

<style scoped>
  .comboInput {
    height: 350px;
  }

  .item {
    min-height: 50px;
    min-width: 170px;

    margin: 10px;
  }
</style>