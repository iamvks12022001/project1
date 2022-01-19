export const GET_TREND = "GET_TREND";
export const GET_TwiUser = "GET_TwiUser";

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

export function getTwitrendAction() {
  return (dispatch) => {
    fetch("https://twitter-trend.p.rapidapi.com/trend/india", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "twitter-trend.p.rapidapi.com",
        "x-rapidapi-key": "1b661df6f8msh948a3f3406fe630p11da3ajsn95eeb1e38704",
      },
    })
      .then((response) => response.json())
      .then((response) => response.slice(0, 15))
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
        "x-rapidapi-key": "1b661df6f8msh948a3f3406fe630p11da3ajsn95eeb1e38704",
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
