import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";
import fetch from "isomorphic-fetch";


const API_KEY = "AIzaSyDU0sK531yzL7Mu5NuLYYkorxExkmi_A44";
const flightId = v4();
const headers = {'Content-Type' : 'application/json'}


export const requestFlight = (flightId) => ({
  type: types.REQUEST_FLIGHT,
  flightId : flightId,
});

export function getFlight(dispatch) {
  return function (dispatch) {
    dispatch(requestFlight(flightId));
    console.log("start");
    console.log(headers);
  
    return
    fetch("https:www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDU0sK531yzL7Mu5NuLYYkorxExkmi_A44", headers).then(response => response.json(),
    console.log("prebob"),
    error => console.log("error", error)
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
export const recieveFlight = (flight, flightId) => ({
  type: types.RECIEVE_FLIGHT,
  flight,
  flightId,
});
