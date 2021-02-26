import { List, ListItem } from "../components/List2/index";
import { Container, Row, Col } from "../components/Grid/index"
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import React, { useState, useEffect } from "react";


function Results() {

  // Setting our component's initial state
  const [diagnosis, setDiagnosis] = useState([])
  const [formObject, setFormObject] = useState({})

  const [bio, setBio] = useState([])
  const [formObject2, setFormObject2] = useState({})

  // Load all diags and store them with setdiags
  useEffect(() => {
    loadDiagnosis()
  }, [])

  useEffect(() => {
    loadBio()
  }, [])

  // Loads all books and sets them to books
  function loadDiagnosis() {
    API.getDiagnosis()
      .then(res =>
        setDiagnosis(res.data)
      )
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadBio()
  },
    [])

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

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveDiagnosis({
        name: formObject.name,
        description: formObject.description,
        symptoms: formObject.symptoms
      })
        .then(res => loadDiagnosis())
        .catch(err => console.log(err));
    }
  };

  return (
    // {books.length ? (
    <Container fluid>
      <Row>
        <Col size="md-6">
          {diagnosis.map(diag => {
            if (diag.category === "head") {
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
              )}
          })}

        </Col>


        <Col size="md-6 sm-12">
          {diagnosis.map(diag => (
            <ListItem key={diag._id}>
              {/* <Link to={"/diags/" + diag._id}> */}
              <h4><strong>Name:</strong></h4><p>{diag.name}</p>
              <h4><strong>Description:</strong></h4><p>{diag.description}</p>
              <h4><strong>Treatment:</strong></h4><p>{diag.treatment}</p>
              <h4><strong>Symptoms:</strong></h4><p>{diag.symptoms}</p>
              {/* </Link> */}
              <DeleteBtn onClick={() => deleteBio(diag._id)} />
            </ListItem>
          ))}
        </Col>


        {/* BIO PRINT  */}
        <Col size="md-6 sm-12">
          {bio.map(bio => (
            <ListItem key={bio._id}>
              {/* <Link to={"/bios/" + bio._id}> */}
              <h4><strong>Age:</strong></h4><p>{bio.age}</p>
              <h4><strong>Gender:</strong></h4><p>{bio.gender}</p>
              <h4><strong>Medical History:</strong></h4><p>{bio.medhistory}</p>
              <h4><strong>Symptoms:</strong></h4><p>{bio.symptoms}</p>
              {/* </Link> */}
              <DeleteBtn onClick={() => deleteDiagnosis(bio._id)} />
            </ListItem>
          ))}
        </Col>


      </Row>
    </Container>

  )

}


export default Results;