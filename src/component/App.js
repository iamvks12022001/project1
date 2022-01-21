import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Post from "./Post";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./Home";
function App(props) {
  console.log("inside app");

  useEffect(() => {
    console.log("inside app ccdm");
  }, []);

  return (
    <div>
      {console.log("inside app retun")}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweeter" element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

function mapStatetoProps(store) {
  console.log("inside app map to props");
  return {
    ...store,
  };
}

const connectedCompo = connect(mapStatetoProps)(App);
export default connectedCompo;
