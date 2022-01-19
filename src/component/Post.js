import React, { useState } from "react";
import { connect } from "react-redux";
import {
  getTwitrendAction,
  getUserAction,
  getTrendtweets,
} from "../action/post";

function Post(props) {
  var [searchUser, setUser] = useState("");
  var [searchTrend, setTrend] = useState("");
  var [trendTweet, setTrendTweett] = useState("");

  const handleSearchClick = () => {
    const { dispatch } = props;
    dispatch(getUserAction(searchUser));
  };

  const handleSearch = (e) => {
    var searchText = e.target.value;
    setUser(searchText);
  };

  //for finding trends of a country
  const handleTrendClick = () => {
    const { dispatch } = props;
    dispatch(getTwitrendAction(searchTrend));
  };

  const handleTrend = (e) => {
    var searchText = e.target.value;
    setTrend(searchText);
  };

  // useEffect(() => {
  //   //const { dispatch } = props;
  //   // dispatch(getTwitrendAction());
  // }, []);

  const { Twipost, Twitrend, TrendPost } = props.twidata;

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

      <div>
        <input placeholder="country_name" onChange={handleTrend} />
        <button onClick={handleTrendClick} />
      </div>
      {Twitrend &&
        Twitrend.map((ele, index) => {
          return (
            <div>
              trend {index} is {ele.Trend.name}
              <div>
                <button
                  onClick={() => {
                    setTrendTweett(ele.Trend.name);
                    props.dispatch(getTrendtweets(ele.Trend.name));
                  }}
                >
                  {" "}
                  Click here To get more tweets in this trend !
                </button>
              </div>
              <div>
                {trendTweet === ele.Trend.name &&
                  Array.isArray(TrendPost) &&
                  TrendPost.map((ele, index) => {
                    console.log("aaaaaa", TrendPost.length);
                    return (
                      <div>
                        post {index} is {ele.text} by {ele.user_screen_name} and
                        no of retweet {ele.retweet_count}
                      </div>
                    );
                  })}
              </div>
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
