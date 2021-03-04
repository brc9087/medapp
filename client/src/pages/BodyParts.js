import React, { useEffect, useState } from "react";
import Head from "../../src/images/headpic.PNG";
import rightArm from "../../src/images/rightarm.PNG";
import heart from "../../src/images/heart.PNG";
import lungs from "../../src/images/lung.PNG";
import leftArm from "../../src/images/leftarm.PNG";
import Belly from "../../src/images/belly.PNG";
import babylegs from "../../src/images/babylegs.PNG"
import { Link, useParams } from "react-router-dom";
import Progressbar from "../components/Progress/Progressbar";
import Header from '../components/Header/Header'


const styles = {
    body: {
        postion: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
        padding: "80px",
        backgroundColor: "#038989",
        color: "white",
        textAlign: "center",
    },
  
        button: {
            padding: '10px',
        
        },
    
    link: {
        color: 'white',
        padding: '10px',
        margin: 'auto',
        fontWeight: 'bold'
    },
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
        border: "25px",
        borderstyle: "solid",
        padding: "40px",
        backgroundImage: "linear-gradient(#22687F, #5A8391, #22687F)",
        marginbottom: "5px",
        color: "white",
        borderStyle: "solid",
        borderWidth: "6px",
        borderColor: "white",

    }


}

function BodyParts({
    // sharedInfo, setSharedInfo
}) {

    const [sharedInfo, setSharedInfo ] = useState([])

    // const [ category, setCategory ] = useState([]);
    // const [ formObject, setFormObject ] = useState({
    //     category: "",
    // })
    
    //     useEffect(() => { 
    //         const value ="dasfdsf"
    //     localStorage.setItem("value", value)
    //     console.log("works")
    // })
    



    function handleInputChange(e) {
        e.preventDefault()
        // const { name, value } = e.target;
        // const value = e.target.getAttribute("name")
        const loco = localStorage.setItem("value", JSON.stringify(sharedInfo))
        // console.log("something")
        setSharedInfo(e.target.getAttribute("name"))
        
        // location.reload()
        // location.replace("./results")    
    }

    // function click(e) {
    //     e.preventDefault()
    //     const userImg = e.target.getAttribute("name")
    //     console.log("userImg", userImg)
    //     setSharedInfo({...sharedInfo, userImg:userImg});
    //     location.replace("./results")
    //     // location.reload()
    // }



    return (
    <>
    <Header Logo="/logo/logo.png" />
        <div className = "body" style= {styles.body}>
                        

        <Progressbar/>
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
                            style={styles.head}
                            onClick={handleInputChange}
                            />
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
            <button style = {styles.button}
                        type="submit"
                        className="button is-info is-rounded">
            <Link to ="/results"><p style={styles.link}>Next</p></Link>

                        </button>
        </div>
        </div>
        </>
    )
};

export default BodyParts;