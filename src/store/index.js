import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'//Vuex 持久化存储插件
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
  storage:window.localStorage
})

export default new Vuex.Store({
  state: {
    loading: false, //控制加载css
    sending: false,
    error:null,
    activeRoom:null,
    reconnect: false,
    rooms: [],
    user: [],
    users: [],
    messages: [],
    userTyping: null
  },
  mutations,
  actions,
  getters: {
    hasError: state => state.error ? true : false
  },
  plugins: [vuexLocal.plugin],
  strict: debug
})
