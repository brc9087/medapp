import axios from "axios";

export default {
  //DIAGNOSIS ROUTES
  getDiagnosis: function () {
    return axios.get("/api/diagnosis");
  },
  // Gets the book with the given id
  getDiagnosisId: function (id) {
    return axios.get("/api/diagnosis/" + id);
  },
  // Deletes the book with the given id
  deleteDiagnosis: function (id) {
    return axios.delete("/api/diagnosis/" + id);
  },
  // Saves a book to the database
  saveDiagnosis: function (dxData) {
    return axios.post("/api/diagnosis", dxData);
  },

  //BIO ROUTE
  getBios: function () {
    return axios.get("/api/bio");
  },
  // Gets the book with the given id
  getBioId: function (id) {
    return axios.get("/api/bio/" + id);
  },
  // Deletes the book with the given id
  deleteBio: function (id) {
    return axios.delete("/api/bio/" + id);
  },
  // Saves a book to the database
  saveBio: function (bioData) {
    return axios.post("/api/bio", bioData);
  },



  //NEW DIAGNOSIS ROUTES
  getnewdx: function () {
    return axios.get("/api/new");
  },
  // Gets the book with the given id
  getnewdxId: function (id) {
    return axios.get("/api/new/" + id);
  },
  // Deletes the book with the given id
  deletenewdx: function (id) {
    return axios.delete("/api/new/" + id);
  },
  // Saves a book to the database
  savenewdx: function (dxData) {
    return axios.post("/api/new", dxData);
  },

  //Put Request
  editNewDiagnosis: function (id, diagnosisData) {
    return axios.put("/api/new/" + id, diagnosisData)
  },
};

