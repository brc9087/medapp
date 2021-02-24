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

//INFO ROUTE
  getInfos: function () {
    return axios.get("/api/info");
  },
  // Gets the book with the given id
  getInfoId: function (id) {
    return axios.get("/api/info/" + id);
  },
  // Deletes the book with the given id
  deleteInfo: function (id) {
    return axios.delete("/api/info/" + id);
  },
  // Saves a book to the database
  saveInfo: function (infoData) {
    return axios.post("/api/info", infoData);
  },
};

