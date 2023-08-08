import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Router from "./components/Router.jsx";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <>
      <Navbar token={token} />
      <Router setToken={setToken} />
    </>
  );
};

export default App;
