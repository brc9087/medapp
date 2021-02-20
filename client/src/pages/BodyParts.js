import React from "react";
import Head from "../../src/images/head.PNG"
import Belly from "../../src/images/belly.PNG"
import LeftArm from "../../src/images/LeftArm.PNG"
import LeftLeg from "../../src/images/LeftLeg.PNG"
import RightArm from "../../src/images/RightArm.PNG"
import RightLeg from "../../src/images/RightLeg.PNG"

function BodyParts() {
    return (
        <div className="container">

            <div>
                <img src={Head} alt="" />
            </div>

            <div>
                <img src={Belly} alt="" />
            </div>

            <div>
                <img src={LeftArm} alt="" />
            </div>

            <div>
                <img src={LeftLeg} alt="" />
            </div>

            <div>
                <img src={RightArm} alt="" />
            </div>

            <div>
                <img src={RightLeg} alt="" />
            </div>



        </div>
    )
};



export default BodyParts;