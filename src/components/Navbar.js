import React from "react";

function Navbar({ totalCounters }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-light m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
