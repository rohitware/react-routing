import "./App.css";
import { Routes, Route } from "react-router";
import Html from "./components/Html";
import Css from "./components/Css";
import Javascript from "./components/Javascript";
import Angular from "./components/Angular";
import ReactJs from "./components/ReactJs";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route index element={<Html />} />
        <Route path="css" element={<Css />} />
        <Route path="javascript" element={<Javascript />} />
        <Route path="angular" element={<Angular />} />
        <Route path="react-js" element={<ReactJs />} />
      </Routes>
    </>
  );
}

export default App;
