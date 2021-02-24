import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

const styles = {
  list: {
    width: "50%",
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
    <div style={styles.list}>
      <ul className="list-group" >{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

