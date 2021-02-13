import React from "react";
import { Container, Row, Col } from "../Grid/index";

const styles = {
    delete: {
        backgroundColor: "red",
        color: "white"
    },
    view: {
        backgroundColor: "yellow",
        color: "black"
    },
    card: {
        borderStyle: "solid",
        borderWidth: "5px",
        borderColor: "green",
        backgroundColor: "grey"
    }


}

const SavedResult = props => {
    return (
        <Container>
            <h3>Saved Books</h3>
            {props.savedBooks.map(savedbook => {
                return (
                    <div>
                        <div style={styles.card} className="card mb-2">
                            <div className="card-body">
                                <Row
                                    id={savedbook.title + "Card"}
                                    key={savedbook._id}>
                                    <Col size="2">
                                        <img
                                            src={savedbook.image}
                                            alt={savedbook.title} />
                                    </Col>
                                    <Col size="10" className="pl-2">
                                        <h3 className="bookTitle">{savedbook.title}</h3>
                                        <h4 className="bookAuthor">{savedbook.authors}</h4>
                                        <p className="bookDescription pr-3">{savedbook.description}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <button style={styles.delete} className="delete btn mt-4 ml-3 mr-1"
                                        id={savedbook._id}
                                        onClick={() => props.handleDeleteButton(savedbook._id)}>
                                        Delete Book</button>
                                    <a href={savedbook.link} target="_blank" rel="noopener noreferrer">
                                        <button style={styles.view} className="view btn mt-4">
                                            View Book</button>
                                    </a>
                                </Row>
                            </div>
                        </div>
                    </div>
                );
            })
            }
        </Container>
    )
}

export default SavedResult;