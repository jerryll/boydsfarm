// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

import App from './App.vue'
import router from './router.js'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'buefy/lib/'

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/starterBlog'

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

Vue.use(VueApollo)
Vue.use(Buefy)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  apolloProvider,
  router,
  template: '<App/>',
  components: { App }
})
