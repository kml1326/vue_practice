import Vue from "vue";
import Router from "vue-router";
import DashBoard from "./views/DashBoard.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp.vue";
import ArticleDetails from "./components/ArticleDetails.vue";
import Profile from "./components/Profile.vue";

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
    },
    {
      path: "/articles/:slug",
      name: "article-details",
      component: ArticleDetails
    },
    {
      path: "/:username",
      name: "profile",
      component: Profile
    }
  ]
});
