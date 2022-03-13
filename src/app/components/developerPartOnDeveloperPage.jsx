import React from "react";
import PropTypes from "prop-types";
import FavoriteButton from "./favoriteButton";

const DeveloperPartOnDeveloperPage = ({
  src,
  alt,
  name,
  description,
  price,
}) => {
  return (
    <>
      <div className="col-5">
        <img src={src} alt={alt} />
      </div>
      <div className="col">
        <h4 className="mt-5 mb-2">{name}</h4>
        <div>{description}</div>
        <h5 className="mt-5">Цена: {price} $ за час</h5>
      </div>
      <div className="col d-flex flex-column justify-content-around">
        <FavoriteButton/>
      </div>
    </>
  );
};

DeveloperPartOnDeveloperPage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default DeveloperPartOnDeveloperPage;
