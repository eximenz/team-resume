import React from "react";
import { Link } from "react-router-dom";

const NavBarItems = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-0">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Главная
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/developers">
                Разработчики
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                Избранное
              </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default NavBarItems;
