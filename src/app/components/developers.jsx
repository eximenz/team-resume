import React, { useState, useEffect } from "react";
import api from "../api";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import _ from "lodash";
import SortByPrice from "./sortByPrice";
import DeveloperCard from "./developerCard";
import PropTypes from "prop-types";

const Developers = ({ valueForFiltrationBySearch }) => {
  const [stack, setStack] = useState();
  const [selectedStack, setSelectedStack] = useState();
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" });
  const [developers, setDevelopers] = useState();

  useEffect(() => {
    api.developers.fetchAll().then((data) => setDevelopers(data));
  }, []);

  useEffect(() => {
    api.stack.fetchAll().then((data) => setStack(data));
  }, []);

  const handleStackSelect = (item) => {
    setSelectedStack(item);
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  if (developers) {
    const filtereDeveloperdByDeveloper = valueForFiltrationBySearch
      ? developers.filter(
          (developers) =>
            developers.name.toLowerCase() ===
            valueForFiltrationBySearch.toLowerCase().trim()
        )
      : developers;

    const filteredDevelopers = selectedStack
      ? filtereDeveloperdByDeveloper.filter(
          (developers) => developers.stack._id === selectedStack._id
        )
      : filtereDeveloperdByDeveloper;

    const count = filteredDevelopers.length;

    const sortedDevelopers = _.orderBy(
      filteredDevelopers,
      [sortBy.path],
      [sortBy.order]
    );

    const clearFilter = () => {
      setSelectedStack();
    };

    return (
      <div className="container">
        <div className="row mb-3">
          {stack && (
            <div className="col-3">
              <GroupList
                selectedItem={selectedStack}
                items={stack}
                onItemSelect={handleStackSelect}
              />
              <button className="btn btn-secondary mt-2" onClick={clearFilter}>
                Очистить
              </button>
            </div>
          )}
          <div className="col-9">
            <div className="row">
              <div className="col-10">
                <SearchStatus length={count} />
              </div>
              <div className="col-2 d-flex justify-content-end">
                <SortByPrice onSort={handleSort} />
              </div>
            </div>
            <DeveloperCard data={sortedDevelopers} />
          </div>
        </div>
        <div>{/* футер какой нить */}</div>
      </div>
    );
  }
  return "loading...";
};

Developers.propTypes = {
  valueForFiltrationBySearch: PropTypes.string,
};

export default Developers;
