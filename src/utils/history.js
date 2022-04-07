/**
 * 使用history包手动在组件外，进行路由跳转
 * 配合unstable_HistoryRouter(react-router-dom 包内) 使用
 */
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export { history };
