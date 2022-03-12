import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SearchForm = ({ onGetValue }) => {
  const [value, setValue] = useState();

  return (
    <form className="container d-flex mb-3">
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="form-control me-2"
        type="search"
        name="searchForm"
        placeholder="Введите имя разработчика"
        aria-label="Search"
      />
      <Link to="/developers/">
        <button
          onClick={(e) => {
            onGetValue(value);
          }}
          className="btn btn-outline-secondary"
          type="submit"
        >
          Найти
        </button>
      </Link>
    </form>
  );
};

SearchForm.propTypes = {
  onGetValue: PropTypes.func,
};

export default SearchForm;
