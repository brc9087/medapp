import { List, ListItem } from "../components/List2/index";
import { Container, Row, Col } from "../components/Grid/index"
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import React, { useState, useEffect } from "react";


function Results() {

  // Setting our component's initial state
  const [diagnosis, setDiagnosis] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadDiagnosis()
  }, [])

  // Loads all books and sets them to books
  function loadDiagnosis() {
    API.getDiagnosis()
      .then(res =>
        setDiagnosis(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteDiagnosis(id) {
    API.deleteDiagnosis(id)
      .then(res => loadDiagnosis())
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
            {diagnosis.map(book => (
              <ListItem key={book._id}>
                {/* <Link to={"/books/" + book._id}> */}
                <h3><strong>Name:</strong></h3><p>{book.name}</p>
                {/* <h3><strong>Name:</strong></h3><p>{book.name}</p>
                <p><strong>Name: </strong> {book.name}</p> */}
                {/* <p><strong>Description: </strong> {book.description}</p>
                    <p><strong>Treatment: </strong> {book.treatment}</p>
                    <p><strong>Symptoms: </strong> {book.symptoms}</p> */}
                {/* </Link> */}
                <DeleteBtn onClick={() => deleteDiagnosis(book._id)} />
              </ListItem>

            ))}
 
        </Col>


        <Col size="md-6 sm-12">
          {diagnosis.map(book => (
            <ListItem key={book._id}>
              {/* <Link to={"/books/" + book._id}> */}
              <h4><strong>Name:</strong></h4><p>{book.name}</p>
              <h4><strong>Description:</strong></h4><p>{book.description}</p>
              <h4><strong>Treatment:</strong></h4><p>{book.treatment}</p>
              <h4><strong>Symptoms:</strong></h4><p>{book.symptoms}</p>
              {/* </Link> */}
              <DeleteBtn onClick={() => deleteDiagnosis(book._id)} />
            </ListItem>
          ))}
 


        </Col>
      </Row>
    </Container>

  )

}


export default Results;