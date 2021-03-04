// import "./style.css";

// This file exports both the List and ListItem components

const styles = {
  listItem: {
    backgroundColor: "navy",
    width: "100%",
    color: "white"
  },

  listitem2: {
    backgroundColor: "grey",
    color: "white",
    width: "100%"
  }
}

// export function List({ children }) {
//   return (
//     <div style={styles.list}>
//       <ul className="list-group" >{children}</ul>
//     </div>
//   );
// }

export function ListItem2({ children }) {
  return <li style={styles.listitem2} className="list-group-item newdx ">{children}</li>
}

export function ListItem({ children }) {
  return <div style={styles.listItem} className="accordion" id="accordionExample">
    <div style={styles.listItem} className="accordion-item" >
      <h2 className="accordion-header" id="headingOne">
        <button style={styles.listItem} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {children}
        </button>
      </h2>
    </div>

  </div>
}

export function Body({children}) {
  return <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
  <div style={{ backgroundColor: "white" }} className="accordion-body">
    <strong>{children}</strong>
  </div>
</div>
}

// export function ListItemResults({ children }) {
//   return <li style={styles.listItemResults} className="list-group-item accordion ">{children}</li>;
// }
