import React, { useEffect, useState } from "react";
import API from "../utils/API"
import { Container, Row, Col } from "../components/Grid/index";
import { ListItem, ListItem2 } from "../components/List2/index";
import Input from "../components/Input/Input";
import Header from "../components/Header/Header";
import DeleteBtn from "../components/DeleteBtn";
// import { Input, FormBtn, TextArea } from "../components/Form2/index"

const styles = {
    div: {
        backgroundColor: "#038989"
    }
}


function Create() {
    const [newDx, setnewDx] = useState([])
    const [newDxObject, setnewDxObject] = useState({})
    const [currentDX, setCurrentDx] = useState({
        isEdit: false,
        diagnosis: null,
    })
    const [updateBtnMsg, setUpdateBtnMsg] = useState({ btnMsg: "Update" })

    function onChange(e) {
        const { placeholder, value } = e.target;
        setnewDxObject({ ...newDxObject, [placeholder]: value })


        // const title = e.target.getAttribute("placeholder")
        // setnewDxObject({ ...newDxObject, [title]: e.target.value })

        //{key: value}
    }

    function deletenewdx(id) {
        API.deletenewdx(id)
            .then(res => loadDiagnosis(), location.reload())
            .catch(err => console.log(err));
    }

    useEffect(() => {
        loadNewdx()
    }, [])

    function loadNewdx() {
        API.getnewdx()
            .then(res => {
                setnewDx(res.data);
                setCurrentDx({ ...currentDX, diagnosis: res.data })
            }
            )
            .catch(err => console.log(err));
    }

    function onSubmit(e) {
        e.preventDefault();
        API.savenewdx({
            name: newDxObject.name,
            description: newDxObject.description,
            symptoms: newDxObject.symptoms,
            treatment: newDxObject.treatment
        })
            .then(res => loadNewdx(), location.reload())
            .catch(err => console.log(err));
    };

    function changeUpdateBtnMsg(e) {
        e.preventDefault();

        if (updateBtnMsg.btnMsg === "Update") {
            setUpdateBtnMsg({ btnMsg: "Save" })
        }
        else {
            setUpdateBtnMsg({ btnMsg: "Update" })

            const index = e.target.getAttribute('data-index')
            API.editNewDiagnosis(e.target.id, currentDX.diagnosis[index])
        }

        setCurrentDx({ ...currentDX, isEdit: !currentDX.isEdit })

    }

    function onChangeDiagnosis(e) {
        const index = e.target.getAttribute('data-index')
        const keyName = e.target.getAttribute('data-type')
        const newArr = currentDX.diagnosis
        const obj = newArr[index]
        const newObj = { ...obj, [keyName]: e.target.value }


        newArr.splice(index, 1, newObj)

        setCurrentDx({ ...currentDX, diagnosis: newArr })


    }

    const styles = {
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
        },
        doc: {
            textAlign: "center",
            color: "white"
        },
        docdiv: {
            top: "10px"
        }
    }
    return (
        <div>
            <Header Logo="/logo/logo.png" />
            <div style={styles.body}>
                <div style={styles.card}>
                    <h1 style={styles.header}> Create Diagnosis </h1>
                    <div >
                        <h5>Name</h5>
                        <Input style={styles.input} type="text" aria-label="Username" aria-describedby="basic-addon1 "
                            onChange={onChange}
                            placeholder="name" />
                        <h5>Description</h5>
                        <Input style={styles.input} type="text" aria-label="Username" aria-describedby="basic-addon1"
                            placeholder="description"
                            onChange={onChange}
                        />
                        <h5>Symptoms</h5>
                        <Input style={styles.input} type="text" aria-label="Username" aria-describedby="basic-addon1"
                            placeholder="symptoms"
                            onChange={onChange} />
                        <h5>Treatment</h5>
                        <Input style={styles.input} type="text" aria-label="Username" aria-describedby="basic-addon1"
                            placeholder="treatment"
                            onChange={onChange} />
                    </div>

                    <button
                        className="button is-info is-rounded"
                        onClick={onSubmit}>
                        Submit
            </button>
                </div>
                {<br/>}
                {<br/>}

                <div className="container">
                    <div style={styles.docdiv}>
                        <h1 style={styles.doc} >Doctors Diagnoses</h1>
                        {currentDX.diagnosis ? currentDX.diagnosis.map((newDx, index) => (
                            <ListItem key={newDx._id}>
                                {/* <Link to={"/newDxs/" + newDx._id}> */}
                                <h4 ><strong style={{color: "white"}}>Name:</strong></h4><input 
                                type="text" 
                                disabled={currentDX.isEdit} 
                                value={newDx.name || "N/A"} 
                                data-index={index} data-type={"name"} 
                                onChange={onChangeDiagnosis}/>
                                <h4><strong style={{color: "white"}}>Description:</strong></h4><input 
                                type="text" 
                                disabled={currentDX.isEdit} 
                                value={newDx.description} 
                                data-index={index} data-type={"description"} 
                                onChange={onChangeDiagnosis} />
                                <h4><strong style={{color: "white"}}>Treatment:</strong></h4><input 
                                type="text" 
                                disabled={currentDX.isEdit} 
                                value={newDx.treatment} 
                                data-index={index} data-type={"treatment"} 
                                onChange={onChangeDiagnosis} />
                                <h4><strong style={{color: "white"}}>Symptoms:</strong></h4><input 
                                type="text" 
                                disabled={currentDX.isEdit} 
                                value={newDx.symptoms} 
                                data-index={index} 
                                data-type={"symptoms"} 
                                onChange={onChangeDiagnosis} />
                                <div>
                                <button
                                    className="button us-info is-rounded" id={newDx._id} data-index={index} onClick={changeUpdateBtnMsg}>
                                    {updateBtnMsg.btnMsg} </button>
                                <DeleteBtn onClick={() => deletenewdx(newDx._id)} />
                                </div>
                            </ListItem>
                        )) : <div></div>}
                    </div>
            </div>

            </div>

        </div>
    )

};

export default Create;