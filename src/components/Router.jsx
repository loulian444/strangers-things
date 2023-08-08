import { Routes, Route } from "react-router-dom";
import Marketplace from "./Marketplace.jsx";
import Home from "./Home.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Marketplace />} />
    </Routes>
  );
};

export default Router;
