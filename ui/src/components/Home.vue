<template>
    <v-container fluid grid-list-md >
        <v-layout row justify-space-between wrap>
            <v-flex xs12 sm6 lg3 order-lg1>             
                <my-wallet></my-wallet>                  
            </v-flex>
            <v-flex xs12 sm6 lg3 order-lg3>
                <new-order></new-order>
            </v-flex>
            <v-flex xs12 sm12 lg6 order-lg2>
                <order-history class="mb-3"></order-history>
                <order-history ></order-history>
            </v-flex>

        </v-layout>       
    </v-container>   
</template>