import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const setActive = (isActive: boolean) =>
    `nav-item nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) => setActive(isActive)}
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink className={({ isActive }) => setActive(isActive)} to="/dc">
            DC
          </NavLink>

          <NavLink className={({ isActive }) => setActive(isActive)} to="/search">
            Search
          </NavLink>

          <NavLink className={({ isActive }) => setActive(isActive)} to="/hero">
            Hero
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end p-2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Luis</span>

          <button className="nav-item nav-link btn">Logout</button>
        </ul>
      </div>
    </nav>
  );
};
