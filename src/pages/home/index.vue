<script>
import { mapActions, mapGetters } from "vuex";
import List from "@/components/List";
export default {
 name: "Home",
 components: {
  List,
 },
//  data() {
//   return {
//    userList: [],
//   };
//  },
 computed:{
   ...mapGetters({
     userList:'userList'
   })
 },
 methods: {
  ...mapActions({
   list: "SET_LIST",
  }),
  async getUser() {
   await this.list();
  },
 },
 mounted() {
  this.getUser();
 },
};
</script>

<template>
 <div class="container">
  <div class="row">
   <div class="col-md-6 m-auto">
    <List :list="userList" />
   </div>
  </div>
 </div>
</template>
