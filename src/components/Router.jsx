import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Marketplace from "./Marketplace.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Sell from "./Sell.jsx";

const Router = ({ token, setToken }) => {
  const apiUrl =
    "https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf";

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            apiUrl={apiUrl}
            token={token}
          />
        }
      />
      <Route
        path="/posts"
        element={
          <Marketplace
            token={token}
            apiUrl={apiUrl}
          />
        }
      />
      <Route
        path="/login"
        element={<Login apiUrl={apiUrl} setToken={setToken} />}
      />
      <Route path="/register" element={<Register apiUrl={apiUrl} />} />
      <Route path="/sell" element={<Sell apiUrl={apiUrl} token={token} />} />
    </Routes>
  );
};

export default Router;
