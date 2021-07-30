import listApi from "@/api/list";
export default {
 state: {
  list: [],
 },
 mutations: {
  SET_LIST(state, payload) {
   state.list = payload;
  },
 },
 actions: {
  async SET_LIST({commit}) {
   const {
    data: { data: list },
   } = await listApi.list();
   commit("SET_LIST", list);
  },
 },
 getters:{
   userList:(state) => state.list
 }
};
