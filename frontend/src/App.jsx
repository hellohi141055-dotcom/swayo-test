import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome.jsx";
import Categories from "./pages/Categories.jsx";
import Detail from "./pages/Detail.jsx";
import Detect from "./pages/Detect.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detect" element={<Detect />} />
      </Routes>
    </BrowserRouter>
  );
}
