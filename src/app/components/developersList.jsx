import React from "react";
import Developers from "./developers";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DeveloperPage from "./developerPage";

const ProductList = ({ valueForFiltrationBySearch }) => {
  const params = useParams();
  const { developerId } = params;

  return (
    <>
      {developerId ? (
        <DeveloperPage id={developerId} />
      ) : (
        <Developers valueForFiltrationBySearch={valueForFiltrationBySearch} />
      )}
    </>
  );
};

ProductList.propTypes = {
  valueForFiltrationBySearch: PropTypes.string,
};

export default ProductList;
