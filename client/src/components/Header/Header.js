import React from "react"; 

const styles= {
    pic: {
        border: "solid black 5px"
    }
}

function Header({Logo}) {
    return (
<img style={styles.pic} src={Logo} alt=""/>
    );
}

export default Header;