import React from "react";
import { Link } from "react-router-dom";
import "./App";

function Home() {
  return (
    <div>
      <h1 className="host">
        <Link to="/Host">Host</Link>
      </h1>
      <h1 className="gest">
        {" "}
        <Link to="/gest">gest</Link>
      </h1>
    </div>
  );
}
export default Home;
