import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
  loggedIn: false,
  currentUser: {}
}

const mutations = {
  setLoggedIn (state, value, user) {
    state.loggedIn = value
    state.currentUser = user
  }
}

const actions = {
  registerUser (formData, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        Loading.hide()
        console.log('response: ', response)
      })
      .catch(error => {
        Loading.hide()
        showErrorMessage(error.message)
      })
  },
  loginUser (formData = {}, payload) {
    Loading.hide()
    console.log('payload-beforeFB: ', payload)
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        Loading.hide()
        console.log('loggedIn-response: ', response)
      })
      .catch(error => {
        Loading.hide()
        showErrorMessage(error.message)
      })
  },
  logoutUser () {
    console.log('logoutUser')
    firebaseAuth.signOut()
    this.$router.replace('/auth')
  },
  handleAuthStateChanges ({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      console.log('State Changes: ', LocalStorage.loggedIn)
      if (user) {
        // User is signed in.
        commit('setLoggedIn', true, user)
        LocalStorage.set('loggedIn', true)
        LocalStorage.set('currentUser', user)
        this.$router.push('/')
        // this is where to dispatch misc functions: (./path/functions-retrieve-assets, {root: true})
      } else {
        commit('setLoggedIn', false)
        LocalStorage.set('loggedIn', false)
        LocalStorage.set('currentUser', {})
        console.log('Local Storage Changes user: ', LocalStorage.loggedIn)
        this.$router.replace('/auth')
      }
    })
  }
}

const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
