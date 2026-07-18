import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        🏪 Collector Hub
      </div>

      <div className="nav-links">

        <NavLink to="/">
          Marketplace
        </NavLink>

        <NavLink to="/community">
          Community
        </NavLink>

        <NavLink to="/collection">
          My Collection
        </NavLink>

      </div>

    </nav>
  );
};

export default Navbar;