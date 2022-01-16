import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";

import App1 from "../component/App1";
function App(props) {
  console.log("inside app", props);

  //increase by 1 function
  const increase = () => {
    props.dispatch({ type: "ADD" });
  };
  // const decrease = () => {
  //   props.dispatch({ type: "SUB" });
  // };
  useEffect(() => {
    console.log("ccdm");
  });

  return (
    <div>
      <div className="App">APP value-{props.post.post}</div>
      <button onClick={increase} />
      <App1 value={props.post2.post2} dispatch={props.dispatch} />
      {/* <div className="App">APP value-{props.post2.post2}</div>
      <button onClick={decrease} /> */}
    </div>
  );
}

function mapStatetoProps({ post, post2 }) {
  return {
    post,
    post2,
  };
}
//connecting App component to state
const connectedCompo = connect(mapStatetoProps)(App);
export default connectedCompo;
