import request from "@/utils/request";

class Api {
  /*
   *登录：name, password
   */
  login(data) {
    return request({
      url: "/user/login",
      method: "post",
      data
    });
  }

  me() {
    return request({
      url: "/user/find-one",
      method: "get",
      headers: { "Cache-Control": "no-cache" }
    });
  }
}

export const api = new Api();
