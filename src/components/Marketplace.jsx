import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

const Marketplace = ({ apiUrl, token }) => {
  const [products, setProducts] = useState([]);
  const [changesHappened, setChangesHappened] = useState(false)

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await fetch(`${apiUrl}/posts`);
      const body = await response.json();

      setProducts(body.data.posts);
    };

    fetchAllProducts();

    setChangesHappened(false);
  }, [changesHappened]);

  const deleteHandler = (id) => {
    const deletePost = async () => {
      try {
        const response = await fetch(`${apiUrl}/posts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await response.json();

        console.log(result);
      } catch (error) {
        alert(error);
      }
    }

    deletePost()
    setChangesHappened(true)
  };
  
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
                {/* {product.isAuthor ? <button>Delete</button> : null} */}
                <button onClick={() => deleteHandler(product._id)}>Delete</button>
              </section>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Marketplace;
