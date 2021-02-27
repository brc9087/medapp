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
    backgroundColor: "grey",
    width: "70%",
  },

  listItemResults: {
    backgroundColor: "grey",
    width: "100%"
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
  return <li style={styles.listItem} className="list-group-item newdx ">{children}</li>
}

// export function ListItem({ children }) {
//   return <div style={styles.listItem} className="accordion" id="accordionExample">
//     <div className="accordion-item">
//       <h2 className="accordion-header" id="headingOne">
//         <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//           {children}
//       </button>
//       </h2>
//       <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//         <div className="accordion-body">
//           <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//       </div>
//       </div>
//     </div>
//   </div>
// }

export function ListItemResults({ children }) {
  return <li style={styles.listItemResults} className="list-group-item accordion ">{children}</li>;
}
