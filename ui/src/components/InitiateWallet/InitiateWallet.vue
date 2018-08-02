<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <div class="example-drag">
          <div class="upload">
            <ul v-if="files.length">
              <li v-for="(file, index) in files" :key="file.id">
                <span>{{file.name}}</span> -
                <span>{{file.size | formatSize}}</span> -
                <span v-if="file.error">{{file.error}}</span>
                <span v-else-if="file.success">success</span>
                <span v-else-if="file.active">active</span>
                <span v-else-if="file.active">active</span>
                <span v-else></span>
              </li>
            </ul>
            <ul v-else>
              <td colspan="7">
                <div class="text-center p-5">
                  <h4>Drop files anywhere to upload<br/>or</h4>
                  <label for="file" class="btn btn-lg btn-primary">Select Files</label>
                </div>
              </td>
            </ul>

            <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
              <h3>Drop files to upload</h3>
            </div>

            <div class="example-btn">
            <file-upload
                class="btn btn-primary"
                post-action="/upload/post"
                :multiple="true"
                :drop="true"
                :drop-directory="true"
                v-model="files"
                ref="upload">
                Select files
            </file-upload>
             <v-btn raised class="primary" 
                @click= "onPickFile"
                >
                Select file
              </v-btn>
              
              <input type="file" style="display: none" ref="fileInput"> 

              <v-btn v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true"
                :loading="uploading"
                :disabled="uploading"
                color="blue-grey"
                class="white--text"
                @click.native="loader = 'uploading'"
              >
                Upload
                <v-icon right dark>cloud_upload</v-icon>
              </v-btn>

              <v-btn v-else @click.prevent="$refs.upload.active = false">Stop upload</v-btn>
            </div>
          </div>
        </div>
      </v-flex>
  </v-layout>
</template>
<style>
.example-drag label.btn {
  margin-bottom: 0;
  margin-right: 1rem;
}
.example-drag .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: .6;
  text-align: center;
  background: #000;
}
.example-drag .drop-active h3 {
  margin: -.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
</style>

<script>
import FileUpload from 'vue-upload-component'
export default {
  components: {
    FileUpload
  },
  data () {
    return {
      files: [],
      loader: null,
      uploading: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    }
  }
}
</script>