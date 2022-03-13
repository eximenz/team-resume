import React from "react";
import { useParams } from "react-router-dom";
import API from "../api";

const FavoriteButton = () => {
  const { developerId } = useParams();

  const handleToggleFavorites = (id) => {
    API.developers.toFavorite(id);
  };

  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => handleToggleFavorites(developerId)}
    >
      В избранное
    </button>
  );
};

export default FavoriteButton;
