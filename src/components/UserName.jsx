import React from 'react';
import PropTypes from 'prop-types';
import c from './../constants';
import { v4 } from 'uuid';
import { connect } from 'react-redux';


class UserName extends React.Component {

  constructor(props) {
    super(props);

    this.handleUserName = this.handleUserName.bind(this);
  }

  handleUserName(event) {
    event.preventDefault();
    const { _name } = this.refs;
    const { dispatch } =this.props;
    const action = {
      type: c.ADD_NAME,
      id: v4(),
      name: _name.value
    }
    console.log(name);
    dispatch(action);
    _name.value = "";
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleUserName}>
          <input
            ref="_name"
            type="text"
            id="name"
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}
  UserName = connect()(UserName);

  export default UserName;
