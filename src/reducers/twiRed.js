import { GET_TREND } from "../action/post";
import { GET_TwiUser } from "../action/post";
const initialState = {
  TwiUser: [], //have all the of every post
  Twipost: [], //have data of post and created at and usename
  Twitrend: [],
};

export function twidata(state = initialState, action) {
  console.log("in post render");
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
    default:
      return {
        ...state,
      };
  }
}
