import { useEffect, useState } from "react";
import SellForm from "./SellForm.jsx";

const Sell = ({ apiUrl, token }) => {
  console.log(token);
  const [productInfo, setProductInfo] = useState(null);

  console.log(productInfo);

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

        console.log(result);
      } catch (error) {
        alert(error);
      }
    };

    productInfo ? makePost() : null;
  }, [productInfo]);

  return (
    <>
      <SellForm setProductInfo={setProductInfo} />
    </>
  );
};

export default Sell;
