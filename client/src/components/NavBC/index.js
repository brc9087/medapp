import React from "react";

const styles = {
    navBar: {
        backgroundColor: "blue",
    },
    font: {
        color: "white",
        fontSize: "14pt",
        fontStyle: "italic"
    },
    text: {
        color: "white"
    }
}
function Navbar() {
    return (
        <nav style={styles.navBar} className="navbar navbar-expand-lg">
            <a style={styles.font} className="navbar-brand" href="/">
                <h2 className="text-white">OnlySymps</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a style={styles.text} className="nav-link" href="/info">MY INFO</a>
                    </li>                    
                    
                    <li className="nav-item" id="Bodyparts">
                        <a style={styles.text} className="nav-link" href="/bodyparts">BODY PARTS</a>
                    </li>

                    {/* <li className="nav-item" id="home">
                        <a style={styles.text} className="nav-link" href="/symptoms">SYMPTOMS</a>
                    </li>  */}

                    <li className="nav-item" id="save">
                        <a style={styles.text} className="nav-link" href="/results">RESULTS</a>
                    </li>


                    {/* <li className="nav-item" id="save">
                        <a style={styles.text} className="nav-link" href="/login">LOGIN</a>
                    </li> */}

                    <li className="nav-item" id="Create">
                        <a style={styles.text} className="nav-link" href="/create">CREATE DX</a>
                    </li>


                    <li className="nav-item" id="profile">
                        <a style={styles.text} className="nav-link" href="/profile">PROFILE</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;

