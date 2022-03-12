import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BreadCrumbs = ({ name }) => {
  return (
    <div className="p-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="text-secondary" to="/">
              Главная
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="text-secondary" to="/developers">
              Все разработчики
            </Link>
          </li>

          <li className="breadcrumb-item">
            {name}
          </li>
        </ol>
      </nav>
    </div>
  );
};

BreadCrumbs.propTypes = {
  name: PropTypes.string.isRequired,
};

export default BreadCrumbs;
