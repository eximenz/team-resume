import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardButton = ({ _id }) => {
  return (
    <div className="col-4 d-flex align-items-center justify-content-center">
      <Link to={`/developers/${_id}`}>
        <button type="button" className="btn btn-outline-secondary">
          Открыть карточку разработчика
        </button>
      </Link>
    </div>
  );
};

CardButton.propTypes = {
  _id: PropTypes.string.isRequired,
};

export default CardButton;
