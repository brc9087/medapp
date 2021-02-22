import React from "react";
import Head from "../../src/images/headpic.PNG";
import rightArm from "../../src/images/rightarm.PNG";
import heart from "../../src/images/heart.PNG";
import lungs from "../../src/images/lung.PNG";
import leftArm from "../../src/images/leftarm.PNG";
import Belly from "../../src/images/belly.PNG";
import babylegs from "../../src/images/babylegs.PNG"

const styles = {
    pic: {
        height: "200px",
        width: "200px"
    },

    babylegs: {
        width: "100%"
    },

    belly: {
        width: "80%"
    },

    heart: {
        width: "100%"
    }
    

}

function BodyParts() {
    return (
        <div className="container">
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <img src={Head} alt="" style={styles.belly} id="head" />
                </div>
                <div class="col">
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col">
                    <img src={rightArm} alt="" style={styles.belly} />
                </div>
                <div class="col">
                    <img src={heart} alt="" style={styles.heart} id="heart" />
                </div>
                <div class="col">
                    <img src={lungs} alt="" style={styles.heart} id="lungs" />
                </div>
                <div class="col">
                    <img src={leftArm} alt="" style={styles.belly} />
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <img src={Belly} alt="" style={styles.belly} id="abdomen"/>
                </div>
                <div class="col">
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col">
                </div>
                <div class="col">
                    <img src={babylegs} alt="" style={styles.babylegs} />
                </div>
                <div class="col">
                </div>
            </div>
        </div>
    )
};



export default BodyParts;