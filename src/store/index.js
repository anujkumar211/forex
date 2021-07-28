import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";
import User from "./modules/user";
const store = new Vuex.Store({
 modules: {
  User,
 },
 plugins: [createPersistedState({ User })],
});

export default store;
