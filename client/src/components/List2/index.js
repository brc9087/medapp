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

  listItem: {
    position: "right"
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
  return <li style={styles.listItem} className="list-group-item">{children}</li>;
}
