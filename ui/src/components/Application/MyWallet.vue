<template>
    <v-card>
        <v-card-title>
            <h2>My wallet</h2>
        </v-card-title>
            <v-card-actions>
                <v-expansion-panel popout
                v-model="panel"
                expand
                >
                    <v-expansion-panel-content
                    v-for="(coin, i) in myWallet"
                    :key="i"
                    >

                        <div slot="header">
                        <v-avatar
                        :size="24"
                        color="grey lighten-4"
                        >
                        <img v-bind:src="coin.icon">
                        </v-avatar>
                            {{coin.name}}
                        </div>
                        <v-spacer></v-spacer>
                        <div slot="header">{{coin.amount}}</div>
                        <v-card>

                            <v-card-actions>
        
                                <v-layout row wrap>
                                    <v-flex xs9>
                                        <v-text-field
                                        v-model='coin.address'
                                        disabled
                                        box
                                        label='Address'>
                                </v-text-field>
                                    </v-flex> 
                                    <v-flex xs3>
                                        <v-btn flat  align-right>Copy</v-btn>
                                    </v-flex> 
                                </v-layout>                      
                            
                                <!-- <v-btn flat  align-right>Copy</v-btn> -->  
                            </v-card-actions>               
                            
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
        </v-card-actions>
    </v-card>
</template>

<script>
  export default {
    data () {
      return {
        panel: [false],
        myWallet: [
            {name: 'Bitcoin', amount: 20.31, icon: 'https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/btc-512.png', address: 'qfskajfmazjfm72oifaz7mfaz25flkjn827858fmlfml'},
            {name: 'Ethereum', amount: 10.21, icon: 'https://cdn2.iconfinder.com/data/icons/cryptocurrency-5/100/cryptocurrency_blockchain_crypto-02-512.png', address: 'qfskajfmazjfm72oifaz7mfaz25flkjn827858fmlfml'},
            {name: 'Threefold', amount: 1000.21, icon: 'https://threefold.me/svg/ic-benefits-01.svg', address: 'qfskajfmazjfm72oifaz7mfaz25flkjn827858fmlfml'}
        ]
      }
    }
  }
</script>