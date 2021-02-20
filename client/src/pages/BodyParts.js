import React from "react";
import Head from "../../src/images/head.PNG"
import Belly from "../../src/images/belly.PNG"

function BodyParts() {
    return (
        <div className="container">

            <div>
                <img src={Head} alt="" />
            </div>

            <div>
                <img src={Belly} alt="" />
            </div>

        </div>
    )
};

export default BodyParts;