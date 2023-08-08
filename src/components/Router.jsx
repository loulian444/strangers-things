import { Routes, Route } from "react-router-dom";
import Marketplace from "./Marketplace.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Marketplace />} />
    </Routes>
  );
};

export default Router;
