import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import UseState1 from "./pages/UseState1";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/UseState1" element={<UseState1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
