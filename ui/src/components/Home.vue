<template>
    <v-container fluid grid-list-md >
        <v-layout row justify-space-between wrap>
            <v-flex xs12 sm6 lg3 order-lg1 >             
                <my-wallet class="ma-2"></my-wallet>                  
            </v-flex>
            <v-flex xs12 sm6 lg3 order-lg3>
                <new-order class="ma-2"></new-order>
            </v-flex>
            <v-flex xs12 sm12 lg6 order-lg2>
                <orders title="Open orders" :orders="openOrders" class="ma-2 mb-4"></orders>
                <orders title="Order history" :orders="orderHistory" class="ma-2 mb-4"></orders>
            </v-flex>

        </v-layout>       
    </v-container>   
</template>
<script>
  export default {
    computed: {
      openOrders () {
        return this.$store.getters.openOrders
      },
      orderHistory () {
        return this.$store.getters.orderHistory
      }
    }
  }
</script>