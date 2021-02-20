import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

const styles = {
  list: {
    width: "30%",
    border: "solid",
    backgroundColor: "navy",
    fontSize: "20px"
  },

  container: {
    backgroundColor: "navy"
  }
}

export function List({ children }) {
  return (
    <div className="container">
      <ul style={styles.list} className="list-group" >{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
