import axios from "axios";
// import { history } from "./history";

const http = axios.create({
  baseURL: "http://geek.itheima.net/v1.0",
  timeout: 2000,
});

// 添加请求拦截器
http.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么

    // const { loginStore } = useStore();
    // config.headers["Token"] = loginStore.token;

    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    if (error.response.status > 400) {
      // 跳回到登录页,reactRouter 默认状态下，不支持在组件之外完成路由跳转，需要自己实现
      // 官方建议使用history包，结合配合 unstable_HistoryRouter 替换普通 BrowserHistory 使用
      // history.push("/login");  // 现获取用户数据接口404，暂关闭路由守卫
    }

    return Promise.reject(error);
  }
);

export { http };
