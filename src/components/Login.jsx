import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label>
          Username: <input type="text" />
        </label>
        <br />
        <label>
          Password: <input type="password" />
        </label>
        <br />
        <button>Login</button>
      </form>
      <br />
      <Link to={"/register"}>Not a User? Register</Link>
    </>
  );
}

export default Login;
