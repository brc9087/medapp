import React from "react";


function Info() {
    return (
        <div className="container">
            <div>
                <h1> Info </h1>
                <h2>What Is Your Age</h2>

                <form id="Age">
                    <input className="form-control form-control-lg" type="text" name="Age" />
                    <button type="submit" className="btn btn-danger danger">Submit</button>
                </form>
            </div>


            <div>
                <h2>What Is Your Sex</h2>
                <form>
                    <label htmlFor="gendermale"> Male
                        <input type="radio" name="sex" value="male" id="gendermale"/>
                    </label>

                    <label htmlFor="gendermale"> Female
                        <input type="radio" name="sex" value="female"/> 
                    </label>
                </form>
            </div>

        </div>
    )
};

export default Info;