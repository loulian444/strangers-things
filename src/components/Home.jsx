import { useEffect, useState } from "react";

const Home = ({ apiUrl, token }) => {
  const [products, setProducts] = useState(null);
  const [randomProductNumber, setRandomNumber] = useState(0);

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
      const posts = body.data.posts;

      setProducts(body.data.posts);
      setRandomNumber(Math.floor(Math.random() * posts.length));
    };

    fetchAllProducts();
  }, []);

  return (
    <section id="homeSection">
      <h1>Featured Item!</h1>
      {products ? (
        <section className="productSection" id="featuredProduct">
          <h2 className="productTitle">
            <b>{products[randomProductNumber].title}</b>
          </h2>
          <p>
            <b>Seller</b>: {products[randomProductNumber].author.username}
          </p>
          <p>
            <b>Price</b>: {products[randomProductNumber].price}
          </p>
          <p>
            <b>Description</b>: {products[randomProductNumber].description}
          </p>
          <p>
            <b>Location</b>: {products[randomProductNumber].location}
          </p>
          <p>
            <b>Delivery</b>:{" "}
            {products[randomProductNumber].willDeliver ? "yes" : "no"}
          </p>
        </section>
      ) : null}
    </section>
  );
};

export default Home;
