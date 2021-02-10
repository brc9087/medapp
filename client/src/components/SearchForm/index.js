import React from "react";

const styles = {
    submitbtn: {
        backgroundColor: "navy",
        marginBottom: "8%",
        color: "yellow"
    }
}

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel"><h3>Search For Books</h3></label>
                <br />
                <input className="col-12 form-control"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Search for a book by Title"
                    onChange={props.handleInputChange} />
            </div>
            <button style={styles.submitbtn} type="submit" className="submitBtn btn" onClick={props.handleFormSubmit}>
                SUBMIT</button>
        </form>
    )
}

export default SearchForm;