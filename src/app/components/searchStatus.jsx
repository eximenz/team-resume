import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  return (
    <div className="h6 mb-4">
      Количество разработчиков, найденных по запросу: {length}
    </div>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;
