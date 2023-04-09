import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="header">
      <h1>File Upload And Download</h1>
      <nav>
        {location.pathname !== "/" && (
          <>
            <Link to="/home">Home</Link>
            <Link to="/list">List</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Header;
