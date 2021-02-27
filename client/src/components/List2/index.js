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
    backgroundColor: "grey"
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
  return <li style={styles.listItem} className="list-group-item">{children}</li>;
}

