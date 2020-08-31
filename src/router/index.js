import Vue from "vue";
import VueRouter from "vue-router";

/* Layout */
import Layout from "@/layout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    name: "主页",
    children: [
      {
        path: "home",
        name: "主页",
        component: () => import("@/views/Home"),
        meta: { title: "home" },
      },
    ],
  },
  {
    path: "/userinfo",
    component: Layout,
    name: "用户中心",
    children: [
      {
        path: "index",
        name: "我的信息",
        component: () => import("@/views/userinfo/index"),
        meta: { title: "userinfo" },
      },
      {
        path: "myResource",
        name: "我的资源",
        component: () => import("@/views/userinfo/myResource"),
        meta: { title: "myResource" },
      },
    ],
  },

  {
    path: "/exam",
    component: Layout,
    name: "考试中心",
    children: [
      {
        path: "index",
        name: "我的考试",
        component: () => import("@/views/exam/index"),
        meta: { title: "exam" },
      },
      {
        path: "selftest",
        name: "自测中心",
        component: () => import("@/views/exam/selftest"),
        meta: { title: "selftest" },
      },
    ],
  },

  {
    path: "/duty",
    component: Layout,
    name: "值班培训",
    children: [
      {
        path: "index",
        name: "值班教程",
        component: () => import("@/views/duty/index"),
        meta: { title: "duty" },
      },
    ],
  },
  // { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRoutes,
});

export default router;

//以上为通用权限路由，下面的为权限路由，只有admin才能访问
export const asyncRoutes = [
  {
    path: "/rootManage",
    component: Layout,
    name: "权限管理",
    alwaysShow: true,
    meta: { title: "rootManage", roles: ["admin"] },
    children: [
      {
        path: "index",
        name: "资料管理",
        component: () => import("@/views/rootManage/index"),
        meta: { title: "rootManage", roles: ["admin"] },
      },
    ],
  },
];
