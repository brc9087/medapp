import React, { useState, useEffect, useDebugValue } from "react";
import API from "../utils/API";
import Input from "../components/Input/Input";
//import Header from "../components/Header/Header";
//import background from "./img/placeholder.png";



const styles = {

    card: {
        width: "500px",
        border: "00px",
        borderstyle: "solid",
        padding: "40px",
        backgroundImage: "linear-gradient(#22687F, #5A8391, green)",
        marginbottom: "5px",
        color: "white",
        borderStyle: "solid",
        borderWidth: "0px",
        borderColor: "white",

    },

   
    question: {
        padding: "10px",
        textAlign: "left",
        

    },
    input: {
        marginBottom: "20px",
        textAlign: "center",
    },
      

    body: {
        postion: "fixed",
        backgroundImage: `url(${"https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1200"})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '140vh'
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
            

            <div style={styles.body}>
                <div style={styles.card}>

                    <p> Please answer the following </p>

                    <h2>Your age:</h2>
                    <form style={styles.question}>
                        <Input style={styles.input}
                            onChange={onChange}
                            placeholder="age"
                            type="text"
                            name="Sex" />

                        <h2>Your Sex:</h2>

                        <Input style={styles.input}
                            onChange={onChange}
                            placeholder="gender"
                            type="text"
                            name="Sex" />

                        <h2> Your Medical History:</h2>

                        <Input style={styles.input}
                            onChange={onChange}
                            placeholder="medhistory"
                            type="text"
                            name="Symptoms" />

                        <h2>What are your symptoms?</h2>

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
                
                        <div>
                        <div>
                            <small>* Term and condition may apply. Please click the following link to see the tearm and conditions.[cleck here]</small>
                        </div>
                        </div>
                        <div>
                            <small>* Please Subscribe our weekly/monthly Newsletters from the medical Professionals.[click here]</small>
                        </div>

               
            </div>
            </div>

        </>
    )
};



export default Info;


