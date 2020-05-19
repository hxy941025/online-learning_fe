import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/Home"),
        meta: { title: "Home" }
      }
    ]
  },
  {
    path: "/userinfo",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Userinfo",
        component: () => import("@/views/userinfo/index"),
        meta: { title: "userinfo" }
      }
    ]
  },
  {
    path: "/timefreq",
    component: Layout,
    children: [
      {
        path: "index",
        name: "timefreq",
        component: () => import("@/views/timefreq/index"),
        meta: { title: "timefreq" }
      }
    ]
  },
  { path: "*", redirect: "/404", hidden: true }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
