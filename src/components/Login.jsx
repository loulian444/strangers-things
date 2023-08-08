import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";

const Login = ({ apiUrl }) => {
  const [loginInfo, setLoginInfo] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loginUser = async () => {
      const response = await fetch(`${apiUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: loginInfo,
        }),
      });

      const result = await response.json();

      console.log(result)

      result.data
        ? setSuccessMessage(result.data.message)
        : setErrorMessage(result.error.message);
    };

    loginInfo ? loginUser() : null;
  }, [loginInfo]);

  console.log(loginInfo);

  return (
    <>
      {successMessage ? <p>{successMessage}</p> : <p>{errorMessage}</p>}
      <LoginForm setLoginInfo={setLoginInfo} />
    </>
  );
};

export default Login;
