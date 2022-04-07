import { http, getToken, setToken, removeToken } from "@/utils";
import { makeAutoObservable } from "mobx";

class LoginStore {
  token = getToken() || "";

  constructor() {
    makeAutoObservable(this);
  }

  getToken = async ({ mobile, code }) => {
    const res = await http.post("http://geek.itheima.net/v1_0/authorizations", {
      mobile,
      code,
    });

    //  存入token
    this.token = res.data.token;

    // 存入LS
    setToken(this.token);
  };

  // 登出
  logOut = () => {
    removeToken();
    this.token = "";
  };
}

export default LoginStore;
