export const GET_POST = "GET_POST";
export const GET_TREND = "GET_TREND";
export const GET_TwiUser = "GET_TwiUser";

function getUser(data) {
  return {
    type: GET_TwiUser,
    data: data,
  };
}
function getTwipost(data) {
  return {
    type: GET_POST,
    data: data,
  };
}
export function getTwipostAction() {
  return (dispatch) => {
    fetch(
      "https://twitterfetch.p.rapidapi.com/location?latitude=22.5726&longitude=88.3639&radius=12km",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "twitterfetch.p.rapidapi.com",
          "x-rapidapi-key":
            "1b661df6f8msh948a3f3406fe630p11da3ajsn95eeb1e38704",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        dispatch(getTwipost(response));
      })
      .catch((err) => {
        console.error(err);
      });
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
