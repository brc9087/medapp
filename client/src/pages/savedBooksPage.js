import React, { Component } from "react";
import API from "../utils/API";
import SavedResult from "../components/SavedResult/index"

class SaveBook extends Component {
    state = {
      savedBooks: []
    };
  
    componentDidMount() {
      API.getBooks()
        .then(res => this.setState({ savedBooks: res.data }))
        .catch(err => console.log(err))
    }
  
    handleDeleteButton = id => {
      API.deleteBook(id)
        .then(res => this.componentDidMount())
        .catch(err => console.log(err))
    }
  
    render() {
      return (
        <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
      )
    }
  }
  
  export default SaveBook 