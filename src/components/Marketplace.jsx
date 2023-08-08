import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const Marketplace = () => {
  const apiUrl =
    "https://strangers-things.herokuapp.com/api/2306-fsa-et-web-ft-sf";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await fetch(`${apiUrl}/posts`);
      const body = await response.json();

      setProducts(body.data.posts);
    };

    fetchAllProducts();
  }, []);

  console.log(products);

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
                  <b>Seller</b>: {product.author.username}
                </p>
                <p>
                  <b>Price</b>: {product.price}
                </p>
                <p>
                  <b>Description</b>: {product.description}
                </p>
                <p>
                  <b>Location</b>: {product.location}
                </p>
                <p>
                  <b>Delivery</b>: {product.willDeliver ? "yes" : "no"}
                </p>
              </section>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Marketplace;
