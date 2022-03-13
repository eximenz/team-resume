import React from "react";
import PropTypes from "prop-types";
//import { useHistory } from "react-router-dom";
/* eslint-disable jsx-a11y/anchor-is-valid */

const ProgressBar = ({ progress = 0, type = "strip", color = "success" }) => {
    if (type==="circle") {
        document.documentElement.style.setProperty("--circle-bar-text-color", progress<20?"red":progress<40?"blue":"green");
        document.documentElement.style.setProperty("--circle-bar-progress", (360/200)*progress + "deg");
    }
    return (
        <>
        {type !=="circle" && (
        <div className="progress">
            <div
                className={`progress-bar bg-${color} b-3 ${
                    type === "strip"
                        ? "progress-bar-striped "
                        : type === "animate"
                        ? "progress-bar-striped progress-bar-animated "
                        : ""
                }`}
                role="progressbar"
                style={{ width: progress + "%", height: "20px" }}
                aria-valuenow={progress}
                aria-valuemin="0"
                aria-valuemax="100"
            >
                {progress}%
            </div>
        </div>)}
        {type ==="circle" &&
        (<div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill"></div>
          </div>
          <div className="mask half">
            <div className="fill"></div>
          </div>
          <div className="inside-circle"> {progress}% </div>
        </div>
      </div>)}
            </>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number,
    type: PropTypes.string,
    color: PropTypes.string
};

export default ProgressBar;
