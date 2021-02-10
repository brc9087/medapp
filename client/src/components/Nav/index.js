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
                <h2 className="text-white">Google Book Search React</h2>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a style={styles.text} className="nav-link" href="/">Search Books</a>
                    </li>
                    <li className="nav-item" id="report">
                        <a  style={styles.text} className="nav-link" href="/saved">My Library</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 export default Nav;