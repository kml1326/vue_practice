import Vue from "vue";
import Router from "vue-router";
import DashBoard from "./views/DashBoard.vue";
import SignIn from './views/SignIn.vue';
import SignUp from './views/SignUp.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoard,
      props: true
    },
    {
      path: "/login",
      name: "sign-in",
      component: SignIn
    },
    {
      path: "/register",
      name: "sign-up",
      component: SignUp
    }
  ]
});
