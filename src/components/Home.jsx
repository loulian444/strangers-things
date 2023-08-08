const Home = ({ products }) => {
  const randomProductNumber = Math.floor(Math.random() * products.length);

  return (
    <section id="homeSection">
      <h1>Featured Item!</h1>
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
    </section>
  );
};

export default Home;
