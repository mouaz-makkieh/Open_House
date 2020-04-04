import React from "react";
import { Link } from "react-router-dom";
import "./App";

function Home() {
  return (
    <div>
      <h1>
        <Link to="/Host">Host</Link>
      </h1>
      <h1>
        {" "}
        <Link to="/Post">post</Link>
      </h1>
    </div>
  );
}
export default Home;
