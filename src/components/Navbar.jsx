import { Link } from "react-router-dom";

const Navbar = ({ token }) => {
  return (
    <nav className="flex">
      <section className="flex">
        <h1>Company Name</h1>

        <section id="linkSection">
          <Link to={"/"}>Home</Link>
          <Link to={"/posts"}>Marketplace</Link>
          {token ? <Link to={"/sell"}>Sell</Link> : null}
        </section>
      </section>

      <section>
        <Link to={"/login"}>Login</Link>
      </section>
    </nav>
  );
};

export default Navbar;
