import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <p>{props.passengers}</p>
      <p>{props.origin}</p>
      <p>{props.destination}</p>
      <p>{props.date}</p>
    </div>
  );
}

Ticket.propTypes = {
  passengers: PropTypes.string,
  origin: PropTypes.string,
  destination: PropTypes.string,
  date: PropTypes.string
};

export default Ticket;
