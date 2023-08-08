import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterForm = ({ setRegisterInfo }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      setRegisterInfo({
        username,
        password,
      });
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } else {
      alert(`password does not match`);
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={submitHandler}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
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
            required
          />
        </label>
        <br />
        <label>
          Confirm Password:{" "}
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button>Register</button>
      </form>
      <br />
      <Link to={"/login"}>Already a User? Login</Link>
    </>
  );
};

export default RegisterForm;
