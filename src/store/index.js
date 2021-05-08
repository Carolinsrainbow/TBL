import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login:[]
  },
  mutations: {
    GET_LOGIN(state,login){
      state.login=login
    }
  },
  actions: {
  },
  modules: {
    getLogin(){
axios.get("http://localhost:8081/login.json").then((res) => {
        console.log(res.data)
        commit("GET_LOGIN", res.data)
      })
    }
  }
})
