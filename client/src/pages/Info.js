import React, { useState, useEffect, useDebugValue } from "react";
import API from "../utils/API";

const styles = {

    card: {
        border: "25px",
        borderstyle: "solid",
        background: "white",
        padding: "20px",
        width: "1000px",
        height: "150px",
        marginbottom: "5px",

        borderStyle: "solid",
        borderWidth: "6px",
        borderColor: "blue",
        backgroundColor: "white"
    },

    div: {
        backgroundColor: "#038989"
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
        <div style={styles.div}>
        <div className="container">
            <div>
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
                    <h2>What Is Your Gender</h2>
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
                    <h1>Do you have any Medical History</h1>
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

                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-danger danger">
                    Submit</button>
            </div>
        </div>
        </div>
    )
    }




export default Info;