import { GET_POST } from "../action/post";
import { GET_TREND } from "../action/post";
import { GET_TwiUser } from "../action/post";
const initialState = {
  TwiUser: [],
  Twipost: [],
  Twitrend: [],
};

export function twidata(state = initialState, action) {
  console.log("in post render");
  switch (action.type) {
    //action for adding
    case GET_POST:
      return {
        ...state,
        Twipost: action.data,
      };
    case GET_TREND:
      return {
        ...state,
        Twitrend: action.data,
      };
    case GET_TwiUser:
      initialState.TwiUser.push(action.data);
      return {
        ...state,
        TwiUser: initialState.TwiUser,
      };
    default:
      return {
        state,
      };
  }
}
