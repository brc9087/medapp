import axios from "axios";

export default {
    getJobs: function() {
        return axios.get("/api/jobs");
    },
// will we have to change the id param to title?
    getJob: function(id) {
        return axios.get("/api/jobs/" + id);
    },

    deleteJobs: function(id) {
        return axios.delete("/api/jobs/" + id);
    },

    saveJobs: function (jobData) {
        return axios.post("/api/jobs", jobData);
    }
};