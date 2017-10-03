import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

import fetch from "isomorphic-fetch";

const API_KEY = "AIzaSyDU0sK531yzL7Mu5NuLYYkorxExkmi_A44";


export const requestFlight = (request) => ({
  type: types.REQUEST_FLIGHT,
  {
  "request": {
    "passengers": {
      "kind": "qpxexpress#passengerCounts",
      "adultCount": integer,
      "childCount": integer,
      "infantInLapCount": integer,
      "infantInSeatCount": integer,
      "seniorCount": integer
    },
    "slice": [
      {
        "kind": "qpxexpress#sliceInput",
        "origin": string,
        "destination": string,
        "date": string,
        "maxStops": integer,
        "maxConnectionDuration": integer,
        "preferredCabin": string,
        "permittedDepartureTime": {
          "kind": "qpxexpress#timeOfDayRange",
          "earliestTime": string,
          "latestTime": string
        },
        "permittedCarrier": [
          string
        ],
        "alliance": string,
        "prohibitedCarrier": [
          string
        ]
      }
    ],
    "maxPrice": string,
    "saleCountry": string,
    "ticketingCountry": string,
    "refundable": boolean,
    "solutions": integer
  }
}
});
