import React from "react";

function Create() {


    return (
        <div className="container">
            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="Symptoms" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3" >
                <input type="text" className="form-control" placeholder="Treatment" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <button> SUBMIT </button>
            

        </div>

    )
};

export default Create;