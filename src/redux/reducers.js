import { SET_TRIP } from "./actions";

const initialState = {
  trip: {
    day: 1,
    date: "",
    location: [],
  },
};

function tripReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TRIP:
      return { ...state, trip: action.payload };
    default:
      return state;
  }
}

export default tripReducer;
