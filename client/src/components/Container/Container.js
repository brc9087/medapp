import React from "react";

function Container(props) {
  return (
  <div class="container">
  <div class="notification is-primary">
  {props.children}  </div>
</div>)
  ;
}

export default Container;
