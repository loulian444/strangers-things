const Home = ({ products }) => {
  const randomProductNumber = Math.floor(Math.random() * products.length);

  return (
    <>
      <h1>Featured Item!</h1>
      <section className="productSection">
        <p>
          <b>{products[randomProductNumber].title}</b>
        </p>
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
          <b>Delivery</b>: {products[randomProductNumber].willDeliver ? "yes" : "no"}
        </p>
      </section>
    </>
  );
};

export default Home;
