import Vue from 'vue'
import App from './app'
import router from '@router'
import store from '@state/store'
import '@components/_globals'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = false // process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (window.Cypress) {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

const USERNAME = 'YocelinGR'
const TOKEN = '931cdabb794dfdd2bdd4980bb97a570fa6bc12ce'

// Create apollo client
const httpLink = new HttpLink({
  uri: `https://api.github.com/graphql?user_name=${USERNAME}&access_token=${TOKEN}`,
})

const appCache = new InMemoryCache()
const headers = new Headers()

headers.append('Content-Type', 'appication/json')
headers.append('Access-Control-Allow-Origin', 'http://localhost:8080')
headers.append('Access-Control-Allow-Credentials', 'true')

const middlewareLink = setContext(() => ({
  headers,
}))

const link = middlewareLink.concat(httpLink)
const apolloClient = new ApolloClient({
  link: link,
  cache: appCache,
  connectToDevTools: true,
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

export default apolloClient

// Start the app
const app = new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
})

// If running inside Cypress...
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}
