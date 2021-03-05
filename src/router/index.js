import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DancersSignup from "../views/DancersSignup.vue";
import EmployersSignup from "../views/EmployersSignup.vue";
import DancersLogin from "../views/DancersLogin.vue";
import EmployersLogin from "../views/EmployersLogin.vue";
import Logout from "../views/Logout.vue";
import DancersIndex from "../views/dancers/DancersIndex.vue"

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
    name: "dancer-index",
    component: DancersIndex
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
