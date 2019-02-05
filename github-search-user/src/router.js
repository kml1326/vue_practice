import Vue from "vue";
import Router from "vue-router";
import UserRepos from "./components/UserRepos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "user-repos",
      component: UserRepos,
      props: true
    }
  ]
});
