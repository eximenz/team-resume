import React, { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api";

const FavoriteButton = () => {
  const { developerId } = useParams();
  const [favorites, setFavorites] = useState([]);

  const handleClick = () => {
    API.developers.toFavorite(developerId).then((data) => {
      setFavorites(data);
    });
    console.log(favorites);
  };

  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={handleClick}
    >
      В избранное
    </button>
  );
};

export default FavoriteButton;
