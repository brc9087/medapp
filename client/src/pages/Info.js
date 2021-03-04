import React, { useState, useEffect, useDebugValue } from "react";
import API from "../utils/API";
import Input from "../components/Input/Input";
import Header from "../components/Header/Header";


const styles = {

    card: {
        border: "25px",
        borderstyle: "solid",
        padding: "40px",
        backgroundImage: "linear-gradient(#22687F, #5A8391, #22687F)",
        marginbottom: "5px",
        color: "white",
        borderStyle: "solid",
        borderWidth: "6px",
        borderColor: "white",

    },

    body: {
        postion: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
        padding: "100px",
        textAlign: "center",
    },
    question: {
        padding: "10px",
        textAlign: "center"
    },
    input: {
        marginBottom: "20px",
        textAlign: "center"
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
                setbioObject(res.data))
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
        console.log(bioObject)
        event.preventDefault();
        API.saveBio({
            age: bioObject.age,
            gender: bioObject.gender,
            medhistory: bioObject.medhistory,
            symptoms: bioObject.symptoms
        })
            .then(res => loadBio(), 
            location.assign("./bodyparts")
            )
            .catch(err => console.log(err))
    }




    return (
        <>
            <Header Logo="/logo/logo.png" />

            <div style={styles.body}>
                <div style={styles.card}>

                    <p> Please answer the following</p>

                    <h2>Age:</h2>
                    <form style={styles.question}>
                        <Input style={styles.input}
                            onChange={onChange}
                            placeholder="age"
                            type="text"
                            name="Sex" />

                        <h2>Sex:</h2>

                        <Input style={styles.input}
                            onChange={onChange}
                            placeholder="gender"
                            type="text"
                            name="Sex" />

                        <h2>Medical History:</h2>

                        <Input style={styles.input}
                            onChange={onChange}
                            placeholder="medhistory"
                            type="text"
                            name="Symptoms" />

                        <h2>What are your symptoms</h2>

                        <Input style={styles.input}
                            onChange={onChange}
                            placeholder="symptoms"
                            type="text"
                            name="Symptoms" />
                    </form>


                    <button
                        onClick={handleFormSubmit}
                        type="submit"
                        className="button is-info is-rounded">
                        Submit
                        </button>

                </div>
            </div>
        </>
    )
};

export default Info;