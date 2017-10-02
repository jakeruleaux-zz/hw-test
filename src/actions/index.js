import * as types from "./../constants/ActionTypes";

import fetch from "isomorphic-fetch";

export function fetchFlight() {
  return function(dispatch) {
    const RapidAPI = require('rapidapi-connect');
    const rapid = new RapidAPI(*PROJECT*, *KEY*);

rapid.call('GoogleFlightsAPI', 'searchSingleTrip', {
	'apiKey': 'AIzaSyDU0sK531yzL7Mu5NuLYYkorxExkmi_A44',
	'origin': 'pdx',
	'destination': 'nyc',
	'passengersAdultCount': '1',
	'passengersChildCount': '0',
	'fromDate': '2017-09-29 00:00:00'

}).on('success', (payload)=>{
	 /*YOUR CODE GOES HERE*/
}).on('error', (payload)=>{
	 /*YOUR CODE GOES HERE*/
});

  }
}
