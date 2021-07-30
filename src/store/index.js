import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import createPersistedState from "vuex-persistedstate";
import User from "./modules/user";
import List from "./modules/list";
const store = new Vuex.Store({
 modules: {
  User,
  List,
 },
 plugins: [createPersistedState({ User, List })],
});

export default store;
