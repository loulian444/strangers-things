import { useEffect, useState } from "react";
import SellForm from "./SellForm.jsx";
import YourItems from "./YourItems.jsx";

const Sell = ({ apiUrl, token }) => {
  const [productInfo, setProductInfo] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [changesHappened, setChangesHappened] = useState(false);

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

        setChangesHappened(true);
      } catch (error) {
        alert(error);
      }
    };

    productInfo ? makePost() : null;
  }, [productInfo]);

  return (
    <>
      {successMessage ? <p>{successMessage}</p> : null}
      <SellForm setProductInfo={setProductInfo} />
      <YourItems
        changesHappened={changesHappened}
        setChangesHappened={setChangesHappened}
        apiUrl={apiUrl}
        token={token}
      />
    </>
  );
};

export default Sell;
