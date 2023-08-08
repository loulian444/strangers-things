import { Routes, Route } from "react-router-dom";
import Marketplace from "./Marketplace.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Sell from "./Sell.jsx";

const Router = ({ setToken }) => {
  const apiUrl =
    "https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf";
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Marketplace apiUrl={apiUrl} />} />
      <Route
        path="/login"
        element={<Login apiUrl={apiUrl} setToken={setToken} />}
      />
      <Route path="/register" element={<Register apiUrl={apiUrl} />} />
      <Route path="/sell" element={<Sell />} />
    </Routes>
  );
};

export default Router;
