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
    redirect: "/userinfo",
    name: "首页",
    children: [
      {
        path: "userinfo",
        name: "用户中心",
        component: () => import("@/views/userinfo/index"),
        meta: { title: "userinfo" }
      },
      {
        path: "myResource",
        name: "我的资源",
        component: () => import("@/views/userinfo/myResource"),
        meta: { title: "myResource" }
      }
    ]
  },

  {
    path: "/timefreq",
    component: Layout,
    name: "时频知识",
    children: [
      {
        path: "index",
        name: "timefreq",
        component: () => import("@/views/timefreq/index"),
        meta: { title: "timefreq" }
      }
    ]
  },

  {
    path: "/duty",
    component: Layout,
    name: "值班培训",
    children: [
      {
        path: "index",
        name: "值班培训",
        component: () => import("@/views/duty/index"),
        meta: { title: "duty" }
      }
    ]
  },
  {
    path: "/dutysimulation",
    component: Layout,
    name: "值班模拟",
    children: [
      {
        path: "index",
        name: "值班模拟",
        component: () => import("@/views/dutysimulation/index"),
        meta: { title: "duty" }
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
