const initialState = {
  post2: 0,
};

export function post2(state = initialState, action) {
  console.log("in post2 render");
  switch (action.type) {
    //action for adding
    case "SUB":
      const temp = state.post2 - 1;
      return {
        ...state,
        post2: temp,
      };
    default:
      return {
        ...state,
      };
  }
}
