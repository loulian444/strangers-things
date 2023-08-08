import { useState } from "react";
import SellForm from "./SellForm.jsx";

const Sell = ({ token }) => {
  console.log(token);
  const [productInfo, setProductInfo] = useState({});
  
  console.log(productInfo);

  return (
    <>
      <SellForm setProductInfo={setProductInfo} />
    </>
  );
};

export default Sell;
