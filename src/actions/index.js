import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";
import fetch from "isomorphic-fetch";
import moment from "moment";


const API_KEY = "AIzaSyDU0sK531yzL7Mu5NuLYYkorxExkmi_A44";
const flightId = v4();



export const requestFlight = (flightId) => ({
  type: types.SEARCH_FLIGHTS,
  flightId : flightId,
});

export function getFlight(dispatch) {
  const parameters = {
  request: {
    slice: [
      {
        origin: "pdx",
        destination: "",
        date: moment().format('YYYY-MM-DD')
      }
    ],
    passengers: {
      adultCount: 1,

    },
    solutions: 20,
  }
};

  const options = {
    method: "POST",
    headers: {'ContentType': 'application/json'},
    body : JSON.stringify(parameters)
  };

  return function (dispatch) {
    dispatch(requestFlight());
    console.log("start");
    console.log(options);

    return
    fetch("https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDU0sK531yzL7Mu5NuLYYkorxExkmi_A44", {options, parameters}

    ).then(response => response.json(),
    error => console.log("error", error),
  ).then(function(json) {
    if (json.id) {
    const flight = json;
    console.log("bob");
    dispatch(recieveFlight(flight));
  } else {
    console.log("error");
  }
    });
};
}
export const recieveFlight = (flight) => ({
  type: types.RECIEVE_FLIGHT,
  flight,

});
