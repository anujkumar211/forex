import Vue from "vue";
import Router from "vue-router";
import User from "@/pages/user";
import Home from "@/pages/home";
import UserID from "@/pages/_id";
import store from "@/store";
Vue.use(Router);

const router = new Router({
 mode: "history",
 routes: [
  {
   path: "/",
   component: User,
   name: "User",
  },
  {
   path: "/user",
   component: Home,
   name: "Home",
  },
  {
    path: "/user/:id",
    component: UserID,
    name: "UserID",
   },
 ],
});
router.beforeEach((to, from, next) => {
 const token = store.state.User.token;
 if (to.name !== "User" && !token) next({ name: "User" });
 else next();
});
export default router;
