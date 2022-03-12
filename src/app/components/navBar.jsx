import React from "react";
import NavBarItems from "./navBarItems";

const NavBar = () => {
  return (
    <div className="container mb-4 mt-4">
      <div className="row">
        <div className="col d-flex align-items-center">
          <NavBarItems />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
