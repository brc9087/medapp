import React from "react";
import { Container, Row, Col } from "../Grid/index";

const styles = {
    save: {
        backgroundColor: "blue",
        color: "white"
    },
    view: {
        backgroundColor: "green"
    },
    card: {
        borderStyle: "solid",
        borderWidth: "15px",
        borderColor: "navy",
        marginBottom: "330rem",
        backgroundColor: "grey"
    }
}

const SearchResult = props => {
    return (
        <Container>
            <h3>Search Results</h3>
            {props.books.map(book => {
                return (
                    <div style={styles.card} className="card mb-5">
                        <div className="card-body">
                            <Row className="SearchResult row"
                                id={book.title + "Card"}
                                key={book._id}>
                                <Col size="2">
                                    <img
                                        src={book.image}
                                        alt={book.title} />
                                </Col>
                                <Col size="10" className="pl-2">
                                    <h3 className="bookTitle">{book.title}</h3>
                                    <h4 className="bookAuthor">{book.authors}</h4>
                                    <p className="bookDescription pr-3">{book.description}</p>
                                </Col>
                            </Row>
                            <Row>
                                <button style={styles.save} className="save btn mt-4 ml-3 mr-1"
                                    id={book.id}
                                    onClick={(event) => props.handleSavedButton(event)}>
                                    Save Book</button>
                                <a href={book.link} target="_blank" rel="noopener noreferrer">
                                    <button style={styles.view} className="view btn mt-4">
                                        View Book</button>
                                </a>
                            </Row>
                        </div>
                    </div>

                );
            })}
        </Container>
    )
}
export default SearchResult;