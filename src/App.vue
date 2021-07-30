<template>
 <div>
  <Header v-if="token" />
  <div class="main_content mt-5" id="app">
   <router-view />
  </div>
 </div>
</template>

<script>
import Header from "@/components/header";
import {mapGetters } from "vuex"
export default {
 name: "App",
 components: {
  Header,
 },
 computed:{
   ...mapGetters({
     token: 'token',
   })
 }
};
</script>
