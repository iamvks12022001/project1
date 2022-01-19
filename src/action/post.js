export const GET_TREND = "GET_TREND";
export const GET_TwiUser = "GET_TwiUser";
export const GET_TwiTrend = "GET_TwiTrend";

function getUser(data) {
  return {
    type: GET_TwiUser,
    data: data,
  };
}

function getTwitrend(data) {
  return {
    type: GET_TREND,
    data: data,
  };
}

export function getTwitrendAction(searchTrend) {
  return (dispatch) => {
    fetch(`https://twitter-trend.p.rapidapi.com/trend/${searchTrend}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "twitter-trend.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_KEY_ID,
      },
    })
      .then((response) => response.json())
      .then((response) => response.slice(0, Math.min(response.length, 15)))
      .then((response) => {
        dispatch(getTwitrend(response));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function getUserAction(searchUser) {
  return (dispatch) => {
    fetch(`https://twitterfetch.p.rapidapi.com/user/${searchUser}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "twitterfetch.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_KEY_ID,
      },
    })
      .then((response) => response.json())

      .then((response) => {
        dispatch(getUser(response));
      })

      .catch((err) => {
        console.error(err);
      });
  };
}

function getTrendTweetAction(data) {
  return {
    type: GET_TwiTrend,
    data: data,
  };
}
export function getTrendtweets(name) {
  return (dispatch) => {
    fetch(`https://twitterfetch.p.rapidapi.com/hashtag/${name}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "twitterfetch.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_KEY_ID,
      },
    })
      .then((response) => response.json())

      .then((response) => {
        dispatch(getTrendTweetAction(response));
      })

      .catch((err) => {
        console.error(err);
      });
  };
}
