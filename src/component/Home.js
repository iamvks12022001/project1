import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h1>Hello in Home page</h1>
      <Link to="/tweeter">
        <button> go to tweeter</button>
      </Link>
    </div>
  );
}
