import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ setLoginInfo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmitHandler = (event) => {
    event.preventDefault();
    setLoginInfo({
      username,
      password,
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={loginSubmitHandler}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
      <br />
      <Link to={"/register"}>Not a User? Register</Link>
    </>
  );
};

export default LoginForm;
