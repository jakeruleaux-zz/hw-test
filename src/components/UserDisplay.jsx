import React from "react";
import PropTypes from "prop-types";

function UserName(props) {
  return (
    <div>
      <p>UserName: {props.name}</p>
    </div>
  );
}

UserName.propTypes ={
  name: PropTypes.string,
  id: PropTypes.string
};

export default UserName;
