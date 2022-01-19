import React, { useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";
import { getTwitrendAction, getUserAction } from "../action/post";

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
    dispatch(getTwitrendAction());
  }, []);
  console.log("props", props);
  const { Twipost, Twitrend } = props.twidata;

  return (
    <div>
      <div>
        <input placeholder=" User Name" onChange={handleSearch} />
        <button onClick={handleSearchClick} />
      </div>
      {Twipost &&
        Twipost.map((ele, index) => {
          console.log("aaaaaa", Twipost.length);
          return (
            <div>
              post {index} is {ele.text}
            </div>
          );
        })}
      {Twitrend &&
        Twitrend.map((ele, index) => {
          return (
            <div>
              post {index} is {ele.Trend.name}
            </div>
          );
        })}
    </div>
  );
}

function mapStatetoProps(store) {
  return {
    ...store,
  };
}

const connectedCompo = connect(mapStatetoProps)(Post);
export default connectedCompo;
