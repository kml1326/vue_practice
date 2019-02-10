import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    globalFeed: null,
    tagFeed: null,
    JwtToken: localStorage.getItem("token") || null
  },
  mutations: {
    LOGIN(state, data) {
      state.user = data;
    },
    GLOBAL_FEED(state, data) {
      state.globalFeed = data;
    },
    TAG_FEED(state, data) {
      state.tagFeed = data;
    }
  },
  actions: {}
});
