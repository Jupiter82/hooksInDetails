import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import UseState1 from "./pages/UseState1";
import UseState2 from "./pages/UseState2";
import UseState3 from "./pages/UseState3";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/UseState1" element={<UseState1 />}></Route>
        <Route path="/UseState2" element={<UseState2 />}></Route>
        <Route path="/UseState3" element={<UseState3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
