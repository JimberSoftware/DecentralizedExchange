<template>
<div>    
  <v-card>
    <v-card-title>
      <h2>Order history</h2>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="orders"
      :search="search"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.boughtAmount }}</td>
        <td class="text-xs-right">{{ props.item.boughtCoin }}</td>
        <td class="text-xs-right">{{ props.item.soldAmount }}</td>
        <td class="text-xs-right">{{ props.item.soldCoin }}</td>
        <td class="text-xs-right">{{ props.item.date }}</td>
        <td class="text-xs-right">{{ props.item.state }}</td>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</div>
</template>

<script>
  export default {
    computed: {
      orders () {
        return this.$store.getters.loadedOrders
      }
    },
    data () {
      return {
        search: '',
        headers: [
          { text: 'Bought', value: 'boughtAmount' },
          { text: 'Coin', value: 'boughtCoin' },
          { text: 'Sold', value: 'soldAmount' },
          { text: 'Coin', value: 'soldCoin' },
          { text: 'Date', value: 'date' },
          { text: 'State', value: 'state' }
        ]
      }
    }
  }
</script>