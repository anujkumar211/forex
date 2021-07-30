import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/style.css";
import "@/plugins/vee-validate";
Vue.config.productionTip = false;
new Vue({
 router,
 store,
 mode: "history",
 render: (h) => h(App),
}).$mount("#app");
