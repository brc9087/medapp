import React, {useState} from "react";
import API from "../utils/API"

//import API 

function Create() {
    const [dxDetails, setDxDetails] = useState({ 
        Name: "",
        Description:"",
        Symptoms:"",
        Treatment:"",
    })

    const onChange =(e) =>{
        const title= e.target.getAttribute("placeholder")

        setDxDetails({...setDxDetails, [title]: e.target.value})

        //{key: value}
    }

    const [books, setBooks] = useState([])

    function loadBooks() {
        API.getBooks()
        .then(res => 
            setBooks(res.data)
            )
            .catch(err => console.log(err));
    }

    const onSubmit = async (e) =>{
        e.preventDefault();
        API.saveBook({
            Name: dxDetails.Name,
            Description: dxDetails.Description,
            Symptoms: dxDetails.Symptoms,
            Treatment: dxDetails.Treatment
        }).then(() => setDxDetails({
            Name: "",
            Description: "",
            Symptoms: "",
            Treatment: ""
        }))
        .then(() => loadBooks())
        .catch (err => console.log(err))
        

        //call for the validation

        // result = await API.Savebook(dxDetails)

        // with result you can do whatever
    }


    return (
        <div className="container">
            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1 " onChange={onChange} />
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"onChange={onChange} />
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="Symptoms" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange}/>
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="Treatment" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange}/>
            </div>

            <button onClick={onSubmit}> SUBMIT </button>
            

        </div>

    )
};

export default Create;