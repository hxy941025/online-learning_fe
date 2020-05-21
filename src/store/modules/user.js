import { api } from "@/api/user";
import {
  getToken,
  setToken,
  removeToken,
    removeUserName,
  setUserName,
  getUserName
} from "@/utils/auth";

const state = {
  name: getUserName() || "",
  token: getToken() || ""
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { name, password } = userInfo;
    return new Promise((resolve, reject) => {
      api
        .login({ name: name, password: password })
        .then(response => {
          const data = response.data.data;
          commit("SET_TOKEN", data.token);
          commit("SET_NAME", data.user.name);
          setToken(data.token);
          setUserName(data.user.name);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  logout({commit}){
    return new Promise((resolve) => {
        removeToken();
        removeUserName();
        commit("SET_TOKEN", "");
        commit("SET_NAME", "");
        resolve()
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
