import React from "react";
import Head from "../../src/images/headpic.PNG";
import rightArm from "../../src/images/rightarm.PNG";
import heart from "../../src/images/heart.PNG";
import lungs from "../../src/images/lung.PNG";
import leftArm from "../../src/images/leftarm.PNG";
import Belly from "../../src/images/belly.PNG";
import babylegs from "../../src/images/babylegs.PNG"

const styles = {

    body: {
        postion: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: 'linear-gradient(#2a3342, #3e5c90)',
          padding: "100px",
          textAlign: "center",
        },
        parts: {
            height: "50%",
            width: "50%",
            margin: "auto",
            textAlign: "center"
         
        },

     
 

   
    

}

function BodyParts() {
    return (
        <div style = {styles.body}>

<div class="columns is-gapless is-multiline is-mobile" style={styles.parts}>

    {/* top */}
  <div className="column is-one-quarter">
  
  </div>
  <div className="column is-half">
  <img src={Head} alt="head" style={styles.belly} id="head" />
  </div>
  <div className="column is-one-quarter">
  </div>

{/* mid */}
  <div className="column is-one-quarter">
  <img src={rightArm} alt="" style={styles.belly} id="rightarm"/>
  </div>
  <div className="column is-one-quarter">
  <img src={heart} alt="" style={styles.heart} id="heart" />
  </div>
  <div className="column is-one-quarter">
  <img src={lungs} alt="" style={styles.heart} id="lungs" />
  </div>
  <div className="column is-one-quarter">
  <img src={leftArm} alt="" style={styles.belly} id="leftarm"/>
  </div>
  {/* bottom */}
  <div className="column is-one-quarter">
  </div>
  <div className="column is-half">
  <img src={Belly} alt="" style={styles.belly} id="abdomen"/>
  </div>
  <div className="column is-one-quarter">
  </div>

  <div className="column is-one-quarter">
  </div>
  <div className="column is-half">
  <img src={babylegs} alt="" style={styles.babylegs} id="babylegs" />
  </div>
  <div className="column is-one-quarter">
  </div>


</div>
</div>

    )
};



export default BodyParts;