import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCrime: undefined,
    selectedCriminal: undefined,
    
    selectedUser: undefined,
    userList: 
      { name: 'Arnar', password: 'a' },
      

    user: undefined,
    authenticated: false,

  },
  mutations: {
    SET_SELECTED_CRIME(state, payload) {
      console.log('SELECTED CRIME SET TO', payload)
      state.selectedCrime = payload
    },
    SET_SELECTED_CRIMINAL(state, payload){
    console.log('SELECTED CRIMINAL SET TO', payload)
    state.selectedCriminal = payload
    },
    SET_AUTHENTICATION(state, payload) {
      state.authenticated = payload;
    },
    
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_SELECTED_USER(state, payload) {
      console.log('SELECTED USER SET TO', payload)
      state.selectedUser = payload;
    },
  },
  actions: {
  },
  getters: {
    selectedCrime(state) {
      return state.selectedCrime
    },
  
    selectedCriminal(state) {
      return state.selectedCriminal
    },
    userList(state) {
      return state.userList
    },
    selectedUser(state) {
      return state.selectedUser
    },
    user(state) {
      return state.user
    }
  }
})
