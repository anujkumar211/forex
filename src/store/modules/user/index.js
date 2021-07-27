export default {
 state: {
  token: null,
 },
 mutations: {
  set_token: (state, token) => {
   state.token = token;
  },
 },
 actions: {
  SET_TOKEN: ({ commit }, token) => {
   commit("set_token", token);
  },
 },
};
