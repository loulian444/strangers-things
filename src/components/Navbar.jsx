import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex">
      <h1>Company Name</h1>
      <section id="linkSection">
        <Link to={"/"}>Home</Link>
        <Link to={"posts"}>Marketplace</Link>
      </section>
    </nav>
  );
};

export default Navbar;
