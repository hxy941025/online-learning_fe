import axios from "axios";
import store from "@/store";
import { getToken } from "./auth";
//创建axios

const service = axios.create({
  baseURL: "/api"
});

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    if (store.state.user.token) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default service;
