import React from "react";
import PropTypes from "prop-types";

function User(props) {
  return (
    <div>
      <p>User One: {props.name}</p>
    </div>
  );
}

User.propTypes ={
  name: PropTypes.string,
  id: PropTypes.string
};

export default User;
