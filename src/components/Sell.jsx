import { useEffect, useState } from "react";
import SellForm from "./SellForm.jsx";

const Sell = ({ apiUrl, token }) => {
  const [productInfo, setProductInfo] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const makePost = async () => {
      try {
        const response = await fetch(`${apiUrl}/posts`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: productInfo,
          }),
        });

        const result = await response.json();

        result.success
          ? setSuccessMessage("Successfully Posted Item")
          : setSuccessMessage("Post Failed");
      } catch (error) {
        alert(error);
      }
    };

    productInfo ? makePost() : null;
  }, [productInfo]);

  return (
    <>
      {successMessage ? <p>{successMessage}</p>: null}
      <SellForm setProductInfo={setProductInfo} />
    </>
  );
};

export default Sell;
