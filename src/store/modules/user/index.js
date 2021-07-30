export default {
 state: {
  token: null,
 },
 mutations: {
   logout(state){
    state.token = null;
   },
  set_token: (state, token) => {
   state.token = token;
  },
 },
 actions: {
  SET_TOKEN: ({ commit }, token) => {
   commit("set_token", token);
  },
  LOGOUT({commit}){
    commit('logout')
  }
 },
 getters:{
  token: (state) => state.token
 }
};
