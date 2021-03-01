import React, { useEffect, useState } from "react";
import API from "../utils/API"
import { Container, Row, Col } from "../components/Grid/index";
import { List, ListItem } from "../components/List2/index";
import Input from "../components/Input/Input";
import Header from "../components/Header/Header";
// import { Input, FormBtn, TextArea } from "../components/Form2/index"

const styles = {
    div: {
        backgroundColor: "#038989"
    }
}


function Create() {
    const [newDx, setnewDx] = useState([])
    const [newDxObject, setnewDxObject] = useState({})

    function onChange(e) {
        const { placeholder, value } = e.target;
        setnewDxObject({ ...newDxObject, [placeholder]: value })


        // const title = e.target.getAttribute("placeholder")
        // setnewDxObject({ ...newDxObject, [title]: e.target.value })

        //{key: value}
    }

    useEffect(() => {
        loadNewdx()
    }, [])

    function loadNewdx() {
        API.getnewdx()
            .then(res =>
                setnewDx(res.data)
            )
            .catch(err => console.log(err));
    }

    // const update() {
    //     API.editNewDiagnosis({
    //         name: 
    //     })
    // }

    // function onSubmit(e) {
    //     e.preventDefault();
    //     API.editNewDiagnosis({id, diagnosisData

    //         // name: newDxObject.name,
    //         // description: newDxObject.description,
    //         // symptoms: newDxObject.symptoms,
    //         // treatment: newDxObject.treatment
    //     })
    //         .then(res => loadNewdx(), location.reload())
    //         .catch(err => console.log(err));



    //     //call for the validation
    //     // result = await API.Savebook(dxDetails)
    //     // with result youcan do whatever
    // };


const styles= {

    body: {
        postion: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
          padding: "100px",
          textAlign: "center",
        },
        header: {
            color: "white"
        },
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
        input: {
            marginBottom: "20px",
            textAlign: "center"
        }
}

    return (
        <>
            <Header Logo="/logo/logo.png" />


        <div style={styles.body}>
            <div style = {styles.card}>
            <h1 style={styles.header}> Create Diagnosis </h1>
            <div >
                <h5>Name </h5>
                <Input style = {styles.input} type="text" aria-label="Username" aria-describedby="basic-addon1 "
                    onChange={onChange}
                    placeholder="name"
                    // value={newDxObject.name}
                     />
            <h5>Description</h5>
                <Input  style = {styles.input}type="text"  aria-label="Username" aria-describedby="basic-addon1"
                    placeholder="description"
                    onChange={onChange}
                />
          <h5>Symptoms</h5>
                <Input  style = {styles.input} type="text"  aria-label="Username" aria-describedby="basic-addon1"
                    placeholder="symptoms"
                    onChange={onChange} />
           <h5>Treatment</h5>
                <Input  style = {styles.input} type="text"  aria-label="Username" aria-describedby="basic-addon1"
                    placeholder="treatment"
                    onChange={onChange} />
            </div>

            <button
             className="button is-info is-rounded"
                // onClick={onSubmit}
                >
                Submit
            </button>
</div>


        </div>
        </>

    )

};

export default Create;

