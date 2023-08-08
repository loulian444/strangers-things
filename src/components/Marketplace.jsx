import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const Marketplace = () => {
  const apiUrl =
    "https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf";

  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await fetch(`${apiUrl}/posts`);
      const body = await response.json();

      setProducts(body.data.posts);
    };

    fetchAllProducts();
  }, []);

  console.log(products);

  const detailsClickHandler = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };

  console.log(showDetails)

  return (
    <>
      <h1>market</h1>
      <Grid container spacing={2}>
        {products.map((product) => {
          return (
            <Grid item xs={3} key={product._id}>
              <section className="productSection">
                <p>
                  <b>{product.title}</b>
                </p>
                <p>
                  <b>Price</b>: {product.price}
                </p>
                <button onClick={detailsClickHandler}>
                  Details
                </button>
              </section>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Marketplace;
