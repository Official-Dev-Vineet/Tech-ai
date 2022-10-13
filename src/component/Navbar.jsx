import "./navbar.css";
import { NavLink, Link } from "react-router-dom";
import link from "../extern";
import { useState } from "react";

const Navbar = () => {
  const active = "nav-active";
  const [isCheck, setIsChecked] = useState(true);
  

  return (
    <nav className="flex-between">
      <Link to="home">
        {" "}
        <div className="logo">AI Tech</div>
      </Link>
      <ul
        className={`nav-links flex-center flex-gp-sm && ${
          isCheck ? "activeMenu" : ""
        }`}
      >
        {link.map(({ name, path }, index) => {
          return (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? active : undefined)}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="bars" onClick={() => setIsChecked(pre => !pre )}>
        <span>&#9781;</span>
      </div>
    </nav>
  );
};
export default Navbar;
