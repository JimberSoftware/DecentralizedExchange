<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 >


      <v-alert class="mb-3"
        :value="true"
        color="info"
        icon="info"
        outline
      >
        No wallet found.
      </v-alert>

        <v-card >
          <v-card-title>
            <h2>Upload your existing wallet</h2>
          </v-card-title>
          <div id="app">
            
            <file-pond
                name="test"
                ref="pond"
                class-name="my-pond"
                label-idle="Drop files here..."
                allow-multiple="false"
                server="http://localhost/5000"
                accepted-file-types="application/zip, application/x-tar, application/gzip"
                v-bind:files="myFiles"
                v-on:init="handleFilePondInit"/>
          </div>
        </v-card>
        <h2 class="text-xs-center ma-5">Or</h2>
         <v-card >
          <v-card-title>
            <h2>Create a new wallet</h2>
          </v-card-title>
            <v-card-actions>
                  <v-layout class="ma-3">
                    <v-flex xs12 sm6 offset-md4 >
                      <v-btn dark class="primary text-xs-center">
                        <v-icon  left>add_circle_outline</v-icon>Create new wallet
                        </v-btn>
                      </v-flex>
                  </v-layout>            
            </v-card-actions>
          </v-card >
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// Import FilePond
import vueFilePond from 'vue-filepond';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType);

export default {
    name: 'app',
    data: function() {
        return { myFiles: [] };
    },
    methods: {
        handleFilePondInit: function() {
            console.log('FilePond has initialized');

            // FilePond instance methods are available on `this.$refs.pond`
        }
    },
    components: {
        FilePond
    }
};
</script>