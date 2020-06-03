<template>
  <v-app>

    <v-app-bar
            app
            color="primary"
            dark
            v-if="isHome"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title to="/">{{ appName }}</v-toolbar-title>
      <!-- pemisah konten -->
      <v-spacer></v-spacer>

      <v-btn icon @click="setDialogComponent('cart')">
        <v-badge
                color="orange"
                overlap
                :content="countCart"
                :value="countCart"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>

      <v-text-field
              slot="extension"
              hide-details
              append-icon="mdi-microphone"
              flat
              label="Search"
              prepend-inner-icon="mdi-magnify"
              solo-inverted
              @click="setDialogComponent('search')"
      ></v-text-field>

    </v-app-bar>
    <v-app-bar app color="primary" dark v-else>
      <v-btn icon @click.stop="$router.go(-1)">
        <v-icon>mdi-arrow-left-circle</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="setDialogComponent('cart')">
        <v-badge
                color="orange"
                overlap
                :content="countCart"
                :value="countCart"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-card>
      <v-navigation-drawer app v-model="drawer">
        <v-list-item v-if="!guest">
          <v-list-item-avatar>
            <v-img :src="getImage(user.avatar)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div class="pa-2" v-if="guest">
          <v-btn block color="primary" class="mb-1"
                 @click="setDialogComponent('login')">
            <v-icon left>mdi-lock</v-icon>
            Login
          </v-btn>
          <v-btn block color="success"
                 @click="setDialogComponent('register')">
            <v-icon left>mdi-account</v-icon>
            Register
          </v-btn>
        </div>

        <v-divider></v-divider>

        <!--          ROute-->

        <v-list shaped>
          <v-list-item-group v-model="item" color="primary">
            <template v-for="(item, index) in menus">
              <v-list-item
                      :key="`menu-`+index"
                      :to="item.route"
                      v-if="!item.auth || (item.auth && !guest)"
              >
                <v-list-item-icon>
                  <v-icon left>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>

        <template v-slot:append v-if="!guest">
          <div class="pa-2">
            <v-btn block color="red" dark @click="logout">
              <v-icon left>mdi-lock</v-icon>
              Logout
            </v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-card>

    <Alert />

    <keep-alive>
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="scale-transition">
        <component :is="currentComponent" @closed="setDialogStatus" >
        </component>
      </v-dialog>
    </keep-alive>
    <!-- Sizes your content based upon application components -->

    <v-content>
      <v-container fluid>
        <!-- vue-router -->
        <v-slide-y-transition>
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>

    <v-card>
      <v-footer app absolute>
        <v-card-text class="text-center">
          &copy; {{ new Date().getFullYear()}} -
          <strong>{{ appName }}</strong>
        </v-card-text>
      </v-footer>
    </v-card>

  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Alert: () => import( /* webpackChunkName: "alert" */ '@/components/Alert.vue'),
    Search: () => import( /* webpackChunkName: "search" */ '@/components/Search.vue'),
    Login: () => import( /* webpackChunkName: "login" */ '@/components/Login.vue'),
    Register: () => import( /* webpackChunkName: "register" */ '@/components/Register.vue'),
    Cart: () => import( /* webpackChunkName: "cart" */ '@/components/Cart.vue'),
  },
  data: () => ({
    drawer: false,
    menus: [
      {title: 'Home', icon: 'mdi-home', route: '/'},
      {title: 'Profile', icon: 'mdi-account',route: '/profile', auth: true},
      {title: 'My Order', icon: 'mdi-shopping', route: '/my-order', auth: true},
      {title: 'About', icon: 'mdi-help-box', route: '/about'},
    ],
    item : 1,
  }),
  methods: {
    ...mapActions({
      setDialogStatus   : 'dialog/setStatus',
      setDialogComponent: 'dialog/setComponent',
      setAuth           : 'auth/set',
      setAlert          : 'alert/set'
    }),
    logout(){
      let config = {
        headers: {
          'Authorization' : 'Bearer ' + this.user.api_token
        },
      }
      this.axios.post('/logout',{}, config)
        .then(() => {
          this.setAuth({})   //mengosongkan auth ketika logut
          this.setAlert({
            status    : true,
            color     : 'success',
            text      : 'Logout successfully'
          })
        })
      .catch((error) => {
        let {data} = error.response
        this.setAlert({
          status  : true,
          color   : 'success',
          text    : data.message,
        })
      })
    }
  },
  mounted() {
    console.log(process.env)
  },
  computed: {
    isHome() {
      return (this.$route.path==='/')
    },
    ...mapGetters({
      countCart           : 'cart/count',
      guest               : 'auth/guest',
      user                : 'auth/user',
      dialogStatus        : 'dialog/status',
      currentComponent    : 'dialog/component',
    }),
    dialog: {
      get(){
        return this.dialogStatus
      },
      set(value){
        this.setDialogStatus(value)
      }
    }
  }
};
</script>
