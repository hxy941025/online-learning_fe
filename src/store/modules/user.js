import { api } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken() || "",
  name: "",
  roles: "",
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      api
        .login({ username: username, password: password })
        .then((response) => {
          const data = response.data;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve) => {
      removeToken();
      commit("SET_TOKEN", "");
      commit("SET_ROLES", "");
      resolve();
    });
  },

  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      api
        .getInfo(state.token)
        .then((response) => {
          const { data } = response;

          if (!data) {
            return reject("Verification failed, please Login again.");
          }
          const { name, roles } = data;
          commit("SET_NAME", name);
          commit("SET_ROLES", roles);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
