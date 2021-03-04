import { List, ListItem, ListItemResults } from "../components/List2/index";
import { Container, Row, Col } from "../components/Grid/index"
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import React, { useState, useEffect } from "react";

const styles = {
  div: {
    backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
    color: "white"
  }
}

function Results({}) {

  // Setting our component's initial state
  const [diagnosis, setDiagnosis] = useState([])
  // const [formObject, setFormObject] = useState({})

  const [bio, setBio] = useState([])
  // const [formObject2, setFormObject2] = useState({})

  const [newDx, setNewDx] = useState([])

  // const [ description, setDescription ] = useState({})

  // Load all diags and store them with setdiags
  useEffect(() => {
    loadDiagnosis();
    loadBio()
    loadNewDx()
  }, [])

  // Loads all books and sets them to books
  function loadDiagnosis() {
    API.getDiagnosis()
      .then(res =>
        setDiagnosis(res.data)
      )
      .catch(err => console.log(err));
  };
  // function loadDiagnosis() {
    
  //   API.getDiagnosis()
  //     .then(res =>{
        
  //       // if(!sharedInfo.results) setDiagnosis(res.data)
  //       // else {
  //         setDiagonsis(res.data))
  //     //   }
  //     // })
  //     .catch(err => console.log(err));
  // };

  //Loads New made up diagnosis
  function loadNewDx() {
    API.getnewdx()
      .then(res =>
        setNewDx(res.data))
      .catch(err => console.log(err))
  }


  function loadBio() {
    API.getBios()
      .then(res =>
        setBio(res.data))
      .catch(err => console.log(err))
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteDiagnosis(id) {
    API.deleteDiagnosis(id)
      .then(res => loadDiagnosis())
      .catch(err => console.log(err));
  }

  function deleteBio(id) {
    API.deleteBio(id)
      .then(res => loadBio())
      .catch(err => console.log(err));
  }

  function editDiagnosis(id) {
    API.editDiagnosis(id, diagnosisData.id)
    .catch(err => console.log(err))

  }


  function click(e) {
    e.preventDefault();

    
  }

  return (
    // {books.length ? (
    <div style={styles.div}>
      <Container fluid>
        <h1 style={{textAlign: "center"}}>RESULTS
        {/* {sharedInfo.results? ` FOR ${sharedInfo.results}`: ""} */}
        </h1>
        <Row>
          <Col size="md-6">
            {diagnosis.map(diag => {
              // if (diag.category === "head") {
                return (
                  <ListItem key={diag._id}>
                    {/* <Link to={"/diags/" + diag._id}> */}
                    <h2><strong>Name:</strong></h2><h3>{diag.name}</h3>
                    {/* <h3><strong>Name:</strong></h3><p>{diag.name}</p>
                <p><strong>Name: </strong> {diag.name}</p> */}
                    {/* <p><strong>Description: </strong> {diag.description}</p>
                    <p><strong>Treatment: </strong> {diag.treatment}</p>
                    <p><strong>Symptoms: </strong> {diag.symptoms}</p> */}
                    {/* </Link> */}
                    <DeleteBtn onClick={() => deleteDiagnosis(diag._id)} />
                  </ListItem>
                )
              // }
            })}

          </Col>


          <Col size="md-6 sm-12">
            {diagnosis.map(diag => (
              <ListItemResults key={diag._id}>
                {/* <Link to={"/diags/" + diag._id}> */}
                <h4><strong>Name:</strong></h4><p>{diag.name}</p>
                <h4><strong>Description:</strong></h4><p>{diag.description}</p>
                {/* <h4><strong>Treatment:</strong></h4><p>{diag.treatment}</p>
                <h4><strong>Symptoms:</strong></h4><p>{diag.symptoms}</p> */}
                {/* </Link> */}
                <DeleteBtn onClick={() => deleteBio(diag._id)} />
              </ListItemResults>
            ))}
          </Col>


          {/* NEW Dx PRINT  */}
          <Col size="md-6 sm-12">
            <h1>You Definitely have </h1>
            {newDx.map(newDx => (
              <ListItem key={newDx._id}>
                {/* <Link to={"/newDxs/" + newDx._id}> */}
                <h4 ><strong>Name:</strong></h4><p>{newDx.name}</p>
                <h4><strong>Description:</strong></h4><p>{newDx.description}</p>
                <h4><strong>Treatment:</strong></h4><p>{newDx.treatment}</p>
                <h4><strong>Symptoms:</strong></h4><p>{newDx.symptoms}</p>
                {/* </Link> */}
                {/* <DeleteBtn onClick={() => deleteDiagnosis(newDx._id)} /> */}
              </ListItem>
            ))}
          </Col>
        </Row>
      </Container>
    </div>

  )

}
export default Results;