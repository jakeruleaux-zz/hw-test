import React from 'react';

const LogInForm = ({loggedin, history}) => {
  if(!loggedin) {
    return(
      <div className="form">
      <input type="text" placeholder="log in"/>
      <button onClick={() =>history.push('/loggedin')}>enter</button>
      </div>
    )
  } else {
    return (
      <div className="form">
      <button onClick={() => history.push('/')}>HOME</button>
      </div>
    )
  }
}

export default LogInForm;
