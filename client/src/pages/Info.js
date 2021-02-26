import React, { useState, useEffect, useDebugValue } from "react";
import API from "../utils/API";

const styles = {
    body: {
        position: "relative",
        margin: "auto",
        float: "auto",
        width: "100%",
        height: "200%",
        backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
        padding: "80px",

    },

    label: {
        margin: "0"
    },

    input: {
        width: "55%",
        padding: "10px",
        textAlign: "center"

    },

    head: {
        display: "block",
        textAlign: "center",
        paddingTop: "20px"
    },

    button: {
        padding: "10px"
    }

}



function Info() {
    // Set State
    // const [bio, setBio] = useState([])
    const [bioObject, setbioObject] = useState({})

    function onChange(e) {
        const { placeholder, value } = e.target;
        setbioObject({ ...bioObject, [placeholder]: value })
    }

    useEffect(() => {
        loadBio()
    }, [])

    function loadBio() {
        API.getBios()
            .then(res =>
                setBio(res.data))
            .catch(err => console.log(err))
    };

    function deleteBio() {
        API.deleteBio(id)
            .then(res => loadBio())
            .catch(err => console.log(err))
    }

    // function handleInputChange(event) {
    //     const { name, value } = event.target;
    //     setbioObject({ ...bioObject, [name]: value })
    // }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveBio({
            age: bioObject.age,
            gender: bioObject.gender,
            medhistory: bioObject.medhistory,
            symptoms: bioObject.symptoms
        })
            .then(res => loadBio(), location.reload())
            .catch(err => console.log(err))
    }




    return (
        <div style={styles.body}>
        <div className="container" style={styles.body}>
            <div className="main" >
                <body>
                    <div style={styles.card} className="card mb-2">
                        <h1> Info </h1>
                    </div>


                    <div>
                        <div style={styles.card} className="card mb-2">


                            <h2>What Is Your age</h2>
                            <form id="Sex">
                                <input
                                    onChange={onChange}
                                    placeholder="age"
                                    className="form-control form-control-lg"
                                    type="text"
                                    name="Sex" />

                            </form>

                        </div>
                    </div>


                    <div style={styles.card} className="card mb-2">
                        <h2>What Is Your Sex</h2>
                        <form id="Sex">
                            <input
                                onChange={onChange}
                                placeholder="gender"
                                className="form-control form-control-lg"
                                type="text"
                                name="Sex" />
                        </form>
                    </div>

                    <div style={styles.card} className="card mb-2">
                        <h1>Do you have medical history</h1>
                        <form id="Symptoms">
                            <input
                                onChange={onChange}
                                placeholder="medhistory"
                                className="form-control form-control-lg"
                                type="text"
                                name="Symptoms" />
                        </form>
                    </div>


                    <div style={styles.card} className="card mb-2">
                        <h1>What are your symptoms</h1>
                        <form id="Symptoms">
                            <input
                                onChange={onChange}
                                placeholder="symptoms"
                                className="form-control form-control-lg"
                                type="text"
                                name="Symptoms" />
                        </form>
                    </div>

                    <div style={styles.button}>
                        <button className="button is-info is-rounded"
                            onClick={handleFormSubmit}
                            type="submit"
                            className="btn btn-danger danger">
                            Submit
                        </button>
                    </div>
            </body>
        </div>
            </div>
            </div>
    )
};




export default Info;