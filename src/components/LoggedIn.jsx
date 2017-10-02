import React from 'react';
import LogInForm from './LogInForm';
import styles from './../styles/LoggedIn.css';
import SearchFlights from './SearchFlights';

class LoggedIn extends React.Component {
  render(){
    return (
      <div className = {styles.userinput}>
        <p>Welcome</p>
        <LogInForm loggedin={true} {...this.props}/>
        <SearchFlights />
      </div>
    )
  }
}
export default LoggedIn;
