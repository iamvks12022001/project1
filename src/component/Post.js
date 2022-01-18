import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import {
  getTwipostAction,
  getTwitrendAction,
  getUserAction,
} from "../action/post";

function Post(props) {
  var [searchUser, setUser] = useState("");

  const handleSearchClick = useCallback(() => {
    const { dispatch } = props;
    dispatch(getUserAction(searchUser));
  }, [searchUser]);

  const handleSearch = (e) => {
    var searchText = e.target.value;
    setUser(searchText);
  };
  useEffect(() => {
    const { dispatch } = props;
    dispatch(getTwipostAction());
    dispatch(getTwitrendAction());
  }, []);

  const { arr, arr1 } = props;
  console.log("arr", arr, "arr1", arr1);
  return (
    <div>
      <div>
        <input placeholder=" User Name" onChange={handleSearch} />
        <button onClick={handleSearchClick} />
      </div>
      {arr &&
        arr.map((ele, index) => {
          return (
            <div>
              post {index} is {ele.text}
            </div>
          );
        })}
      {arr1 &&
        arr1.map((ele, index) => {
          return (
            <div>
              post {index} is {ele.Trend.name}
            </div>
          );
        })}
    </div>
  );
}

function mapStatetoProps({ twidata }) {
  return {
    arr: twidata.Twipost,
    arr1: twidata.Twitrend,
  };
}

const connectedCompo = connect(mapStatetoProps)(Post);
export default connectedCompo;
