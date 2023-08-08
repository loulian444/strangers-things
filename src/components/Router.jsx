import { Routes, Route } from "react-router-dom";
import Marketplace from "./Marketplace.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Marketplace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Router;
