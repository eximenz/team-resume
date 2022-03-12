import React from "react";
import PropTypes from "prop-types";
import CardMainPage from "./cardMainPage/cardMainPage";

const CardBody = ({ src, alt, name, description, price }) => {
  return (
    <>
    <div className="col-8">
      <div className="card mb-3 p-0">
        <div className="row g-0">
          <div className="col-md-4" id="root">
          <CardMainPage imageUrl={src} alt={alt}/>
            {/* <img src={src} className="img-fluid rounded-start" alt={alt} /> */}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                Стоимость <b>{price}</b> $ за час.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

CardBody.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardBody;
