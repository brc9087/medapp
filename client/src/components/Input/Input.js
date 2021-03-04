import React from "react";

const styles = {
    input: {
        width: "100%"
    }
}

function Input (props) {
    return (
        <div style={styles.input}>
        <input  className="input is-info is-rounded" {...props}></input>
        </div>

    );
}

export default Input;