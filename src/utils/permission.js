import router from "@/router";
import store from "@/store";
// import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken, removeToken, removeUserName } from "@/utils/auth";

const whiteList = ["/login"]; // 白名单

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start();

  if (getToken()) {
    if (to.path === "/login") {
      removeToken();
      removeUserName();
      store.commit("user/SET_TOKEN", "");
      store.commit("user/SET_NAME", "");
      next();
    } else {
      next();
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
