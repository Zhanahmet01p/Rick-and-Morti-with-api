import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="flex space-x-4 justify-center my-5">
        <li>
          <Link to="/character" className="text-blue-500 hover:text-blue-700">
            Characters
          </Link>
        </li>
        <li>
          <Link to="/locations" className="text-blue-500 hover:text-blue-700">
            Locations
          </Link>
        </li>
        <li>
          <Link to="/episodes" className="text-blue-500 hover:text-blue-700">
            Episodes
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
