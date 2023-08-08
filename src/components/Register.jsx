import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <form>
        <label>
          Username: <input type="text" />
        </label>
        <br />
        <label>
          Password: <input type="password" />
        </label>
        <br />
        <button>Register</button>
      </form>
      <br />
      <Link to={"/login"}>Already a User? Login</Link>
    </>
  );
};

export default Register;
