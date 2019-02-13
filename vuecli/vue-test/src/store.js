import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    add(state){
      state.count++;
    }
  },
  actions: {
    addAction({commit}){
      commit('add',10)
    }
  },
  getters:{
    count1(state){
      return state.count + 10
    }
  }
})
