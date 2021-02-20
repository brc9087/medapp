import React from "react";
import picture from "../../images/med2.jpg";


const styles = {
    jumbo: {
        backgroundImage: `url(${picture})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "700px",
        width: "100%",
        paddingTop: "10",
        textAlign: "center"
    }
}

function Jumbotron({ children }) {
    return (
        <div style={styles.jumbo} className="jumbotron jumbotron-fluid d-flex align-items-center">
              <div className="container text-center">
                {children}
            </div>
        </div>
    )
}

export default Jumbotron;