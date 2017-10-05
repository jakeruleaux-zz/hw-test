import React from 'react';
import { Route } from 'react-router-dom';
import styles from './../styles/Home.css';
import SearchFlights from './SearchFlights';
import TicketList from './TicketList';
import {connect} from 'react-redux';
import Header from './Header';


class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className = {styles.home}>
        <Header />
        <SearchFlights />
        <TicketList
          ticketList = {this.props.masterTicketList}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList : state
  }
}

export default connect(mapStateToProps)(Home);
