import { List, ListItem, ListItemResults, Body } from "../components/List2/index";
import { Container, Row, Col } from "../components/Grid/index"
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import React, { useState, useEffect } from "react";

const styles = {
  div: {
    backgroundColor: "#038989",
    color: "white"
  }
}

function Results({ }) {

  const [diagnosis, setDiagnosis] = useState([])
  const [newDx, setNewDx] = useState([])


  // Load all diags and store them with setdiags
  useEffect(() => {
    loadDiagnosis();
  }, [])

  // Loads all books and sets them to books
  function loadDiagnosis() {
    API.getDiagnosis()
      .then(res =>
        setDiagnosis(res.data)
      )
      .catch(err => console.log(err));
  };

  return (
    <div style={styles.div}>
      <div className="container">
        <h1 style={{ textAlign: "center" }}>RESULTS
        </h1>
        <div className="row md">
          <div className="col sm-1">
            <div className="col sm-10" >
              {diagnosis.map(diag => {
                if (diag.category === localStorage.getItem("value")) {
                  return (
                    <div>
                      <ListItem key={diag._id}>
                        <h2><strong></strong></h2><h3>{diag.name}</h3>
                      </ListItem>
                      <Body>
                        <h5><strong style={{color: "red"}}>Name:</strong></h5> <p>{diag.name}</p>
                        <h5><strong style={{color: "red"}}>Description: </strong></h5> <p>{diag.description}</p>
                        <h5><strong style={{color: "red"}}>Treatment: </strong></h5> <p>{diag.treatment}</p>
                        <h5><strong style={{color: "red"}}>Symptoms: </strong></h5> <p>{diag.symptoms}</p>
                      </Body>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}
export default Results;