import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex">
      <section className="flex">
        <h1>Company Name</h1>

        <section id="linkSection">
          <Link to={"/"}>Home</Link>
          <Link to={"/posts"}>Marketplace</Link>
        </section>
      </section>

      <section>
        <Link to={"/login"}>Login</Link>
      </section>
    </nav>
  );
};

export default Navbar;
