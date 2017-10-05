import React from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import LoggedIn from './LoggedIn';
import PageWrap from './PageWrap';
import styles from './../styles/Home.css';
import SearchFlights from './SearchFlights';
import UserList from './UserList';
import UserName from './UserName';
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

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterUserList : state
  }
}

export default connect(mapStateToProps)(Home);
