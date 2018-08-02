<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile>        
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>test</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"> Decentralized exchange</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-menu bottom left>
            <v-btn flat slot="activator" >
            <v-icon left>account_circle</v-icon>
            Kristof Van Stappen
            </v-btn>
            <v-list>
              <v-list-tile
                @click=""
              >
                <v-list-tile-action>
                  <v-icon>lock_open</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>Sign out</v-list-tile-content>
              </v-list-tile>

            </v-list>
          </v-menu>
      </v-toolbar-items>
    </v-toolbar>
    <!-- <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Kristof Van Stappen</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <main>
      <router-view></router-view>
    </main>
  </v-app>
  
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  name: 'App'
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
