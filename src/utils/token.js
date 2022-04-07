const key = "pc-key";

// 储存token
const setToken = (token) => {
  return window.localStorage.setItem(key, token);
};

// 获取token
const getToken = () => {
  return window.localStorage.getItem(key);
};

// 移除token
const removeToken = () => {
  return window.localStorage.removeItem(key);
};

export { setToken, getToken, removeToken };
