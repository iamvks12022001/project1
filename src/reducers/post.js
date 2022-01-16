const initialState = {
  post: 0,
};

export function post(state = initialState, action) {
  console.log("in post render");
  switch (action.type) {
    //action for adding
    case "ADD":
      const temp = state.post + 1;
      return {
        ...state,
        post: temp,
      };
    default:
      return {
        ...state,
      };
  }
}
