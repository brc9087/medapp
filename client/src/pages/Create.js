import React, { useState } from "react";
import API from "../utils/API"
import { Input, FormBtn, TextArea } from "../components/Form2/index"

//import API 

function Create() {
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    function onChange(e) {
        const { placeholder, value } = e.target;
        setFormObject({ ...formObject, [placeholder]: value })


        // const title = e.target.getAttribute("placeholder")
        // setFormObject({ ...formObject, [title]: e.target.value })

        //{key: value}
    }

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    }

    function onSubmit(e) {
        e.preventDefault();
            API.saveBook({
                name: formObject.name,
                description: formObject.description,
                symptoms: formObject.symptoms,
                treatment: formObject.treatment
            })
                .then(res => loadBooks())
                .catch(err => console.log(err));


            //call for the validation

            // result = await API.Savebook(dxDetails)

            // with result you can do whatever
    }


    return (
        <div className="container">
            <div className="input-group mb-3" >
                <input type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1 "
                    onChange={onChange}
                    placeholder="name"
                    value={formObject.name} />
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="description" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} />
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="symptoms" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} />
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="treatment" aria-label="Username" aria-describedby="basic-addon1" onChange={onChange} />
            </div>

            <button 
            onClick={onSubmit}>
                SUMBIT
            </button>


        </div>

    )
};

export default Create;