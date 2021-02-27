import React, { useEffect, useState } from "react";
import API from "../utils/API"
import { Container, Row, Col } from "../components/Grid/index";
import { List, ListItem } from "../components/List2/index";
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



        //call for the validation
        // result = await API.Savebook(dxDetails)
        // with result youcan do whatever
    };



    const styles = {
        card: {
            border: "30px",
            borderstyle: "solid",
            backgroundColor:"blue",
            padding: "20px",
            width: "1000px",
            height: "80px",
            borderStyle: "solid",
            borderWidth: "6px",
            borderColor: "white",
            backgroundColor: "lightblue"
            

        },
        body: {
        
            width: "100%",
            height: "100%",
            backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
            backgroundColor: "blue",
            color: "white",
    
          }
        
        

    }      
      
    
    return (

        
            <div style={styles.body}>
                <div className="container" style={styles.body} >
                    <div>
                        <div style={styles.card} className="card mb-2">
                            <h1> CREATE DIAGNOSIS </h1>
                        </div>
                    </div>
              <div>
                <div className="input-group mb-3" style={styles.body} >
                    <div style={styles.card} className="card mb-2">
                        <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1 "
                            onChange={onChange}
                            placeholder="name" />
                    </div>
            
            </div>
            </div>
     
          
                <div className="input-group mb-3" >
                   <div style={styles.card} className="card mb-2">
                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"
                        placeholder="description"
                        onChange={onChange} />
                 </div>
                </div>
            
                    <div>
                        <div className="input-group mb-3">
                            <div style={styles.card} className="card mb-2">
                                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"
                                    placeholder="symptoms"
                                    onChange={onChange} />
                            </div>
                        </div>


                        <div>
                            <div className="input-group mb-3">
                                <div style={styles.card} className="card mb-2">
                                    <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1"
                                        placeholder="treatment"
                                        onChange={onChange} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={onSubmit}>
                        submit
            </button>


                    <Col size="md-6 sm-12" style={styles.body} >

                        {newDx.map(newDx => (
                            <ListItem key={newDx._id}>
                                {/* <Link to={"/newDxs/" + newDx._id}> */}
                                <h4><strong>Name:</strong></h4><p>{newDx.name}</p>
                                <h4><strong>Description:</strong></h4><p>{newDx.description}</p>
                                <h4><strong>Treatment:</strong></h4><p>{newDx.treatment}</p>
                                <h4><strong>Symptoms:</strong></h4><p>{newDx.symptoms}</p>
                                {/* </Link> */}
                                {/* <DeleteBtn onClick={() => deleteDiagnosis(newDx._id)} /> */}
                            </ListItem>
                        ))}
                    </Col>

        </div>
        </div>
        
    
    
    






    )

};

export default Create;