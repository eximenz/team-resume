import React from "react";
import PropTypes from "prop-types";
import CardBody from "./cardBody";
import CardButton from "./cardButton";
import FavoriteButton from "./favoriteButton";

const DeveloperCard = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item._id} className="row">
          <CardBody {...item} />
          <CardButton {...item} />
          <FavoriteButton/>
        </div>
      ))}
    </>
  );
};

DeveloperCard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default DeveloperCard;
