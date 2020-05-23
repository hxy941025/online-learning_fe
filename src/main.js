import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./styles/reset.scss";
import "@/utils/permission";
import VCharts from "v-charts";

Vue.config.productionTip = false;
Vue.use(VCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
