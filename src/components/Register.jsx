import { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";

const Register = ({ apiUrl }) => {
  const [registerInfo, setRegisterInfo] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const registerUser = async () => {
      try {
        const response = await fetch(`${apiUrl}/users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: registerInfo,
          }),
        });

        const result = await response.json();

        result.data
          ? setSuccessMessage(result.data.message)
          : setErrorMessage(result.error.message);
      } catch (error) {
        alert(error);
      }
    };

    registerInfo ? registerUser() : null;
  }, [registerInfo]);

  return (
    <>
      {successMessage ? <p>{successMessage}</p> : <p>{errorMessage}</p>}
      <RegisterForm setRegisterInfo={setRegisterInfo} />
    </>
  );
};

export default Register;
