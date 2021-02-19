import axios from "axios"

export default {
    // Get book from google search 
    diagnosis: function(id) {

    const options = {
        method: 'GET',
        url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/issues/' + id + '/info',
        params: { language: 'en-gb' },
        headers: {
            'x-rapidapi-key': '55a082967dmsh01d187363e4cebcp1cde3ajsn6d808025672e',
            'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    })

    // getGoogleSearchBooks: function(query) {
    //     return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    // },

    // // Gets all books
    // getBooks: function () {
    //     return axios.get("/api/books");
    // },

    // // Gets the book with the given id
    // getBook: function (id) {
    //     return axios.get("/api/books/" + id);
    // },

    // // Saves a book to the database
    // saveBook: function (savedBooks) {
    //     return axios.post("/api/books", savedBooks);
    // },

    // // Deletes the book with the given id
    // deleteBook: function (id) {
    //     return axios.delete("/api/books/" + id);
    // }
    }}