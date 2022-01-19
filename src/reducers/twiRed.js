import { GET_TREND, GET_TwiUser, GET_TwiTrend } from "../action/post";

const initialState = {
  TwiUser: [], //have all the of every post
  Twipost: [], //have data of post and created at and usename
  Twitrend: [], //contain trending list
  TrendPost: [], //contain tweets of a trends
};

export function twidata(state = initialState, action) {
  console.log("in post reducer");
  switch (action.type) {
    case GET_TREND:
      return {
        ...state,
        Twitrend: action.data,
      };
    case GET_TwiUser:
      //  state.TwiUser.push(action.data);
      var new_Twiusers = [];
      var new_Twipost = [];
      const username = action.data.user_name;
      const userscreenname = action.data.user_screen_name;
      action.data.tweets.forEach((element) => {
        element.user_name = username;
        element.user_screen_name = userscreenname;
        new_Twipost.push(element);
      });

      state.TwiUser.forEach((ele) => {
        new_Twiusers.push(ele);
      });
      state.Twipost.forEach((ele) => {
        new_Twipost.push(ele);
      });
      new_Twiusers.push(action.data);

      return {
        ...state,
        TwiUser: new_Twiusers,
        Twipost: new_Twipost,
      };

    case GET_TwiTrend:
      return {
        ...state,
        TrendPost: action.data,
      };

    default:
      return {
        ...state,
      };
  }
}
