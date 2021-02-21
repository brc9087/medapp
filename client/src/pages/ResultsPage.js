import { List, ListItem } from "../components/List2/index";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import React, { useState, useEffect } from "react";

function Results() {

      // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        name: formObject.name,
        description: formObject.description,
        symptoms: formObject.symptoms
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

    return (
        // {books.length ? (
        <List>
            {books.map(book => (
                <ListItem key={book._id}>
                    {/* <Link to={"/books/" + book._id}> */}
                    <p><strong>Name: </strong> {book.name}</p>
                    {/* <p><strong>Description: </strong> {book.description}</p>
                    <p><strong>Treatment: </strong> {book.treatment}</p>
                    <p><strong>Symptoms: </strong> {book.symptoms}</p> */}
                    {/* </Link> */}
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                </ListItem>
            ))}
        </List>

    )

}


export default Results;