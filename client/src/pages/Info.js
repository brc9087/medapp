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
    }


}



function Info() {
    // Set State
    const [bio, setBio] = useState([])
    const [formObject, setFormObject] = useState({})

    useEffect(() => {
        loadBio()
    },
        [])

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

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value })
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveBio({
            age: formObject.age,
            gender: formObject.gender,
            medhistory: formObject.medhistory,
            symptoms: formObject.symptoms
        })
        .then(res => loadBio())
        .catch(err => console.log(err))
    }




    return (
        <div className="container">
            <div style={styles.card} className="card mb-2">
                <h1> Info </h1>



                <h2>What Is Your Age</h2>

                <form id="Age">
                    <input className="form-control form-control-lg" type="text" name="Age" />
                    <button type="submit" className="btn btn-danger danger">Submit</button>
                </form>
            </div>


            <div style={styles.card} className="card mb-2">
                <h2>What Is Your Sex</h2>
                <form id="Sex">
                    <input className="form-control form-control-lg" type="text" name="Sex" />
                    <button type="submit" className="btn btn-danger danger">Submit</button>
                </form>
            </div>

            <div style={styles.card} className="card mb-2">
                <h1>What are your Symptoms?</h1>

                <form id="Symptoms">
                    <input className="form-control form-control-lg" type="text" name="Symptoms" />
                    <button type="submit" className="btn btn-danger danger">Submit</button>
                </form>

            </div>

            <div style={styles.card} className="card mb-2">
                <h1>What are your Symptoms?</h1>

                <form onSubmit="">
                    <fieldset>
                        <label>
                            <p>Syptoms</p>
                            <input name="name" />
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
};




export default Info;