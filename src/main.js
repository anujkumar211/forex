import Vue from "vue";
//import * as VeeValidate from "vee-validate";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.css";
// import { ValidationProvider } from 'vee-validate';

// Vue.component('ValidationProvider', ValidationProvider);
// import { ValidationProvider } from "vee-validate";

// // Register it globally
// // main.js or any entry file.
// Vue.component("ValidationProvider", ValidationProvider);
//Vue.use(VeeValidate, { useConstraintAttrs: false });
import "@/plugins/vee-validate";
Vue.config.productionTip = false;

new Vue({
 router,
 store,
 mode: "history",
 render: (h) => h(App),
}).$mount("#app");
