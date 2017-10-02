import React from 'react';
import LogInForm from './LogInForm';

class LogIn extends React.Component {
  render(){
    return (
      <div>
      log in
      <LogInForm {...this.props} />
      </div>
    )
  }
}

export default LogIn;
