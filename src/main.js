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

const auth = ''
const USERNAME = 'YocelinGR'
const TOKEN = '2a8206244a49afec469c9020b0821a8cd1a6794e'

// Create apollo client
const httpLink = new HttpLink({
  uri: `https://api.github.com/graphql/user?user_name=${USERNAME}&access_token=${TOKEN}`,
  fetchOptions: {
    mode: 'no-cors',
  },
})

const middlewareLink = setContext(() => ({
  headers: {
    authorization: `Bearer ${auth}`,
    contentType: 'application/json',
  },
}))

const link = middlewareLink.concat(httpLink)

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
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
