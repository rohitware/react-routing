import "./App.css";
import { Routes, Route } from "react-router";
import Html from "./components/Html";
import Css from "./components/Css";
import Javascript from "./components/Javascript";
import Angular from "./components/Angular";
import ReactJs from "./components/ReactJs";
import NavBar from "./components/NavBar";
import Jsxpage from "./components/child-components/Jsxpage";
import Props from "./components/child-components/Props";
import PlainLayout from "./layouts/PlainLayout";
import SidebarLayout from "./layouts/SidebarLayout";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route element={<PlainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="html" element={<Html />} />
          <Route path="css" element={<Css />} />
          <Route path="javascript" element={<Javascript />} />
          <Route path="angular" element={<Angular />} />
        </Route>

        {/* Nested layout route with sidebar */}
        <Route path="react-js" element={<SidebarLayout />}>
          <Route index element={<ReactJs />} />
          <Route path="jsxpage" element={<Jsxpage />} />
          <Route path="props" element={<Props />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
