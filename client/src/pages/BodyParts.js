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
        width: "100%",
        position: "relative",
        objectPosition: "10%"
    },

    head: {
        width: "100%",
        height: "80%"

    },

    div: {
        // backgroundColor: "#038989",
        border: "solid 200px",
        borderColor: "#038989"
    }


}

function BodyParts() {
    return (
        <div style={styles.div} >
            <div className="container">
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                        <h2>HEAD</h2>
                        <img src={Head} alt="" style={styles.head} id="head" />
                    </div>
                    <div class="col">
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col">
                        <img
                            name="musculoskeletal"
                            src={rightArm} alt=""
                            style={styles.head} />
                    </div>

                    <div class="col">
                        <h2> CARDIAC</h2>
                        <img 
                        name="cardiac"
                        src={heart} alt="" 
                        style={styles.pic}/>
                    </div>

                    <div class="col">
                        <h2> RESPIRATORY </h2>
                        <img 
                        name="respiratory"
                        src={lungs} alt="" 
                        style={styles.pic} />
                    </div>

                    <div class="col">
                        <img
                            name="musculoskeletal"
                            src={leftArm}
                            alt=""
                            style={styles.head} />
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                        <h2> ABDOMINAL </h2>
                        <img 
                        name="abdominal"
                        src={Belly} alt="" 
                        style={styles.head}/>
                    </div>
                    <div class="col">
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col">
                    </div>
                    <div class="col">
                        <h2>MUSCULOSKELETAL</h2>
                        <img 
                        name="musculoskeletal"
                        src={babylegs} alt="" 
                        style={styles.head}/>
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BodyParts;