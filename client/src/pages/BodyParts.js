import React, { useEffect, useState } from "react";
import Head from "../../src/images/headpic.PNG";
import rightArm from "../../src/images/rightarm.PNG";
import heart from "../../src/images/heart.PNG";
import lungs from "../../src/images/lung.PNG";
import leftArm from "../../src/images/leftarm.PNG";
import Belly from "../../src/images/belly.PNG";
import babylegs from "../../src/images/babylegs.PNG"
import { Link, useParams } from "react-router-dom";


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

function BodyParts({sharedInfo, setSharedInfo}) {

    // const [sharedInfo, setSharedInfo ] = useState([])

    // const [ category, setCategory ] = useState([]);
    // const [ formObject, setFormObject ] = useState({
    //     category: "",
    // })


    function handleInputChange(e) {
        // const { name, value } = e.target;
        const value = e.target.getAttribute('name')
        setSharedInfo({...sharedInfo, value})
        // location.reload()
        // location.replace("./results")
    }

    function click(e) {
        e.preventDefault()
        const userImg = e.target.getAttribute('name')
        console.log("userImg", userImg)
        setSharedInfo({...sharedInfo, userImg:userImg});
        location.replace("./results")
        // location.reload()
    }



    return (
        <div style={styles.div} >
            {/* {sharedInfo.results? <div>{sharedInfo.results}</div>:""} */}
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <h2>HEAD</h2>
                        <img 
                        name="head"
                        src={Head} alt="" 
                        style={styles.head} 
                        id="head" 
                        onClick={handleInputChange}/>

                    </div>
                    <div className="col">
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                        <img
                            name="musculoskeletal"
                            src={rightArm} alt=""
                            style={styles.head} />
                    </div>

                    <div className="col">
                        <h2> CARDIAC</h2>
                        <img 
                        name="cardiac"
                        src={heart} alt="" 
                        style={styles.pic}/>
                    </div>

                    <div className="col">
                        <h2> RESPIRATORY </h2>
                        <img 
                        name="respiratory"
                        src={lungs} alt="" 
                        style={styles.pic} />
                    </div>

                    <div className="col">
                        <img
                            name="musculoskeletal"
                            src={leftArm}
                            alt=""
                            style={styles.head} />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <h2> ABDOMINAL </h2>
                        <img 
                        name="abdominal"
                        src={Belly} alt="" 
                        style={styles.head}/>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <h2>MUSCULOSKELETAL</h2>
                        <img 
                        name="musculoskeletal"
                        src={babylegs} alt="" 
                        style={styles.head}/>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
            <Link to ="/results"><h1> NEXT STEP</h1> </Link>
        </div>
    )
};

export default BodyParts;