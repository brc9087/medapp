import React from "react";

const styles = {

    card: {
        borderStyle: "solid",
        borderWidth: "6px",
        borderColor: "blue",
        backgroundColor: "white"
    }

   
}



function Info() {
    return (
        <div className="container">
            <div style={styles.card} className="card mb-2">
                <h1> Info </h1>
                <h2>What Is Your Age</h2>

                <form id="Age">
                    <input className="form-control form-control-lg" type="text" name="Age" />
                    <button type="submit" className="btn btn-danger danger">Submit</button>
                </form>
            </div>


            <div style={styles.card} className="card mb-2">
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

            <div style={styles.card} className="card mb-2">
          <h1>What are your Symptoms?</h1>
          
          <form onSubmit="">
            <fieldset>
              <label>
                <p>Syptoms</p>
                <input name="name" />
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>

        </div>
    )
};




export default Info;