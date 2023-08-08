import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

const YourItems = ({ apiUrl, token, changesHappened, setChangesHappened }) => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const response = await fetch(`${apiUrl}/posts`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const body = await response.json();
      const products = body.data.posts;
      setMyProducts(products.filter((product) => product.isAuthor));
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

        !result.success ? alert(result.error.message) : null;
      } catch (error) {
        alert(error);
      }
    };

    deletePost();
    setChangesHappened(true);
  };

  const updateHandler = (event, id) => {
    event.preventDefault();
    const updatedItem = {
      title: event.target.title.value,
      price: event.target.price.value,
      description: event.target.description.value,
      location: event.target.location.value,
      willDeliver: event.target.willDeliver.value,
    };

    const updatePost = async () => {
      try {
        const response = await fetch(`${apiUrl}/posts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            post: updatedItem,
          }),
        });

        const result = await response.json();

        console.log(result);
      } catch (error) {
        alert(error);
      }
    };

    updatePost();
    setChangesHappened(true);
  };

  return (
    <>
      <h1>Your Items</h1>
      <Grid container spacing={2}>
        {myProducts.map((product) => {
          return (
            <Grid item xs={3} key={product._id}>
              <form onSubmit={() => updateHandler(event, product._id)}>
                <label>
                  Title: <input name="title" defaultValue={product.title} />
                </label>
                <br />
                <label>
                  Price: <input name="price" defaultValue={product.price} />
                </label>
                <br />
                <label>
                  Description:{" "}
                  <input
                    name="description"
                    defaultValue={product.description}
                    required
                  />
                </label>
                <br />
                <label>
                  Location:{" "}
                  <input name="location" defaultValue={product.location} />
                </label>
                <br />
                <label>
                  Delivery:{" "}
                  <select name="willDeliver">
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </label>
                <br />

                <button>Update</button>
              </form>
              <button onClick={() => deleteHandler(product._id)}>Delete</button>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default YourItems;
