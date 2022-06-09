export const SET_TRIP = "SET_TRIP";

export const setTrip = (trip) => (dispatch) => {
  dispatch({
    type: SET_TRIP,
    payload: trip,
  });
};
