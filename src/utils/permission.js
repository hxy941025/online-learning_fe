import router from "@/router";
import store from "@/store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken, removeToken } from "@/utils/auth";

const whiteList = ["/login"]; // 白名单

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start();

  const hasToken = getToken();

  if (hasToken) {
    if (to.path === "/login") {
      removeToken();
      store.commit("user/SET_TOKEN", "");
      next();
    } else {
      // 先判断store中是否有username，如果有直接从store中取，否则获取用户信息
      const hasRoles = store.getters.roles;
      if (hasRoles !== "") {
        next();
      } else {
        store
          .dispatch("user/getInfo")
          .then((res) => {
            return store.dispatch("permission/generateRoutes", res.roles);
          })
          .then((accessRoutes) => {
            router.addRoutes(accessRoutes);
            next({ ...to, replace: true });
          })
          .catch((err) => {
            console.log(err);
            Message.error(err || "Has Error");
            next(`/login`);
          });
      }
    }

    NProgress.done();
  } else {
    // 如果不是去login界面，就重定向到login
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login`);
      NProgress.done();
    }
  }
  NProgress.done();
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
