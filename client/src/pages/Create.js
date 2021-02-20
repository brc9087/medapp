import React, {useState} from "react";

//import API 

function Create() {
    const [dxDetails, setDxDetails] = useState({ 
        Name: null,
        Description:null,
        Symptoms:null,
        Treatment:null,
    })

    const onChange =(e) =>{
        const title= e.target.getAttribute("placeholder")

        setDxDetails({...setDxDetails, [title]: e.target.value})

        //{key: value}
    }

    const onSubmit = async (e) =>{
        e.preventDefault();

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

            <button> SUBMIT </button>
            

        </div>

    )
};

export default Create;