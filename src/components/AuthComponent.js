import { getToken } from "@/utils";
import { Navigate } from "react-router-dom";

/**
 * 路由鉴权，手动代替vue中的路由守卫
 * 1.判断token是否存在
 * 2.如果存在，直接正常渲染
 * 3.如果不存在，重定向到登录路由
 */

// 高阶组件: 把一个组件当成另一个组件的参数传入，通过一定判断，返回新的组件
function AuthComponent({ children }) {
  const token = getToken();
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace />;
  }
}

export { AuthComponent };
