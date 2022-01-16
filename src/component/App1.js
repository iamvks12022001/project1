import "./App.css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
function App1(props) {
  console.log("inside app 1111", props);

  //increase by 1 function
  //   const increase = () => {
  //     props.dispatch({ type: "ADD" });
  //   };
  const decrease = () => {
    props.dispatch({ type: "SUB" });
  };
  useEffect(() => {
    console.log("ccdm11");
  });

  return (
    <div>
      {/* <div className="App">APP value-{props.post.post}</div>
      <button onClick={increase} /> */}

      <div className="App">APP value111-{props.value}</div>
      <button onClick={decrease} />
    </div>
  );
}

export default App1;
