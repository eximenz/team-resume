import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import BreadCrumbs from "./breadСrumbs";
import DeveloperPartOnDeveloperPage from "./developerPartOnDeveloperPage";

const DeveloperPage = ({ id }) => {
  const [developerInfo, setDeveloperInfo] = useState();

  useEffect(() => {
    api.developers.getBy(id).then((data) => setDeveloperInfo(data));
  }, []);

  if (developerInfo) {
    return (
      <div className="container">
        <div>
          <BreadCrumbs
            className="row"
            {...developerInfo}
          />
        </div>
        <div className="row">
          <DeveloperPartOnDeveloperPage {...developerInfo} />
        </div>
      </div>
    );
  }

  return "loading...";
};

DeveloperPage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeveloperPage;
