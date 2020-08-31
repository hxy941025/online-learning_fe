const state = {
  onShade: false,
};

const mutations = {
  SHOW_SHADE: (state, onShade) => {
    state.onShade = onShade;
  },
};

const actions = {
  showShade({ commit }, option) {
    commit("SHOW_SHADE", option);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
