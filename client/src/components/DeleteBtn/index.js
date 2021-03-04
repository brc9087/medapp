import React from "react";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" className="button us-info is-rounded" tabIndex="0">
      ✗ 
    </span>
  );
}

export default DeleteBtn;
