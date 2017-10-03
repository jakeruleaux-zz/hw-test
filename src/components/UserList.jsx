import React from "react";
import User from './User';
import PropTypes from 'prop-types';

function UserList(props) {

  return (
    <div>
          {props.userList.map((user, index) =>
            <User
              name={user.name}
              key={user.id}
              id={user.id}/>
          )}
    </div>
  );
}

UserList.propTypes = {
  userList: PropTypes.array
}

export default UserList;
