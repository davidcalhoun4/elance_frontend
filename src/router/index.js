import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DancersSignup from "../views/DancersSignup.vue";
import EmployersSignup from "../views/EmployersSignup.vue";
import DancersLogin from "../views/DancersLogin.vue";
import EmployersLogin from "../views/EmployersLogin.vue";
import Logout from "../views/Logout.vue";

import DancersIndex from "../views/dancers/DancersIndex.vue";
import DancersShow from "../views/dancers/DancersShow.vue";
import DancersEdit from "../views/dancers/DancersEdit.vue";


import PostsIndex from "../views/posts/PostsIndex.vue";
import PostsShow from "../views/posts/PostsShow.vue";
import PostsEdit from "../views/posts/PostsEdit.vue";
import PostsNew from "../views/posts/PostsNew.vue";

import EmployersShow from "../views/employers/EmployersShow.vue";
import EmployersEdit from "../views/employers/EmployersEdit";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/dancer/signup",
    name: "dancer-signup",
    component: DancersSignup
  },
  {
    path: "/employer/signup",
    name: "employer-signup",
    component: EmployersSignup
  },
  {
    path: "/dancer/login",
    name: "dancer-login",
    component: DancersLogin
  },
  {
    path: "/employer/login",
    name: "employer-login",
    component: EmployersLogin
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/dancers",
    name: "dancers-index",
    component: DancersIndex
  },
  {
    path: "/dancers/:id",
    name: "dancers-show",
    component: DancersShow
  },
  {
    path: "/dancers/:id/edit",
    name: "dancers-edit",
    component: DancersEdit
  },
  {
    path: "/posts",
    name: "posts-index",
    component: PostsIndex
  },
  {
    path: "/posts/new",
    name: "posts-new",
    component: PostsNew
  },
  {
    path: "/posts/:id",
    name: "posts-show",
    component: PostsShow
  },
  {
    path: "/posts/:id/edit",
    name: "posts-edit",
    component: PostsEdit
  },
  {
    path: "/employers/:id",
    name: "employers-show",
    component: EmployersShow
  },
  {
    path: "/employers/:id/edit",
    name: "employers-edit",
    component: EmployersEdit
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
