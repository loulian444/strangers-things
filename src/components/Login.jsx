import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";

const Login = ({ apiUrl, setToken }) => {
  const [loginInfo, setLoginInfo] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loginUser = async () => {
      try {
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

        if (result.data) {
          setSuccessMessage(result.data.message);
          setToken(result.data.token);
        } else {
          setErrorMessage(result.error.message);
        }
      } catch (error) {
        alert(error);
      }
    };

    loginInfo ? loginUser() : null;
  }, [loginInfo]);

  return (
    <>
      {successMessage ? <p>{successMessage}</p> : <p>{errorMessage}</p>}
      <LoginForm setLoginInfo={setLoginInfo} />
    </>
  );
};

export default Login;
