import constants from './../constants';

const { defaultState, types} = constants;

const searchFlights = { state = defaultState, action} => {
  let newState;
  let flight;
  let newFlight;

  switch (action.type) {
    case types.SEARCH_FLIGHTS:
      newState = {
        isFetching: true,
      }
      return newState;

    case types.RECIEVE_FLIGHT:
      newFlight = Object.assign({}, state, action.flight, {
        isFetching: false,
      });
      return newFlight;
    default:
      return state;
  }
};

export default searchFlights;
