import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { history } from "@/utils/history";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { AuthComponent } from "./components/AuthComponent";
import "./App.scss";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        <Routes>
          {/* 路由鉴权 */}
          <Route
            path="/"
            element={
              <AuthComponent>
                <Layout />
              </AuthComponent>
            }
          >
            {/* 二级路由 */}
            <Route index element={<Home />}></Route>
            <Route path="article" element={<Article />}></Route>
            <Route path="publish" element={<Publish />}></Route>
          </Route>
          {/* 登录页，不需要路由鉴权 */}
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </HistoryRouter>
  );
}

export default App;
