import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

function TicketList(props) {

  return (
    <div>
      {props.ticketList.map((ticket,index) =>
      <Ticket
        passengers={ticket.passengers}
        origin={ticket.origin}
        destination={ticket.destination}
        date={ticket.date}
        key={ticket.id}/>
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,

};

export default TicketList;
