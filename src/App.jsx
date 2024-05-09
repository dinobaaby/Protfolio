import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import router from "./routes/routes";
import Aside from "./components/Aside/Aside";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Aside />
      <div className="content">
        <Routes>
          {router.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.element} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
