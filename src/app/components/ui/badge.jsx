import React from "react";
import PropTypes from 'prop-types';
//import { useHistory } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Badge = ( { content="Привет мир!", type="rounded", color="success" } ) => {
    return (
        <span
            className={`badge bg-${
                type === "rounded"
                    ? color + " rounded-pill border-radius-2"
                    : color
            } m-1`}
        >
            {content}
        </span>
    );
}

Badge.propTypes = {
    content: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string
};

export default Badge;