import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

import fetch from "isomorphic-fetch";

// export function fetchFlight() {
//   return function(dispatch) {
//     const RapidAPI = require('rapidapi-connect');
//     const rapid = new RapidAPI(*PROJECT*, *KEY*);
//
//     /*add this to your html -> <script src="https://storage.googleapis.com/code-snippets/rapidapi.min.js"></script> */
//     var rapid = new RapidAPI("default-application_59cd20cce4b04627fc656624", "3243abc6-233b-4a54-b047-56ccdd892cc1");
//
//     rapid.call('GoogleFlightsAPI', 'searchSingleTrip', {
//     	'apiKey': '',
//     	'origin': 'pdx',
//     	'destination': 'jfk',
//     	'passengersAdultCount': '1',
//     	'passengersChildCount': '0',
//     	'fromDate': '2017-10-30 00:00:00'
//
//     }).on('success', function (payload) {
//     	 /*YOUR CODE GOES HERE*/
//     }).on('error', function (payload) {
//     	 /*YOUR CODE GOES HERE*/
//     });
//   }
// }

export const requestFlight = (flightId) => ({
  type: types.REQUEST_FLIGHT,
  flightId
});

export function getFlight(dispatch) {
  let name;
    return fetch("https:www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDU0sK531yzL7Mu5NuLYYkorxExkmi_A44").then(response => name)
    console.log("hello");
}
