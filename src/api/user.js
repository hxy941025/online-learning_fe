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
}

export const api = new Api();

// export function getInfo(token) {
//     return request({
//         url: '/vue-admin-template/user/info',
//         method: 'get',
//         params: { token }
//     })
// }
//
// export function logout() {
//     return request({
//         url: '/vue-admin-template/user/logout',
//         method: 'post'
//     })
// }
