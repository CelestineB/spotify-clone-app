export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Removing after developing
  //token:
  //  "BQCylZggeX0Mdxqz1GdBT2Orl1AXdSD0RLtMDXGODNyyJBfZlrQE9n_qxO0LEz5YyGf2awb_XTQ-yKUn4qHImV-U76tRrVkh9YeuXxZsDvYc8Qvs2VEqDLLbMnoRj6NW80o420w2dNIOvWppNLgC6zSd2509pvXNL7iuQagc8WhldV3n",
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
