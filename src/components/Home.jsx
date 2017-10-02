import React from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import LoggedIn from './LoggedIn';
import PageWrap from './PageWrap';
import styles from './../styles/Home.css';
import SearchFlights from './SearchFlights';
import UserName from './UserName';

class Home extends React.Component {
  render() {
    return(
      <div className = {styles.home}>
        <Route path='/loggedin' exact component={PageWrap(LoggedIn)}></Route>
        <Route path='/' exact component={PageWrap(LogIn)}></Route>
        <SearchFlights />
        <UserName />
      </div>
    );
  }
}

export default Home;
