import Vue from "vue";
import Router from "vue-router";
import DashBoard from "./views/DashBoard.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashBoard,
      props: true
    } 
  ]
});
