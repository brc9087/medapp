import React from "react";

const styles = {
    navBar: {
        backgroundColor: "navy"
    },
    font: {
        color: "white",
        fontSize: "14pt",
        fontStyle: "italic"

    },
    text: {
        color: "pink"
    }
}

function Nav() {
    return (
        <nav style={styles.navBar} className="navbar navbar-expand-lg">
            <a style={styles.font} className="navbar-brand" href="/">
            <h2 className="text-white">OnlySymps</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a style={styles.text} className="nav-link" href="/">Search</a>
                        </li>
                        <li className="nav-item" id="save">
                        <a style={styles.text} className="nav-link" href="/">My symtoms</a>
                        </li>
                        <li className="nav-item" id="login">
                        <a style={styles.text} className="nav-link" href="/">login</a>
                        </li>
                        <li className="nav-item" id="signup">
                        <a style={styles.text} className="nav-link" href="/">signin</a>
                        </li>
                    
                    
                
                    
                    
                </ul>
            </div>
        </nav>
    );
}
 export default Nav;
